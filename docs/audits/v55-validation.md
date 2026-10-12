# V55 validation — 2026-10-12

Clean dependency install, reproducible direct build and `npm test` passed.64 regression executions (32 source +32 actual payload),6 challenge executions (3 source +3 payload), plus the bounded-work regression. [Exact test output](v55-test-output.txt), [machine-readable checks](v55-validation.json).

| Artifact | Bytes | SHA256 |
|---|---:|---|
| `src/brio.js` | 692857 | `6796a1c76fe0dbce45b2622827248f78ce81cc449823948b5e3426c41e6d7ddc` |
| `dist/brio-v55.min.js` | 320070 | `8ddfb964310628d8e24842500a245937a667463a5a5371ecd883938a2890937f` |

Immutable `versions/v55/` copies match exactly. Earlier archives/logs/supplied source stay unchanged. All earlier README/instruction/knowledge/release-history document bytes remain exact suffixes. No deleted files, `git diff --check` clean. Source annotation audit:995 blocks,706 functions,1568 comments, zero missing; vendored parser unchanged. Actual payload parses with zero comments; no loader/test export/native-source evaluation/independent live decode.

New assertions run in each full native challenge fixture: marker-only firing with no valid angles; hip recoil and delayed ADS acknowledgement; primitive/partial inventory state before native application; projectile-first batch; marker/ammo deduplication in both orders; coalesced consumption and multiple marker conservation; pellets/duplicate IDs; remote/unknown ownership/removal/build/utility exclusions; all requested catalog exclusions with Heavy Sniper retained;1/3→10,6→18,30→90 targets; raised clip reopening; missing ammo sentinel and replaced slot invalidation; blur/persistence/pagehide/Play/reinjection. All earlier native challenge/HUD/warning/cosmetic/lifecycle/performance restoration assertions carry forward.

Reproduce: `npm ci`, `npm run build`, `npm test`, `node tools/analysis/analyze-v55.cjs`, `node tools/analysis/audit-comments.cjs src/brio.js docs/audits/v55-source-map.json`, `git diff --check`. Frozen archives refuse different-byte overwrite. [Source mechanics](../analysis/engine/v55-shot-mechanics.json) never executes native code or publishes a raw log derivative.

Limits: fixtures are not native visual/latency proof. The supplied client exposes loaded rounds but no maximum-magazine table; observed clip can be a lower bound until a fuller reload. Recording completion is distinct from angular calibration. No V54 log/rerun is requested or newly analyzed; direct user feedback guides this revision.
