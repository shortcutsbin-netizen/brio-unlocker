# V62 validation — 2026-10-18

`npm ci`, `npm run build` and the complete `npm test` passed. The suite completed64regression configurations plus6challenge configurations across readable source and minified payload (70total),1,280actual BRIO geometry cases and focused recorder/budget/provenance/native-source/work-bound checks. No assertion failures. Readable integration also passed before archiving.

Geometry tests vary native root/cursor axes independently, camera rotation/scales, held/hand animation and native scalar sizes, five lengths, CSS/backing ratios, invisible flash, blur and stale ancestry. They verify disabled/Hell suppression and exception-safe canvas restoration. Static source checks parse the unchanged engine, run only BRIO's existing scalar interpreter and prove native +X aim arithmetic. Native source is never executed.

Provenance tests cover reserved player/container lanes, immutable decoded packets, getters not invoked, symbols/non-enumerable data, sensitive-field redaction, changed/identical tuple tails, same-ID lifecycle reset,200entity/lane work bounds, native callback receiver/arguments/return/error preservation and exact descriptor restoration. Existing full integration checks cover decoder/callback cleanup, Play/reinjection, settings and all carried modifier/challenge surfaces.

Source authoring audit:1,024blocks,721functions,1,609comments,0missing annotations; vendored parser unchanged. Payload parses and contains zero comments. Current source/payload archives match exact bytes. Build refuses different-byte archive replacement. Synthetic high-occupancy benchmark retains4,096active branches,0repeated full membership sweeps and at most256retirement visits/pass; timings are not live latency proof.

| Artifact | Bytes | SHA256 |
|---|---:|---|
| src/brio.js | 712707 | `9dc8b4cce403a6a3758bbbc3fdfccd7523b654dc030c12f3166499d7baede2f6` |
| dist/brio-v62.min.js | 332037 | `bfaf4a4fb469606c3c32d60e4bbb91835bae2ebaf5400b4098d5c78f80865c94` |

Evidence limits: native source is parsed as data; only BRIO helpers/fixtures execute locally. Geometry fixtures and synthetic work benchmarks do not prove native pixels/live FPS/ping. No assistant match occurred. Live bot/contents route feasibility remains unresolved.
