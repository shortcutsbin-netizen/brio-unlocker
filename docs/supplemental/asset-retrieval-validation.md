# Supplemental asset collector validation

Independent revision1; numbered release remains61. `npm run build:assets` and `npm run test:assets` pass. The test executes the actual minified payload in jsdom with real streamed Response/Blob APIs and fake-indexeddb transaction emulation, then opens the generated ZIP using Python zipfile. All26 fixture files are at the ZIP root; CRC verification passes;36 events and5 wire records are checked.

Checks cover fetch Promise/response preservation, HTTP rejection and oversized-body omission without consuming the original response, binary XHR, copied-before-mutation typed-array frames, Blob/string frames, original decoder identity/throws and descriptor-only snapshots, metadata secret redaction, static JS/CSS/import/source-map discovery, embedded mapped sources, no mutation replay/live-body refetch duplication, IndexedDB recovery across reinjection, ZIP retry control and restored fetch/XHR/WebSocket/decoder descriptors/listeners. Raw arbitrary body sanitization is not claimed.

The standalone payload parses with zero comments and bundles unmodified Acorn with separately distributed MIT license. No external loader or game source evaluation.

| Artifact | Bytes | SHA256 |
|---|---:|---|
| dist/brio_asset_retrieval.js | 153160 | `d8c10e275b0d130f26178f344011d62fef773cb7d9ef5f15f1199972c3602a5e` |

Existing source src/brio.js equals frozen versions/v61/brio.js; current numbered minified payload equals its frozenV61 archive. Existing main build/test commands, release version, user uploads, previous source/log/archive files and complete AGENTS/README historical suffixes are preserved. Only separate build:assets/test:assets commands and a test-only fake-indexeddb dependency are added to package metadata. Recorder preservation guard passes.

Fixtures do not establish complete live-site network coverage, browser storage availability, live FPS/latency, CORS permission or native pixel alignment. Capture/read/persistence quotas, representation changes, private/early sockets, worker/cross-origin boundaries and additional HAR/manual exports are documented in asset-retrieval.md and embedded archive metadata.
