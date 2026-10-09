# V54 validation — 2026-10-09

Reproduce with `npm ci`, `npm run build`, `npm test`, `node tools/analysis/analyze-v54.cjs`, `node tests/performance.cjs --record`, and `git diff --check`. All35 configurations run against both readable source and the actual direct minified payload:64 regression and6 challenge executions, plus the work-budget regression.

| Artifact | Bytes | SHA256 |
|---|---:|---|
| `src/brio.js` | 681855 | `b08f4b0c70ab51aa173def55a5c30a0b6e1d18eed1a871f4a2d6d322b1038c2e` |
| `dist/brio-v54.min.js` | 315323 | `5ca7290852c8f86358147bafff8ed258ec7bb608871a3194b8828667a0ab03c2` |

Immutable `versions/v54/` source/payload copies are byte-identical. All earlier published archives and exact supplied engine/logs stay unchanged. The obsolete startup's embedded previous-player records were replaced by an anonymous count/scope after automatic publication review; its rejected preliminary build was retained locally and is not published. Every 977 non-vendored executable block and 693 function is annotated; 1541 source comments, zero missing annotations. Vendored parser remains unchanged, SHA256 `845e6f940e25c2fd3d90ce2ea8b5974ec01282f24d666030201db18cd37150f4`. Minified Acorn parse finds zero comments. No loader, native source evaluation or independent live decoding is introduced.

New assertions exercise ADS versus renderer recoil, pooled rarities,100groups per mode/eight sequences/stability,600pellets→100groups, clicks/held fire/single-round reload, fixed35ms grouping, duplicate IDs, invalid transitions, shared bullet families, exact nested muzzle transforms, badge and read-only checklist, >15-minute lean recording, pagehide/Play/reinjection persistence, recomputed saved completion, native win/loss/browse/teardown. All earlier native challenge/HUD/performance-restore assertions remain.

[Machine-readable validation](v54-validation.json), [annotation map](v54-source-map.json), [work-budget benchmark](v54-performance-benchmark.json), [source mechanics](../analysis/engine/v54-spread-mechanics.json). Synthetic work bounds and fixtures do not prove live pixels or latency. No V53 log exists; latest actual input is V52. Public publication uses the V53 remote tree as its base and verifies preservation without removals.
