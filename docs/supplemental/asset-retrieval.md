# Completed capture — 2026-10-17

The user has completed this acquisition pass. Results are at ../game-sources/brio_asset_retrival-results; review at ../findings/asset-retrieval-2026-10-17.md. All 3,368uploaded files are accessible via git; no re-upload/splitting is required for GitHub's directory display warning. Two absent embedded files were recovered from manifest data URLs without recapture. No additional run is requested before the first separately greenlit cloud trial. The original revision1 procedure below is retained for future acquisition only; it is not a new testing demand.

---

# BRIO supplemental asset retrieval — revision 1

Runnable artifact: [brio_asset_retrieval.js](../../dist/brio_asset_retrieval.js). This is a standalone, direct minified Console script with no remote loader, eval, archive library download or numbered release bump. Current numbered suite stays V61. Build/test commands are separate: `npm run build:assets` and `npm run test:assets`.

## Recommended pass

1. Open the game home page. For maximum browser-level coverage, open DevTools Network first, enable Preserve log and Disable cache, reload home, then leave Network recording. This independent HAR recording is optional for launching the collector but closes important browser-only gaps.
2. If collecting evidence for the currently wrong cones too, paste the existing V61 suite first. Then open `dist/brio_asset_retrieval.js` on GitHub, Copy raw file, and paste it into Console. The asset collector works alone; native render-tree snapshots additionally require the already exposed V61 renderer.
3. Wait for CAPTURING. Initial discovery runs three additional read-only resource GETs at a time. Let the queue substantially settle; do not reload or navigate the tab during capture. Use the terminal's minimize control as needed.
4. Play **two normal matches**, without a container/gun quota. Natural weapon changes, hip/ADS and normal gameplay expose loaded resources and replication traffic. No manual protocol probes or before/after content buttons. If V61 is present, CAPTURE CANVASES can save current readable game/preview canvas PNGs; it cannot include the operating-system pointer or DOM overlays. A short native screen recording is still useful for the cone defect.
5. After the second match, wait for **0 queued / 0 active GETs** if practical, then click **DOWNLOAD ZIP**. The collector stops, restores its current own wrappers, finishes pending persistence, and builds `brio_asset_retrival-results.zip` (spelling intentionally matches the user's request).
6. Extract it. **Every ZIP entry is at the root.** Keep all generated filenames; session prefixes avoid overwriting the existing source files. The manifest maps each captured asset back to its original URL and acquisition method. Upload reviewed contents to `docs/game-sources/` at its root; subsequent analysis can reorganize them.

Raw network bodies can contain account/player information or credentials. Recognized secrets in structured headers, URL parameters and decoded snapshots are redacted, but arbitrary binary/raw bodies are not guaranteed sanitized. Review before committing them to a public repository. Keep files containing credentials out of public commits; provide them privately if necessary.

## What is captured

| Surface | Acquisition and evidence limits |
|---|---|
| Fetch | Original call/Promise preserved; request metadata and supported bodies; promptly consumed response clones, without consuming the game's original response |
| XHR | Original open/header/send behavior; supported response bodies after loadend; browser JSON/document responses are explicitly marked reserialized |
| WebSockets | New main-realm sockets and reachable existing sockets on their next normal send; sent/received application payload bytes, direction, offsets and timing |
| Existing native decoder | Read-only native `msgpack.decode` result observer, preserving object identity/throws; bounded structured copies, never an independent live decode |
| Worker/SharedWorker | Observed constructor URLs/options, then GET of accessible bootstrap resources; does not inject into workers |
| EventSource/beacon | Visible main-realm message/request data; no claim of raw SSE/HTTP framing |
| Previously loaded assets | DOM/resource-timing inventory and explicitly marked discovery GET refetches; these are not original historical responses |
| Script/style discovery | Embedded unmodified Acorn parses JS literals/imports; HTML/CSS URLs and exposed sourceMappingURL references; no game source evaluation |
| Source maps | Accessible map responses, embedded sourcesContent and eligible exposed source references |
| Browser Cache Storage | Readable cached responses from a bounded enumeration; opaque or unavailable entries appear as gaps |
| Native render evidence | Up to32 changed gun/native-steadying snapshots of the already exposed V61 held/muzzle ancestry and draw helpers; native steadying is not asserted to be held-input ADS |
| Canvas pixels | Explicit CAPTURE CANVASES click; readable canvas PNGs, dimensions, viewport; tainted canvases are reported |
| Diagnostics | File/URL acquisition inventory, omitted/failed operations, capture limits, counts and persistent session checkpoint |

Wire payloads are packed in root-level `wire_*.bin` files. JSONL events provide each record's filename, offset, length, direction and original type. Assets remain binary files with their original extension where available. HTTP bodies are bytes exposed by browser response APIs after HTTP content decoding; original gzip/HTTP framing is not reproduced. Multipart descriptors do not claim to reproduce the browser-generated multipart boundary/encoding.

## Persistence and recovery

Captured files are saved to this origin's IndexedDB, independently of ChatGPT conversation availability. Records from prior injections are retained and included in export; unique session prefixes distinguish them. Payload chunks flush approximately every2seconds, with discovery checkpoints approximately every10seconds. A tab crash can lose the most recent unflushed chunk/checkpoint; browser/site storage eviction or clearing site data can remove saved data.

If the page or collector stops unexpectedly, return to the same origin, paste the script again, then DOWNLOAD ZIP. Do not clear site data. CLEAR SAVED CAPTURES deletes only this collector's saved files, stops capture, and requires reinjection for a fresh collection. Use it only when intentionally discarding earlier collector data.

Stop/teardown restores a method only while it still owns the current wrapper; it never overwrites a later game/third-party replacement. A foreign wrapper that retained an inactive observer may keep that inactive function until its own cleanup/reload. Export after the match is preferred when running alongside V61.

## Explicit budgets and completeness

Per injection:45minutes;256MiB assets;96MiB raw wire;32MiB event files;32MiB per file/body;6000 admitted files;4000 discovered URLs;180000 events;64MiB queued write/body admission budgets; at most8 response readers and3 discovery GETs. Native decoded representations have a separate8MiB sub-budget so they do not immediately starve wire-index metadata. JS discovery parses at most2MiB per script/12MiB total; full readable source bodies can still be stored when static parsing is omitted. A session checkpoint is separately bounded at2MiB. Older sessions retained in storage can make a combined ZIP larger than one injection's budgets.

Failures, budgets, unreadable bodies and stopped queued resources are recorded. Numbers labeled gaps include expected platform limitations and actual capture failures; inspect `gaps.json` and inventory rather than equating a nonzero count with a broken run. A positive stored-file count does not prove a complete browser-network capture. Inspect write-error counts; if storage fails, export what remains and report that failure instead of extending the run.

## Separate exports that page JavaScript cannot replace

1. **Browser network HAR:** Start DevTools Network before the reload, enable Preserve log/Disable cache, perform the pass, then Export HAR (sanitized). Save as `client-load.har`. The HAR supplies browser-level history/initiators/redirect information missing from late page injection. HAR is not promised to contain every response body or WebSocket message. If an important response body is absent, save that request's actual Response separately.
2. **Unretrievable sources/maps/workers:** Review collector inventory/gaps first. For each actual relevant resource that CORS or another browser boundary blocked, find it in DevTools Network or Sources and save/copy its response under its real filename. If DevTools shows authored/mapped source or a worker script not represented by a retrievable URL, save it from Sources; inspect source-map availability in More tools → Developer Resources. Do not guess unpublished `.map` or server file URLs.
3. **Native visual evidence:** Save a short OS screen recording or hip/ADS screenshots showing player, gun, cone, cursor and actual bullet travel. Canvas export cannot capture the OS cursor, surrounding DOM, or a tainted canvas.
4. **Early/private socket frames and other realms:** A page collector cannot enumerate inaccessible already-created sockets, intercept cached native API references, or observe all worker/service-worker/cross-origin-frame internal traffic. Preserve the corresponding browser-level Network/worker debugging evidence if a specific missing route is identified. WebSocket application payloads exclude handshake headers, ping/pong/control framing, TLS/TCP details and the sender's private process internals.
5. **Server-only implementation/state:** Bot AI code, private controllers or pre-open loot state never shipped to the client cannot be extracted by this collector or a HAR. Only legitimately available client resources/source maps or separately supplied server source can close that gap.

Native app API calls are delegated exactly once; collector resource backfill uses additional read-only GETs. No gameplay inputs, application mutation requests, protocol sends, socket creation or game source evaluation are performed by the collector itself. Source literals not yet loaded, dynamically assembled unknown URLs, unavailable source maps and inaccessible browser/server contexts remain explicit limitations, not evidence of feature impossibility.

## Validation

See `asset-retrieval-validation.md`, `asset-retrieval-build.json` and `asset-retrieval-test-output.txt`. Automated fixtures validate the actual standalone minified payload with browser-style APIs and IndexedDB emulation; they do not prove every live site/network condition. Vendored parser MIT license is in `acorn-LICENSE.txt`.
