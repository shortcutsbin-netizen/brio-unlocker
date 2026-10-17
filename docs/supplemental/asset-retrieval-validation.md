# Live export audit — 2026-10-17

See ../findings/asset-retrieval-2026-10-17.md and aggregate reports under ../analysis/runs/. User capture c93b1df contains 3,368 files/55,433,083 bytes; all are accessible through git. Present manifest records match exact lengths; two missing embedded data-URL assets recovered losslessly under ../analysis/asset-retrieval-recovered. Original upload preserved. All 58,875 JSONL events parse/contiguous; all 38,062 wire records exactly cover438 files;37,967are WebSocket frames, all 14,526receivedframes decode offline with zero failures/extensions. Native snapshot records have no explicit truncation markers; collector reports zero failed writes or decoded omissions.32 pose snapshots hit the geometry cap; zero canvas-capture clicks.37 gaps remain explicitly bounded, not concealed by successful export. HAR is document-only, not full network proof.

Main npm ci/build/test pass;327,692-byteV61 payload remains exact to immutable archive, source unchanged, no payload comments. Read-only Acorn audits parse captured core scripts; Python audit reruns deterministically and validates recovered content hashes. No runtime implementation or collector changes were made. This audit establishes captured-file accessibility and finite-data integrity, not complete browser/server visibility or native visual correctness. Existing fixture-validation record below remains unchanged.

---

# Supplemental asset collector validation

Independent revision1; numbered release remains61. `npm run build:assets` and `npm run test:assets` pass. The test executes the actual minified payload in jsdom with real streamed Response/Blob APIs and fake-indexeddb transaction emulation, then opens the generated ZIP using Python zipfile. All26 fixture files are at the ZIP root; CRC verification passes;36 events and5 wire records are checked.

Checks cover fetch Promise/response preservation, HTTP rejection and oversized-body omission without consuming the original response, binary XHR, copied-before-mutation typed-array frames, Blob/string frames, original decoder identity/throws and descriptor-only snapshots, metadata secret redaction, static JS/CSS/import/source-map discovery, embedded mapped sources, no mutation replay/live-body refetch duplication, IndexedDB recovery across reinjection, ZIP retry control and restored fetch/XHR/WebSocket/decoder descriptors/listeners. Raw arbitrary body sanitization is not claimed.

The standalone payload parses with zero comments and bundles unmodified Acorn with separately distributed MIT license. No external loader or game source evaluation.

| Artifact | Bytes | SHA256 |
|---|---:|---|
| dist/brio_asset_retrieval.js | 153160 | `d8c10e275b0d130f26178f344011d62fef773cb7d9ef5f15f1199972c3602a5e` |

Existing source src/brio.js equals frozen versions/v61/brio.js; current numbered minified payload equals its frozenV61 archive. Existing main build/test commands, release version, user uploads, previous source/log/archive files and complete AGENTS/README historical suffixes are preserved. Only separate build:assets/test:assets commands and a test-only fake-indexeddb dependency are added to package metadata. Recorder preservation guard passes.

Fixtures do not establish complete live-site network coverage, browser storage availability, live FPS/latency, CORS permission or native pixel alignment. Capture/read/persistence quotas, representation changes, private/early sockets, worker/cross-origin boundaries and additional HAR/manual exports are documented in asset-retrieval.md and embedded archive metadata.
