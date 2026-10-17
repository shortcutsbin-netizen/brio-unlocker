// Parse captured first-party code as data. Never execute a capture or fetch URLs.
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const {parse} = require('acorn');
const root = path.resolve(__dirname, '../..');
const capture = path.join(root, 'docs/game-sources/brio_asset_retrival-results');
const manifest = JSON.parse(fs.readFileSync(path.join(capture, fs.readdirSync(capture).find(x => x.endsWith('__manifest.json')))));
const results = [];
const wanted = new Set(['/js/msgpack.js', '/js/scheme.js', '/js/uOfrVi.js']);
for (const record of manifest.files) {
  let url;
  try { url = new URL(record.url); } catch { continue; }
  if (url.hostname !== 'buildroyale.io' || !wanted.has(url.pathname)) continue;
  const raw = fs.readFileSync(path.join(capture, record.name), 'utf8');
  const ast = parse(raw, {ecmaVersion:'latest'}), nodes = [], strings = [], references = [];
  function walk(n) {
    if (!n?.type) return;
    nodes.push(n);
    if (n.type === 'Literal' && typeof n.value === 'string') strings.push(n);
    if (n.type === 'Identifier' && /^(Worker|SharedWorker|WebAssembly|serviceWorker|isBot|isAI|npc|controller|lootSeed|contents)$/.test(n.name)) references.push({offset:n.start,term:n.name,nodeType:n.type});
    for (const value of Object.values(n)) if (Array.isArray(value)) value.forEach(walk); else if (value?.type) walk(value);
  }
  walk(ast);
  results.push({file:record.name,path:url.pathname,bytes:Buffer.byteLength(raw),sha256:crypto.createHash('sha256').update(raw).digest('hex'),
    parsedNodes:nodes.length,identifierReferences:references,
    selectedStringReferences:strings.filter(n=>/^(Worker|SharedWorker|WebAssembly|serviceWorker|isBot|isAI|npc|controller|lootSeed|lootTable|contents|droid|wander|isPreview)$/.test(n.value)).map(n=>({offset:n.start,term:n.value})),
    loaderStringCandidates:strings.filter(n=>/worker|\.wasm(?:$|\?)|sourceMappingURL/i.test(n.value)).map(n=>({offset:n.start,term:n.value.slice(0,160)}))});
}
const engine = fs.readFileSync(path.join(root, 'docs/game-sources/engine.js'), 'utf8');
const start = engine.indexOf('éa:function(ÉÆ,áå,Æ)');
const end = engine.indexOf('Eââ:function', start);
const report = {sources:results,nativeDrawable:{start,end,source:engine.slice(start,end),
  interpretation:'Native drawable divides incoming scalar by size; it translates by position/incoming scalar, rotates canvas, and passes the divided scalar to draw/children. Canvas matrix alone does not carry all native size scaling.'},
  limits:'Exact parsed identifier/literal checks, not proof against every dynamically assembled path or inaccessible server/controller code. Supplied core hashes match previous source. No captured script executed.'};
const output = path.join(root, 'docs/analysis/runs/asset-retrieval-2026-10-17-source.json');
fs.writeFileSync(output, JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({report:path.relative(root,output),sources:results.map(x=>({path:x.path,nodes:x.parsedNodes,identifiers:x.identifierReferences,strings:x.selectedStringReferences,loaders:x.loaderStringCandidates})),nativeDrawable:{start,end}}));
