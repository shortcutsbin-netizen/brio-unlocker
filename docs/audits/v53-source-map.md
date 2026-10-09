# V53 source annotation map

Strict `node tools/analysis/audit-comments.cjs` checks every non-vendored executable block/function and compares the unchanged vendored Acorn parser. **942 blocks, 672 functions, 1497 comments, zero missing annotations.** The [full machine-readable map](v53-source-map.json) records every owner/line/documentation result and parser hash; the [readable source](../../src/brio.js) and immutable V53 archive match.

| Helper | Source line | Audit purpose |
|---|---:|---|
| `v53PerfReport` | 141 | Bounded per-Play timing/cadence/work evidence |
| `v53PerfStart` | 159 | Explicit reversible 24-second comparison |
| `v53PrepareOutline` | 173 | One queued mask preparation outside native draw |
| `v53PlayerPreflight` | 179 | Late held/damage branches before native player draw |
| `v53DeferredNative` | 187 | Bounded microtask after native empty-root population |
| `v53InventoryRoot` | 199 | Complete depth-three native inventory root |
| `v53AngleDifference` | 441 | Auditable signed modular angle subtraction |
| `v53AimObserve` | 447 | Fresh/stable authoritative aim/scalar/context |
| `v53ShotCompare` | 454 | Accepted/rejected bounded exact gun/rarity observations |
| `nativeResourcePath` | 1908 | Weak cache of normalized native resource paths |
| `reclaimNativeGates` | 4261 | Persistent iterator and bounded retirement work |

Existing annotated wrappers continue preserving native return values, errors, descriptors, simulation and authority. Historical V50/V51/V52 comments explain unchanged mechanics where relevant; current helpers/version labels are V53. No native engine code is evaluated for reconstruction or tests.
