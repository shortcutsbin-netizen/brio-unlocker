# V52 source audit map

Strict parse of `src/brio.js`: 874 executable blocks, 651 functions, 1424 comments, **0 missing adjacent annotations**. Unchanged vendored Acorn line is independently hash-compared with frozen V49; it parses native source data and is never edited. Current helper/block comments identify ownership, bounds, native delegate/restore and uncertain evidence. Minified payload must have zero parsed comments.

| Helper | Starting line in current source |
|---|---|
| renderIndicatorControls | 120 |
| v52OutlineMask | 163 |
| v52Outline | 186 |
| v52ShotCompare | 318 |
| v52StatsObserve | 328 |
| v52PostGame | 372 |
| v52Reset | 394 |
| renderChallengeTier | 897 |
| modifierRows | 909 |
| testSetup | 916 |
| sceneObserve | 1230 |
| gateAnchor | 4063 |
| restoreNativeGate | 4064 |
| reclaimNativeGates | 4065 |
| gateNativeDraw | 4078 |
| v52Audit | 4102 |
| nativeVisualCandidate | 4123 |
| nativeInventoryChallenge | 4234 |
| resetFeatures | 4390 |
| featureWorld | 4535 |
| featureTick | 4579 |

The [JSON map](v52-source-map.json) records every helper/block. Regenerate with `node tools/analysis/audit-comments.cjs src/brio.js docs/audits/v52-source-map.json`. Authoring aid `v52-annotate.cjs` fills only missing adjacent annotations; purpose-specific comments in changed helpers explain mechanics and limits. Frozen older source/docs remain unchanged. See [findings](../findings/v52-findings.md) for native source/observational reasoning and [procedure](../test-procedures/v52-test-procedure.md) for full test mapping.
