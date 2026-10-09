# Current repository guide — V54

- `src/brio.js`, `dist/brio-v54.min.js`, exact immutable `versions/v54/` copies.
- [Findings](findings/v54-findings.md), [status](status/v54-status.md), [passive procedure/full carried matrix](test-procedures/v54-test-procedure.md).
- [Validation](audits/v54-validation.md), [source map](audits/v54-source-map.md), [work benchmark](audits/v54-performance-benchmark.json), [source mechanics](analysis/engine/v54-spread-mechanics.json).
- [V53 user observations, no log](../logs/observations/v53-2026-10-09-observations.md); latest actual complete run remains `logs/runs/v52-log.txt`.
- Reproduce with `npm ci`, `npm run build`, `npm test`, `node tools/analysis/analyze-v54.cjs`. All carried tests and original source/log/archive files remain.

No paths removed. Current V54 instructions supersede earlier manual PERF/Hell/fixed-aim requirements. Full previous guide follows unchanged.

---

# Current repository guide — V53

- `src/brio.js`: thoroughly annotated current source; `dist/brio-v53.min.js`: complete zero-comment Console payload; `versions/v53/`: immutable exact copies.
- [V53 findings](findings/v53-findings.md), [status](status/v53-status.md), [minimal test procedure and complete carried matrix](test-procedures/v53-test-procedure.md).
- [Validation](audits/v53-validation.md), [source map](audits/v53-source-map.md), [synthetic work comparison](audits/v53-performance-benchmark.json), [complete V52 analysis](analysis/runs/v53-v52-focused-analysis.json).
- Original `logs/runs/v52-log.txt` and [separate user observations](../logs/observations/v52-2026-10-09-observations.md). `tools/analysis/analyze-v53.cjs` regenerates the analysis without evaluating engine source.
- `tests/performance.cjs` tests work bounds; existing regression/challenge suites retain 70 source/payload integration executions. `npm ci`, `npm run build`, `npm test` reproduce validation.

No paths were removed or renamed. Historical releases/source/logs/decisions and all older guide bytes below are retained. Current V53 status takes precedence.

---

# V52 repository guide

Current: [findings](findings/v52-findings.md), [status](status/v52-status.md), [minimal live procedure/complete carried surface](test-procedures/v52-test-procedure.md), [source map](audits/v52-source-map.md), [validation](audits/v52-validation.md), [full V51 log](../logs/runs/v51-log.txt), [observations](../logs/observations/v51-2026-10-07-observations.md), [general analysis](analysis/runs/v52-v51-analysis.json), [focused chronology/native callback excerpts](analysis/runs/v52-v51-focused-analysis.json).

Reproduce read-only log evidence with `node tools/analysis/analyze-log.cjs` and `node tools/analysis/analyze-v52.cjs`. Parse-only engine/strict source comment tools remain available. V51 proposal decisions still govern approved/denied additions. All historical paths/files retained; current sections supersede old test/HTML requests.

---

# V51 repository guide update

Current links: ../README.md and ../AGENTS.md. V51 decisions resolve all42 proposal IDs; V50 proposal bytes remain historical. Both current/historical direct dist payloads and archived duplicates are preserved. Readable V50/V51 source is frozen beside payloads. Reproduce native V51 evidence with node tools/analysis/analyze-v51.cjs; general engine analyzer now defaults to V51 output. No original file is removed.

---

# Repository guide

Current links are in root README.md and AGENTS.md. Historical content remains unchanged; old textual paths resolve through [relocations.json](relocations.json).

| Location | Contents |
|---|---|
| knowledge/ | Full project/game knowledge with current update followed by byte-preserved history |
| game-sources/ | Exact supplied engine, MessagePack codec, deployment flag and main CSS |
| findings/ | Findings per release |
| status/ | Feature proof/changed/unresolved/planned status per release |
| test-procedures/ | Focused live procedures per release |
| analysis/engine/ | Reproducible static source evidence |
| analysis/runs/ | Reproducible full-log summaries |
| analysis/source/ | Source block/function annotation audit |
| audits/ | Stable source-helper location map and release validation |
| proposals/ | Additional mechanics awaiting user approval |
| licenses/ | Vendored parser notice |
| ../logs/runs/ | Exact full run exports |
| ../logs/observations/ | Separately labeled explicit user observations |
| ../versions/vNN/ | Immutable release payloads |
| ../dist/ | Current direct payload; archived/ preserves prior dist copies |
| ../tools/analysis/ | Read-only analysis scripts |
| ../src/, ../tests/ | Current readable implementation and integrated regressions |

Run node tools/analysis/analyze-log.cjs and node tools/analysis/analyze-engine.cjs to reproduce current analysis. No historical file or duplicate is discarded. Each relocation entry records original path, destination and original Git blob SHA; modified current authoring files/knowledge updates are identified in the current handoff.
