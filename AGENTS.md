# Current continuation — V42, 2026-10-05

V41 has now been run and analyzed; authenticated repository read/write succeeds. Current source is `src/brio.js`, payload `dist/brio-v42.min.js`, archive `versions/brio-v42.min.js`. Read the current V42 addenda in both knowledge documents, `docs/v42-findings.md`, latest full logs plus labeled observations, and `docs/v42-test-procedure.md`. V42 has source/minified integrated mock regression checks, but no live visual confirmation. Preserve built features and require relevant regression coverage whenever their dependencies change. The current test has ten blue flags (including Transparent roofs) and three action types: MATCH START, native emote wheel use, post-expiry full-map inspection.

This current paragraph supersedes older pending-V41/access and documentation-only stopping instructions below; all remaining scope, UI, performance, evidence and delivery requirements still apply. Preserve old versions/logs and exact historical appendices. No prototype-only assumption for native container methods; observe actual reached instances with bounded coverage and report disconnected roots as unresolved. Do not promote mocks into visual proof.

---

# AGENTS.md — BRIO Unlocker project instructions

Snapshot date: 2026-10-05. Repository: https://github.com/shortcutsbin-netizen/brio-unlocker .

These current sections supersede the historical originals retained below. The corrected, direct-JavaScript V41 has **not been run in a live match at this cutoff**. The user plans to run it, upload its log, and then open a new thread. A subsequently uploaded V41 log and the user's observations must be analyzed before assuming success or changing the script.

Precedence: current explicit user instructions → current root AGENTS.md → current sections of these two knowledge documents → historical archives. Source code establishes implementation, not proof. A log establishes recorded events, not visual correctness. Explicit user visual confirmation is required to promote visual behavior to proven.

## Purpose and first actions

Continue BRIO as a local-only visual customization and practice/modifier layer for Build Royale. This unrestricted-length instruction file replaces the stale character-limited project instructions. Read it in full, then the current sections of `docs/project_knowledge.md` and `docs/site_knowledge.md`, latest source and newest log/visual observations. Their historical literal archives preserve evidence; old 'next steps', fixed test names and protocol directions are superseded. Discover uploaded filenames if they differ rather than assuming files are missing.

At the next-thread start, verify actual read and authenticated write access to https://github.com/shortcutsbin-netizen/brio-unlocker . GitHub was installed/enabled in the previous thread but no write tools surfaced and public HTTPS push lacked authentication. Nothing was pushed. The user selected a new thread rather than browser fallback. Do not use a browser/sign-in workaround or ask for credential paste unless newly requested. Read access is not write access. Use the available authenticated GitHub integration if it works; verify the commit/file after writing. Keep explicit failures transparent.

Corrected plain V41 is pending live test at this snapshot. The user plans to run it and upload its log before opening the new thread. First analyze that log and their visual feedback. If script files are absent, recover the exact current V41 source and minified payload from project_knowledge appendices, validating supplied SHA-256 values. The earlier compressed V41 is obsolete. Do not recreate the code from prose or start a new version before reading available test results.

## Required scope and behavior

1. Preserve native multiplayer authority. No outgoing WebSocket/MessagePack/start-packet changes, ownership spoofing or attempt to make remote clients see local cosmetics. Native state should remain native except local rendering adapters approved by the project goal.
2. Complete evidence-supported features while continuing recon for unresolved ones. The old 'five surfaces only before indicators' priority is superseded: player/chest/airdrop indicators are reopened, and all roadmap opportunities should receive useful passive attention.
3. Maximize **useful** information per game without performance regressions: bounded/cached source inspection, native fields/resources, container changes, HUD, builds/deployables/spellfields, target projection/suppression, player metadata. Prefer novelty/deltas over repeated baselines. No repeated CONTENT BASE/AFTER or BOT WATCH chores.
4. At most three different extra manual action types per match; repeats are allowed. Current V41 requires MATCH START once and opening full map after meteor expiry. End-of-match COPY RESULTS is export. A new action must resolve a stated uncertainty and have clear timing; absent conditions are unexercised, not failed. Normal gameplay should remain practical.
5. Never scrap a feature merely because hard/inconvenient or one probe returned nothing. Exhaust a required data route before documenting impossibility/retirement. Retire failed routes rather than repeatedly reproducing them. Unopened chest/airdrop/fishing contents and bot classification remain unresolved. Never infer contents/NONE from removal, culling or nearby loot. Never classify humans/bots by name, reused ID or unproven distance threshold. Static bot route remains active until metadata/constructor/source/encoded-string avenues are examined thoroughly; future behavioral rules require user input.
6. Explicit user visual confirmation plus matching logs establish visual proof. Hook counts, attachment, logged draw attempts, empty errors and mock tests are insufficient. GREEN proven, YELLOW active test, RED incomplete. The V40 meteor retention mechanism is proven; V41 automatic capture is new/yellow. Latest arrows, contained numeric labels and warnings still need live proof. Keep status specific to the changed behavior.

## UI contract

Retain native home nodes `#loggedInLocker`→`(un)Locker`, `#loggedInShop`→Extras, and established ad-hiding CSS. Do not substitute a standalone selection UI. Put small blue test flags on the actual Extras rows and make them agree with the written procedure. Capture selected settings at Play. Terminal black, minimizable, draggable by title bar when minimized; MATCH START, VERIFY, COPY RESULTS are the current buttons. No manual meteor arm. Do not revive retired content/bot buttons.

Cosmetic modes: Body/Head/Pickaxe Native,Random,bundled,Invisible,Custom; Wrap Native,Random,bundled; Trail/Glider Native,Random,bundled,Invisible; Emotes four independent Native,Random,bundled slots. Native is the default text option without a duplicate default skin card. Search all supported modes/entries. Preserve category-scoped custom IDs/cache and unsupported historic records; no destructive clearing. `SYNC` means native allowed-set membership, not purchased ownership. Selections persist separately from native locker. Dynamic current Play name `uL#` tagging and structure/name renderer capture; never hardcode historical test identities.

Three independent indicators: player deep red#a81020,airdrop orange#f28b16,chest yellow#ffd21c. Distance label `(distance/100)m`, at most one decimal, no type words, fully inside arrow shaft. Native affine projection and freshness≤700ms; hide individual on-screen/stale/no-target indicators. Active arrays only; no culled-player fallback. Do not arbitrarily counterrotate labels out of shafts. Numeric health and shield values must stay inside their respective native bars, fit/clip and suppress zero-width geometry. Player-ID display modifier is removed; diagnostic IDs remain internal. Meteor retention should work simply when checked, without arming.

## Performance and lifecycle

Prefer one-time renderer capture, resource/cache substitution and native drawable attachment. Brief global push/unshift discovery is bounded max12s and self-restoring; follow with scoped own-array observation. Avoid persistent broad Canvas interception, requestAnimationFrame wrapping, whole-game MutationObservers, broad image-src interception and high-frequency whole-world polling. Existing emote exact four-icon src setter is a narrow bounded exception with restoration; do not expand it casually. Meteor native prototype add observation must remain scoped, preserve original behavior and restore descriptor. Fallback scans bounded max3000nodes/1000ms. Recon caps are architectural requirements, not obstacles to bypass for 'maximum' coverage.

Handle unloaded/failed assets, missing optional fields, native getters/descriptors, circular references, stale transforms/arrays, culling, death/lobby/next match and reinjection. Cache transparent same-size resources and preserve native image bookkeeping/geometry. Cleanup removes attached tracking/inventory/feature nodes, overlays/timers and restores original methods/descriptors, opacity/resources/native buttons. Preserve user's saved selections/custom assets. Avoid introducing unbounded leaks through diagnostic history or temporary hooks.

## Delivery, repository structure and authorization

The user requested using this repository for scripts and logs, authorized pushing V41 if access is available, and now intends normal repository-based continuation. Do authorized scoped, reversible development work without repeated confirmation. Preserve unrelated files and earlier versions; no force push or destructive overwrite. If an independent tool/approval restriction blocks a write, report it accurately and provide a complete accessible artifact.

Preferred paths:

- root `AGENTS.md`: these current project instructions.
- `docs/project_knowledge.md`: project decisions/evidence/continuation; appendices preserve exact V41 and all supplied raw logs.
- `docs/site_knowledge.md`: runtime architecture/native fields/source evidence.
- `src/brio.js`: current human-editable script.
- `dist/brio-vNN.min.js`: complete runnable standalone payload.
- `versions/brio-vNN.min.js`: version archive; preserve prior files.
- `docs/vNN-findings.md`, `docs/vNN-test-procedure.md`: concise changes/evidence/test plan.
- `logs/vNN-YYYY-MM-DD-match-01.txt`: full results + clearly labeled user observations; increment match number.

Deliver a complete **direct plain minified JavaScript** Console script. No atob,gzip,DecompressionStream,eval loader or external bootstrap. Validate actual deliverable, not merely readable source. Do not deliver test-only builds/exports. Verify pushed content and provide clickable GitHub file/commit links and Copy raw file/Raw instructions. If GitHub delivery is blocked or user wants inline delivery, include the entire plain minified code in one copyable JavaScript block or an actually accessible download. Do not end a script-development turn with inaccessible files/placeholder or only a promise unless a hard blocker prevents completion. This documentation-only handoff turn does not request new code; preserve final V41 unchanged.

## Testing and recon iteration

Read newest complete log and observations before editing. Explain findings in terms of actual evidence; distinguish source possibilities, observed native data, mock results and user-visible success. Every iteration should make meaningful progress toward the finished product. Select the smallest useful new set of manual tasks, while collecting bounded passive evidence for all feasible roadmap categories. Do not repeatedly test unchanged successful surfaces unless a dependency change warrants regression coverage.

For corrected V41, all nine blue-flag Modifiers must be on: Player health bars; Nearest player indicator; Nearest chest indicator; Nearest airdrop indicator; Permanent meteor location; Health/shield numbers; Low-health visual warning; Low-material warning; Identify bots. No challenge required. Avoid hide-player/bar settings that prevent observing labels; report actual settings instead of silently resetting them. Press MATCH START at match transition; full-map check after a spawned meteor's normal expiry; COPY RESULTS after match. No manual arm. If these actions already occurred and the log is uploaded, analyze it instead of asking the user to rerun reflexively.

Before delivering source/minified changes: parse/syntax check both; verify relevant integrated boot/UI/capture/settings/mock lifecycle and changed features where practical; inspect cleanup and minifier preservation of native property keys. Match test effort to changed risks and user needs, without tests that only mirror trivial code. Real browser verification still comes from the user's live run. Never guarantee no possible runtime errors; state exactly what passed and what remains untested.

Update current knowledge/status and version test plan after analyzing a run. Document retired routes and their evidence so future threads do not repeat them. Do not overwrite history with unsupported success. Preserve complete raw logs and source rather than dumping huge copies into each response. Continue autonomously within authorized scope; ask focused clarification only for material missing facts that cannot be recovered from repository/logs/context.

## Known baseline evidence to keep straight

- Meteor canvas repaint was visually unsuccessful despite1020 draws/no errors. Do not revive it as retention.
- V40 native hold visually passed; one native removal blocked,60opacitywrites, retained marker. V41 automatic acquisition through native add/scans awaits live test.
- V40 bot phases were all 'lobby' although gameplay happened; no phase comparison is valid. VIRA and Yourmomfat were user-confirmed humans in V39 only. No heuristic bot labels exist.
- Container identity/resources are known; unopened contents attribution is not. NONE requires positive evidence of no selected item, not missing observations.
- Bar numbers/arrow containment/colors and new warnings need actual visual confirmation. Source/mock checks are recorded, not a substitute.
- Inventory tracking/scales were accepted; full native background art equivalence and fourth-material meaning remain partly inferred.
- Old preview-filter requirements are not fully implemented: V41 removes failed images onerror only.
- V38 separate UI was rejected. V39 restored established V37-style UI; latest plain V41 preserves it.
- No prior GitHub push succeeded. Exact V41 bytes are in project_knowledge; prior workspace's local commit alone is not available remotely.
