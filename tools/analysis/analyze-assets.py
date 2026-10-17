"""Offline audit of the October asset export; never fetch or execute captured code.

Requires Python msgpack for existing raw WebSocket bytes and Pillow for sprite bounds.
Publishes aggregate schemas/counts/hashes only, never player values, request bodies,
headers, account identifiers, or socket URLs. Original capture remains untouched.
"""
from pathlib import Path
from collections import Counter, defaultdict
from html.parser import HTMLParser
from urllib.parse import urlsplit, urljoin
import base64
import hashlib
import json
import subprocess
import msgpack
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
CAPTURE = ROOT / 'docs/game-sources/brio_asset_retrival-results'
OUTPUT = ROOT / 'docs/analysis/runs/asset-retrieval-2026-10-17.json'

def sha(data):
    return hashlib.sha256(data).hexdigest()

def load(suffix):
    return json.loads(next(CAPTURE.glob('*__' + suffix)).read_text())

class Document(HTMLParser):
    def __init__(self):
        super().__init__()
        self.scripts, self.inline = [], []
        self.current = None

    def handle_starttag(self, tag, attrs):
        if tag == 'script':
            self.current = dict(attrs)
            self.scripts.append(self.current)

    def handle_data(self, data):
        if self.current is not None and not self.current.get('src'):
            self.inline.append(data)

    def handle_endtag(self, tag):
        if tag == 'script':
            self.current = None

manifest, inventory, gaps = load('manifest.json'), load('inventory.json'), load('gaps.json')
files = sorted(f for f in CAPTURE.rglob('*') if f.is_file())
records = manifest['files']
by_name = {r['name']: r for r in records}
missing = [r for r in records if not (CAPTURE / r['name']).is_file()]
recoveries = []
for r in missing:
    url = r.get('url', '')
    if not url.startswith('data:'):
        continue
    header, encoded = url.split(',', 1)
    if ';base64' not in header:
        continue
    data = base64.b64decode(encoded, validate=True)
    if len(data) != r['bytes']:
        raise ValueError('Embedded asset does not match manifest byte count')
    # Short alternate names avoid repeating a possible Windows path-length issue.
    # The original upload and its original manifest are never changed.
    if header == 'data:application/json;base64':
        source_map = json.loads(data)
        if source_map.get('file') != 'lightbox.scss':
            raise ValueError('Unexpected missing embedded map')
        filename = 'embedded-lightbox.scss.map'
    elif header == 'data:image/webp;base64':
        filename = 'embedded-image.webp'
    else:
        continue
    target = ROOT / 'docs/analysis/asset-retrieval-recovered' / filename
    target.parent.mkdir(parents=True, exist_ok=True)
    if target.exists() and target.read_bytes() != data:
        raise ValueError('Refuse different-byte recovery overwrite')
    target.write_bytes(data)
    recoveries.append({'originalName': r['name'], 'recoveredFile': str(target.relative_to(ROOT)),
                       'bytes': len(data), 'sha256': sha(data),
                       'method': 'Exact base64 bytes from original manifest data URL; no fetch'})
mismatches = [r['name'] for r in records if (CAPTURE / r['name']).is_file()
              and (CAPTURE / r['name']).stat().st_size != r['bytes']]
hashes = [{'name': str(f.relative_to(CAPTURE)), 'bytes': f.stat().st_size,
           'sha256': sha(f.read_bytes())} for f in files]
# A deterministic digest over every uploaded file, including the HAR and metadata.
inventory_digest = sha(json.dumps(hashes, separators=(',', ':')).encode())
events, malformed = [], []
for f in files:
    if f.suffix == '.jsonl':
        for number, line in enumerate(f.read_text().splitlines(), 1):
            try:
                events.append(json.loads(line))
            except ValueError:
                malformed.append({'file': f.name, 'line': number})
events.sort(key=lambda e: e['seq'])
counts = Counter(e['type'] for e in events)
http = {r.get('body'): r for r in events if r['type'] == 'http-response'}
first_party = []
for r in records:
    url = urlsplit(r.get('url', ''))
    if url.hostname == 'buildroyale.io' and (url.path == '/' or
                                            url.path.endswith(('.js', '.css', '.wasm', '.map'))):
        f = CAPTURE / r['name']
        if not f.is_file():
            continue
        old_name = {'/js/uOfrVi.js': 'engine.js', '/js/msgpack.js': 'msgpack.js',
                    '/js/scheme.js': 'scheme.js', '/css/main.css': 'main.css'}.get(url.path)
        old = ROOT / 'docs/game-sources' / old_name if old_name else None
        first_party.append({'path': url.path, 'file': f.name, 'bytes': f.stat().st_size,
                            'sha256': sha(f.read_bytes()), 'status': http.get(f.name, {}).get('status'),
                            'mime': http.get(f.name, {}).get('mime'),
                            'matchesExisting': f.read_bytes() == old.read_bytes() if old else None})
index = next(x for x in first_party if x['path'] == '/')
document = Document()
document.feed((CAPTURE / index['file']).read_text())
har_file = CAPTURE / 'client-load.har'
har = json.loads(har_file.read_text())['log']['entries']
har_home = next(e for e in har if e['request']['url'] == 'https://buildroyale.io/')
body = har_home['response']['content']
har_home_bytes = (base64.b64decode(body['text']) if body.get('encoding') == 'base64'
                  else body['text'].encode())
har_doc = Document()
har_doc.feed(har_home_bytes.decode())

# All indexed WebSocket frame slices are validated. Decode ONLY stored received
# application frames; no game script execution or live codec/network interaction.
all_wire = [e for e in events if e['type'] == 'wire']
wire = [e for e in all_wire if e.get('channel') == 'websocket']
wire_buffers = {e['file']: (CAPTURE / e['file']).read_bytes() for e in all_wire}
wire_ranges = defaultdict(list)
for e in all_wire:
    wire_ranges[e['file']].append((e['offset'], e['offset'] + e['length']))
wire_coverage_errors = []
for filename, ranges in wire_ranges.items():
    cursor = 0
    for start, end in sorted(ranges):
        if start != cursor or end < start:
            wire_coverage_errors.append(filename)
            break
        cursor = end
    if cursor != len(wire_buffers[filename]):
        wire_coverage_errors.append(filename)
bounds_errors, decode_errors = [], []
packet_counts, schema = Counter(), defaultdict(Counter)
creates, create_keys, object_keys = Counter(), defaultdict(Counter), defaultdict(Counter)
updates, update_keys, lifecycle_ids, removals = Counter(), defaultdict(Counter), defaultdict(set), Counter()
container_subtypes, frame_counts = Counter(), Counter()
entity_kind, entity_subtype = {}, {}
subtype_ids = defaultdict(set)
subtype_updates, subtype_update_keys = Counter(), defaultdict(Counter)
chest_types = Counter()
player_shapes, player_keys = Counter(), Counter()
player_rows = 0
candidate_fields = Counter()
nested_candidates = Counter()
environment_keys = Counter()
decode_frames = 0
EXTENSIONS = Counter()
snapshot_markers = Counter()

def inspect_snapshot(value):
    if isinstance(value, dict):
        for child in value.values():
            inspect_snapshot(child)
    elif isinstance(value, list):
        for child in value:
            inspect_snapshot(child)
    elif isinstance(value, str) and value in ['[TRUNCATED]', '[REDACTED]', '[ACCESSOR OMITTED]', '[CIRCULAR]']:
        snapshot_markers[value] += 1

for event in events:
    if event['type'] == 'native-decoded':
        inspect_snapshot(event['data'])

def inspect_keys(value):
    if isinstance(value, dict):
        for key, child in value.items():
            if isinstance(key, str) and any(term in key.lower() for term in
                    ['isbot', 'isai', 'npc', 'controller', 'provenance', 'loot', 'seed', 'contents']):
                nested_candidates[key] += 1
            inspect_keys(child)
    elif isinstance(value, list):
        for child in value:
            inspect_keys(child)

def ext(code, data):
    EXTENSIONS[code] += 1
    return msgpack.ExtType(code, data)

for e in wire:
    b = wire_buffers[e['file']]
    offset, length = e['offset'], e['length']
    frame_counts[(e['socket'], e['direction'])] += 1
    if offset < 0 or length < 0 or offset + length > len(b):
        bounds_errors.append({'seq': e['seq'], 'file': e['file']})
        continue
    if e['direction'] != 'received':
        continue
    frame = b[offset:offset + length]
    try:
        data = msgpack.unpackb(frame, raw=False, strict_map_key=False, ext_hook=ext)
    except Exception as error:
        decode_errors.append({'seq': e['seq'], 'errorType': type(error).__name__})
        continue
    decode_frames += 1
    inspect_keys(data)
    for d in data if isinstance(data, list) else [data]:
        if not isinstance(d, dict):
            continue
        t = d.get('t', '<none>')
        packet_counts[t] += 1
        schema[t].update(d.keys())
        candidate_fields.update(k for k in d if isinstance(k, str)
                                and any(term in k.lower() for term in
                                        ['isbot', 'isai', 'npc', 'controller', 'provenance', 'loot', 'seed', 'contents']))
        if t == 'e' and isinstance(d.get('envs'), dict):
            environment_keys.update(d['envs'].keys())
        if t == 'x' and isinstance(d.get('p'), list) and len(d['p']) >= 2:
            ident, kind = d['p'][:2]
            key = (e['socket'], ident)
            if not isinstance(kind, str):
                continue
            creates[kind] += 1
            create_keys[kind].update(d.keys())
            lifecycle_ids[kind].add(key)
            entity_kind[key] = kind
            subtype = d.get('type')
            if kind == 'object' and isinstance(subtype, str):
                object_keys[subtype].update(d.keys())
                container_subtypes[subtype] += 1
                entity_subtype[key] = subtype
                subtype_ids[subtype].add(key)
            if kind == 'chest':
                chest_types[str(d.get('chestType'))] += 1
            if kind == 'player':
                player_rows += 1
                player_keys.update(d.keys())
                player_shapes[tuple(sorted(d))] += 1
        elif t == 'y' and isinstance(d.get('a'), list) and d['a']:
            key = (e['socket'], d['a'][0])
            kind = entity_kind.get(key, '<unobserved-create>')
            updates[kind] += 1
            update_keys[kind].update(d.keys())
            if kind == 'object' and key in entity_subtype:
                subtype_updates[entity_subtype[key]] += 1
                subtype_update_keys[entity_subtype[key]].update(d.keys())
        elif t == 'z':
            key = (e['socket'], d.get('i'))
            removals[entity_kind.get(key, '<unobserved-create>')] += 1

render = [e for e in events if e['type'] == 'native-render-snapshot']
pose_groups = Counter((str(e.get('gun')), str(e.get('nativeSteadying'))) for e in render)
artwork = []
for r in records:
    url = urlsplit(r.get('url', ''))
    if url.path in ['/buildart/topmusket.png', '/buildart/topscar.png',
                    '/buildart/flash0.png', '/buildart/flash1.png', '/buildart/flash2.png']:
        with Image.open(CAPTURE / r['name']) as image:
            artwork.append({'path': url.path, 'file': r['name'], 'pixels': list(image.size),
                            'alphaBounds': image.convert('RGBA').getchannel('A').getbbox()})

report = {
    'captureCommit': subprocess.check_output(['git', 'log', '-1', '--format=%H', '--', str(CAPTURE)], cwd=ROOT, text=True).strip(),
    'directory': str(CAPTURE.relative_to(ROOT)),
    'verification': {'files': len(files), 'bytes': sum(f.stat().st_size for f in files),
                     'extensions': dict(Counter(f.suffix for f in files)), 'inventoryDigestSha256': inventory_digest,
                     'manifestEntries': len(records), 'missing': [{'name': r['name'], 'bytes': r['bytes'],
                     'host': urlsplit(r.get('url', '')).hostname, 'reason': r.get('reason'),
                     'nameLength': len(r['name'])} for r in missing],
                     'byteMismatches': mismatches, 'unlistedFiles': [f.name for f in files if f.name not in by_name],
                     'recoveredEmbeddedAssets': recoveries,
                     'events': len(events), 'eventCounts': dict(counts), 'malformedJSONL': malformed,
                     'sequencesContiguous': [e['seq'] for e in events] == list(range(1, len(events) + 1)),
                     'collectorState': manifest['state'], 'gapStages': dict(Counter(g['stage'] for g in gaps)),
                     'inventoryStatus': dict(Counter(r['status'] for r in inventory))},
    'sources': {'firstParty': first_party,
                'documentScripts': [urljoin('https://buildroyale.io/', s['src']).split('?')[0]
                                    for s in document.scripts if s.get('src')],
                'inlineScriptBytes': [len(s.encode()) for s in document.inline],
                'har': {'entries': len(har), 'bytes': har_file.stat().st_size,
                        'sha256': sha(har_file.read_bytes()), 'resourceTypes': dict(Counter(e.get('_resourceType') for e in har)),
                        'bodies': sum('text' in e['response'].get('content', {}) for e in har),
                        'firstPartyEntries': sum(urlsplit(e['request']['url']).hostname == 'buildroyale.io' for e in har),
                        'homeBodyBytes': len(har_home_bytes), 'homeBodySha256': sha(har_home_bytes),
                        'homeScriptSourcesEqual': [s.get('src') for s in document.scripts] == [s.get('src') for s in har_doc.scripts]},
                'sourceMaps': [{'file': r['name'], 'host': urlsplit(r.get('url', '')).hostname}
                               for r in records if r['name'].endswith('.map')]},
    'offlineWire': {'decoder': 'Python msgpack ' + msgpack.__version__,
                    'frames': len(wire), 'indexedFiles': len(wire_buffers),
                    'allWireRecords': len(all_wire), 'allWireCoverageErrors': sorted(set(wire_coverage_errors)),
                    'nativeSnapshotMarkers': dict(snapshot_markers),
                    'frameCounts': [{'socketOrdinal': k[0], 'direction': k[1], 'count': v} for k, v in sorted(frame_counts.items())],
                    'boundsErrors': bounds_errors, 'decodedReceivedFrames': decode_frames,
                    'decodeErrors': decode_errors, 'extensions': dict(EXTENSIONS),
                    'packetCounts': dict(packet_counts), 'packetFields': {k: dict(v) for k, v in schema.items()},
                    'creates': dict(creates), 'uniqueSocketIdentityPairs': {k: len(v) for k, v in lifecycle_ids.items()},
                    'createFields': {k: dict(v) for k, v in create_keys.items()},
                    'objectsByType': dict(container_subtypes), 'objectFields': {k: dict(v) for k, v in object_keys.items()},
                    'objectUniqueSocketIdentityPairs': {k: len(v) for k, v in subtype_ids.items()},
                    'objectUpdatesByType': dict(subtype_updates), 'objectUpdateFields': {k: dict(v) for k, v in subtype_update_keys.items()},
                    'chestTypes': dict(chest_types),
                    'updates': dict(updates), 'updateFields': {k: dict(v) for k, v in update_keys.items()},
                    'removals': dict(removals), 'candidateFieldNameHits': dict(candidate_fields),
                    'nestedCandidateFieldNameHits': dict(nested_candidates),
                    'environmentFields': dict(environment_keys), 'playerCreates': player_rows,
                    'playerCreateShapes': [{'fields': list(k), 'count': v} for k, v in player_shapes.items()],
                    'playerCreateFields': dict(player_keys),
                    'limits': 'Offline stored payloads only. Identity pairs are not opening counts. Equal schemas do not prove equal controllers. No behavioural or bot labels inferred.'},
    'geometry': {'snapshots': len(render), 'poses': [{'gun': k[0], 'nativeSteadying': k[1], 'count': v} for k, v in sorted(pose_groups.items())],
                 'allMembershipChecksTrue': all(n.get('liveParent') for r in render for n in r['nodes']),
                 'artwork': artwork, 'canvasCaptureClicks': counts['canvas-capture-click'],
                 'limits': 'Pose/nativeSteadying is not held-input ADS proof. No captured canvas matrices, cursor coordinates or bullet/cone pixels; do not infer alignment.'},
    'limits': ['Browser UI truncation is bypassed by full git clone.',
               'No source, HAR or raw wire bodies are executed. Offline MessagePack decoding does not invoke the game codec.',
               'No extra network requests or gameplay performed. All original uploaded bytes preserved.',
               'Manifest integrity is byte-count verification plus new hashes; exporter supplied no per-file expected hashes.',
               'No complete browser/worker/private-server coverage claim.'],
}
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
OUTPUT.write_text(json.dumps(report, indent=2, ensure_ascii=False) + '\n')
print(json.dumps({'report': str(OUTPUT.relative_to(ROOT)), 'files': len(files), 'events': len(events),
                  'missing': len(missing), 'wireFrames': len(wire), 'decoded': decode_frames,
                  'decodeErrors': len(decode_errors), 'boundsErrors': len(bounds_errors),
                  'creates': dict(creates), 'objectsByType': dict(container_subtypes)}, indent=2))
