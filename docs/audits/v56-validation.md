# V56 validation — 2026-10-12

Clean install, reproducible build and npm test passed:64 regression +6 challenge executions against source/actual payload, recorder-preservation guard and bounded-work check. [Complete output](v56-test-output.txt), [machine-readable validation](v56-validation.json).

| Artifact | Bytes | SHA256 |
|---|---:|---|
| `src/brio.js` | 700477 | `3967af7b7851fb33d9cc1f65543dde353b875da13c137196c5c3478e9bb65f0f` |
| `dist/brio-v56.min.js` | 323522 | `49b0b9da9dfdd08437fd946617c42be867da6d3d8c943ebf054421e2dfc158e4` |

21 confirmed V55 recorder helper bodies, storage key/revision, grouping, exclusions and scope constants are byte-identical. Only sidebar auto-hide is removed from the existing Play/reset helper. V55 progress is retained. Native material adjacency/centering is asserted from actual rendered clone geometry; weapon-slot size and other rows remain checked. Sidebar tests cover both-mode COMPLETE/partial/reopen, pointer/keyboard bounds, resize without data changes, saved width/reinjection, open-through-Play and active-drag/global-listener cleanup.

Source audit:1012 blocks,714 functions,1586 comments, zero missing annotations; vendor unchanged. Actual payload parses with zero comments; V56 frozen copies exact. All older files/document suffixes remain unchanged; no deleted paths. New presentation fixtures do not prove native pixels; source/mode recording has explicit user confirmation but full angular/catalog collection remains pending.

Reproduce with npm ci, npm run build, npm test, node tools/analysis/audit-comments.cjs src/brio.js docs/audits/v56-source-map.json, git diff --check. [Source map](v56-source-map.md). No new native source execution/protocol/input/decoder path.
