# Repository guide

Current links are in root README.md and AGENTS.md. Historical content remains unchanged; old textual paths resolve through [relocations.json](relocations.json).

| Location | Contents |
|---|---|
| knowledge/ | Full project/game knowledge with current update followed by byte-preserved history |
| game-sources/ | Exact supplied engine, MessagePack codec and deployment flag |
| findings/ | Findings per release |
| status/ | Feature proof/changed/unresolved/planned status per release |
| test-procedures/ | Focused live procedures per release |
| analysis/engine/ | Reproducible static source evidence |
| analysis/runs/ | Reproducible full-log summaries |
| licenses/ | Vendored parser notice |
| ../logs/runs/ | Exact full run exports |
| ../logs/observations/ | Separately labeled explicit user observations |
| ../versions/vNN/ | Immutable release payloads |
| ../dist/ | Current direct payload; archived/ preserves prior dist copies |
| ../tools/analysis/ | Read-only analysis scripts |
| ../src/, ../tests/ | Current readable implementation and integrated regressions |

Run node tools/analysis/analyze-log.cjs and node tools/analysis/analyze-engine.cjs to reproduce current analysis. No historical file or duplicate is discarded. Each relocation entry records original path, destination and original Git blob SHA; modified current authoring files/knowledge updates are identified in the current handoff.
