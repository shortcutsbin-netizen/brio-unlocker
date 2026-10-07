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
