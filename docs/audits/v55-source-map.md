# V55 source annotation map

995 executable blocks,706 functions,1568 comments, zero missing annotations; unchanged vendored parser. [Complete JSON map](v55-source-map.json).

| Helper | Source line |
|---|---:|
| `v55ReconTarget` | 243 |
| `v55ReconClip` | 247 |
| `v55ReconCredit` | 277 |
| `v55ReconMode` | 320 |
| `v55ReconContext` | 327 |
| `v55ReconNativeShot` | 346 |
| `v55ShotCompare` | 647 |
| `v55StatsObserve` | 675 |

Firing credits and angular samples are separate. Native deltas are copied before client mutation; partial selection/ammo does not revert to stale art. Bounded32 short-lived discharge records,512 IDs,256 primitive bullet facts per decoder batch,64guns×2modes,100 angle-tail/48bins. Existing same-decoder match lifetime, scoped discovery, gate retirement/performance sampling and restoration contracts remain. Input capture is passive; records persist by revision, transient references reset at Play/destroy. See V55 findings for clip-size lower-bound limits and exact exclusions.
