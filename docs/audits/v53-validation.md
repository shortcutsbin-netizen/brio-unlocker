# V53 validation — 2026-10-09

`npm ci`, `npm run build`, `npm test`, focused V52 analysis and recorded synthetic performance check passed. The 35 carried configurations run against both source and actual Console payload: **64 regression + 6 challenge executions = 70**. One additional performance regression checks bounded work. The legacy particle tests include 25,800 removed native wrappers across the six challenge executions. No prior test was dropped; stronger checks were added within those configurations.

| Artifact | Bytes | SHA256 |
|---|---:|---|
| `src/brio.js` / `versions/v53/brio.js` | 657906 | `09668272c0ac4a94f8223fb23c5ba4ce55024dbc1ac2d03c918691cf4ec33380` |
| `dist/brio-v53.min.js` / `versions/v53/brio-v53.min.js` | 303511 | `edbe4e89fbbf4645dc99727d7d086a50ea91bf3923edcf40b01f4b1041c3c53e` |

Strict annotation audit reports 942 non-vendored blocks, 672 functions, 1497 comments and zero missing annotations. The vendored Acorn parser is unchanged from the frozen baseline. The payload parses with zero comments and all immutable archive comparisons pass. Conservative build settings preserve semantics.

New assertions cover complete depth-three materials/inventory and pickaxe/selection siblings; incoming-damage composite/late children and independent restoration; initially empty feed construction under existing container limits; modular signed rotations, four native aim axes, fresh/stable exact-rarity calibration and switch rejection; no speculative cone; cached outline readback outside draw; preference reads under repeated same-frame native draws; and all three performance phases with challenge retention, unchanged saved preferences and automatic restoration.

[Performance benchmark](v53-performance-benchmark.json): synthetic 4096-node cap, 64 overflow admissions, baseline 262144 linear membership checks versus zero in V53; explicit retirement pass visits 256. Recorded elapsed times are machine-dependent and are not an FPS/ping result or causal explanation of the actual V52 delays. Work assertions, not elapsed-time thresholds, gate the test.

[Machine-readable validation](v53-validation.json) records source/payload/input/preserved-V52 identities and publication parent. [Source map](v53-source-map.md) documents helper locations. Original V52 log and engine remain exact. All historical files remain; publication uses the latest remote tree and a non-forced expected-head update. Fixture passing does not imply live pixel correctness, exact random spread bounds or latency improvement; use the [minimal live procedure](../test-procedures/v53-test-procedure.md).
