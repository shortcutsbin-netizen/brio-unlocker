# V65 — stable cone rebuild; flashlight finalized; unsupported recon retired

Current [complete Console payload](dist/brio-v65.min.js) · [Full one-match procedure](docs/test-procedures/v65-test-procedure.md) · [Findings](docs/findings/v65-findings.md) · [Feature matrix](docs/status/v65-feature-matrix.md) · [Validation](docs/audits/v65-validation.md).

V64 evidence identifies wrong cone direction and changing bin widths. V65 draws a rigid player-root aim sector using source-derived static gun references and frozen per-mode widths; origin still needs visual review. Flashlight and outlines are user-approved, with no routine retest. Bot identification/exact unopened contents are retired from the current client-only product/test pipeline; no reliable authoritative signal was found, and further ordinary matches are not requested for them.

One natural cone-focused match, hardmaximum2per suite. Load V65 → normal profile → Set up V65 test → native walking/fire/hip-ADS review → COPY RESULTS to logs/runs/v65-log.txt. If still wrong, get a clear visual before another correction. Entire current procedure prints in chat. Historical checkpoints follow.

---

# V64 — crosshair color, readable flashlight HUD and smooth end fade

Current [complete Console payload](dist/brio-v64.min.js) · [Full one-match test procedure](docs/test-procedures/v64-test-procedure.md) · [Findings](docs/findings/v64-findings.md) · [Feature matrix](docs/status/v64-feature-matrix.md) · [Validation](docs/audits/v64-validation.md).

Fixes live preset color updates, puts flashlight darkness behind native own HUD/status messages, adds a300ms match-end fade, and repairs the385 repeated V63 maintenance exceptions. User confirms prior shapes/sizes and Player-follow/end removal; new fixes await live review. Bot/exact unopened contents remain unresolved without guessed labels.

One natural match requested, HARD MAXIMUM TWO per suite. Load V64 → normal profile → Set up V64 test → same-match visual checks → COPY RESULTS to logs/runs/v64-log.txt. Entire procedure prints in chat. Genuine V63 upload reviewed; user-renamed V62 upload preserved. Earlier checkpoints below are historical.

Final evidence integrity check: uploaded renamed v62-log.txt contained only CRLF (2bytes). Restored the exact4,860,392-byte original export from commit3ca20c6:logs/runs/v63-log.txt into the intended v62-log.txt; SHA2561cf50537170783db9e524b1ad37700edb52c2a69678a86c0d0adf051fe85ce5f. Original blank-file upload remains in Git history; genuine current V63 upload unchanged. Old V63 analyzer now writes its recovered-V62 derivative to v64-v62-recovered-analysis.json, preserving the historical report.

---

# V63 — fixed aimed cone, custom crosshair and flashlight

Current [complete Console payload](dist/brio-v63.min.js) · [Full test procedure](docs/test-procedures/v63-test-procedure.md) · [Findings](docs/findings/v63-findings.md) · [Feature matrix](docs/status/v63-feature-matrix.md) · [Validation](docs/audits/v63-validation.md).

Cone position now uses the native aimed hand reference even while walking, with a softer curved/filled sector. Newly built **NEW · CHECK** features: custom crosshair presets/color/size/local PNG-WebP upload, and configurable player/cursor flashlight.70source/payload integration executions and1920geometry cases pass; live review is next. Bot/exact contents remain low-feasibility/unresolved, not proven impossible; no guessed labels.

The uploaded v63-log.txt actually contains BRIO62 and is preserved. Next: paste V63 once, Set up normal test then Set up V63 test, one natural match with new-feature checks, export **logs/runs/v63-log-2.txt**. No asset/all-gun/container quota. Full procedure is printed in chat each work turn. Historical checkpoints follow.

---

# V62 — user-play pipeline resumed

Current [complete Console payload](dist/brio-v62.min.js) · [Short test procedure](docs/test-procedures/v62-test-procedure.md) · [Findings](docs/findings/v62-findings.md) · [Status](docs/status/v62-status.md) · [Validation](docs/audits/v62-validation.md).

Cloud/VM control exploration is abandoned. V62 uses source-proven native +X cone direction, adds numeric visual diagnostics and reserves separate player/container/provenance capture. Bot identification and exact pre-open contents remain unresolved; no guessed labels.70source/payload integration checks and1,280geometry cases passed; live cone verification is next.

Paste raw V62 once on home → Extras **Test bots + contents** → Play one natural match → **COPY RESULTS** to `logs/runs/v62-log.txt`. Any gun hip/ADS and natural openings only; report visual exceptions. No asset recapture or all-gun/container quota. Earlier paused/cloud-next instructions below are historical.

---

# Pipeline continuation — 2026-10-18

[Browser diagnosis](docs/testing/browser-pipeline-diagnosis-2026-10-18.md) · [Local Chrome trial procedure](docs/testing/local-browser-trial.md). Cloud home access still fails with no established cause. A supported desktop Chrome connection is the next candidate; actual game/input/script capability must be tested. Existing user-play/evidence/repository loop remains available. V61 unchanged; no assistant-played matches or verified V62 fix. Historical checkpoints follow.

---

# Cloud access checkpoint — 2026-10-18

[Play/operator knowledge](docs/knowledge/play_knowledge.md) · [Observed access result](logs/observations/cloud-access-2026-10-18.md). User greenlight received; the real cloud home page returned Site Unavailable before sign-in, unchanged after one reload. No match played; cause undetermined. Authorization persists for resuming when the supported browser can reach the game. V61 unchanged; V62 paused. Earlier waiting language below is historical.

---

# Current follow-up — asset review complete, 2026-10-17

[Asset findings](docs/findings/asset-retrieval-2026-10-17.md) · [Next cloud access trial](docs/testing/cloud-access-trial.md). All 3,368uploaded capture files are accessible despite GitHub's1,000 entry display limit. V61 remains current; V62 paused for sufficient visual evidence. No cloud trial performed yet; the next separate user greenlight starts it. No further asset pass is required. Original documentation follows.

---

# Supplemental asset collector — independent of numbered releases

The user authorized `dist/brio_asset_retrieval.js` as an independent minified collector, not V62/V63 or a numbered-pipeline change. Read docs/supplemental/asset-retrieval.md and its validation/build records. Source is src/supplemental/brio_asset_retrieval.js; independent commands build:assets/test:assets. Two natural matches, flat ZIP named brio_asset_retrival-results.zip, then reviewed extracted files to docs/game-sources root. Recorder/backfill/persistence budgets and browser-only gaps are explicit; no claim of universal network capture or server-code access. Main V61 source/payload/archives remain unchanged. Supplemental file acquisition is authorized before resuming the paused cone/bot/contents work below. Preserve source uploads, filenames, all historical evidence and complete document suffixes; no repeated approval/subagents/force push.

---

# V61 follow-up — awaiting source/visual artifacts, no V62 yet

Read docs/findings/v61-followup-review.md, docs/analysis/runs/v61-followup-analysis.json and logs/observations/v61-2026-10-14-observations.md first. User rejects V61 cone alignment. Complete V61 log analyzed; no repeated contents run required. Request raw loaded index, sanitized home-load HAR and hip/ADS visual evidence; optional original held-art sprites. Do not develop/publish V62 until the material geometry/source evidence gap is resolved. If another gameplay evidence run is needed, retain V61 and use v61-log-2.txt as user directed. User authorizes a final bounded passive bot provenance/controller investigation next pass; no guessed labels, identity heuristics, input manipulation or inaccessible-server-source claim. Source/payload remainV61. All prior history below is preserved.

---

# V61 — canvas-projected spread; completed recon UI retired

Current [Console script](dist/brio-v61.min.js), readable [source](src/brio.js), exact versions/v61/. Copy raw file and paste once on the home page. See docs/findings/v61-findings.md, docs/status/v61-status.md, docs/test-procedures/v61-test-procedure.md and docs/audits/v61-validation.md.

User rejects V60 cone alignment. V61 uses actual held-art canvas transforms for the barrel and passive player-to-cursor projection for direction. Native pixels remain pending live review. Completed spread diagnostic menus/sidebar/badge removed; color/size/reset and empirical data retained. V60 full log analyzed; focused replica change detection skips documented animation without dropping exported fields. Contents screening remains unresolved, with no guessed labels or unsupported retirement.

Next: Extras → Test contents → Play; any natural gun, observe hip/ADS muzzle and firing direction. Normal openings only; no every-kind hunt or recording quotas. Export logs/runs/v61-log.txt. Full findings/handoff in repo preserve recoverability.

---

# V59 — final observed spread candidate; contents focus

Current direct script dist/brio-v59.min.js, readable src/brio.js, exact versions/v59/. Findings/status/procedure/validation: docs/{findings,status,test-procedures,audits}/v59-* (repo-relative).

All44 empirical angle modes complete. Fix native muzzle origin and root-local -Y direction, add color/length controls (blue/Medium default, five lengths/reset) and freeze observed envelopes for fresh-browser use without fake progress. Native visual review still required; no guaranteed server maxima.

Next pass: Test contents beforePlay, verify cone direction/origin with any natural gun and try styles, open naturally available containers normally, export full logs/runs/v59-log.txt. Contents capture gets priority within existing caps; no invented content labels or unsupported impossibility. All old evidence/proof/decisions preserved; no generic all-gun/special hunt.

---

# V58 — focused Bolt / Heavy Sniper ADS finish

Current direct script `dist/brio-v58.min.js`, readable `src/brio.js`, exact frozen `versions/v58/`. Read `docs/findings/v58-findings.md`, `docs/status/v58-status.md`, `docs/test-procedures/v58-test-procedure.md` and `docs/audits/v58-validation.md` (paths relative to repo root).

V57 has42/44angle modes ready; only Bolt ADS8/10 and Heavy Sniper ADS2/10 remain. Zero angles already qualify. V58 retains all progress/gates and adds visible primitive acceptance/rejection feedback and≤24focused traces per match. Click Finish spread recon; hold ADS and keep mouse still≥200ms before firing. Stop at ready or ten attempts/gun; upload full logs/runs/v58-log.txt. No broad all-gun tour. Contents screening is the next required target after final spread; no unsupported impossibility claim now. User reports no other issues; original proof/pending distinctions remain.

---

# V57: more angle recon and safe-zone center

Current runnable payload: `dist/brio-v57.min.js`; readable source: `src/brio.js`; immutable source/payload: `versions/v57/`. [Findings](docs/findings/v57-findings.md), [status](docs/status/v57-status.md), [short procedure](docs/test-procedures/v57-test-procedure.md), [validation](docs/audits/v57-validation.md).

Full V56 has all applicable shot targets but insufficient angles (13/44 ready). V57 fixes recoil-confused angle rejection without resetting counts, retires the Charge Rifle/Grenade Pistol ADS requirements, makes shot/angle readiness explicit and adds a purple projected safe-zone center arrow. Continue normal firing for pending angles, observe the center in natural storm movement, export full `logs/runs/v57-log.txt` when ready or something is stuck/wrong. All older explicit proofs/pending/denied decisions preserved. User authorizes scoped publication without repeated confirmation.

---

# BRIO Unlocker — V56

[Complete Console payload](dist/brio-v56.min.js): Copy raw file and paste once on home. Existing V55 spread progress is retained. The recorder is unchanged; V56 is the full gun/ADS collection run.

**SPREAD RECON** is now a right sidebar: drag its left edge to resize and keep it open across games. Green **✓ COMPLETE** marks weapons with both modes recorded. Remote native material widgets are adjacent and centered again.

[Full collection procedure](docs/test-procedures/v56-test-procedure.md) · [Findings](docs/findings/v56-findings.md) · [Status](docs/status/v56-status.md) · [Validation](docs/audits/v56-validation.md). Play until all obtainable guns are checked, then upload one full COPY RESULTS export as `logs/runs/v56-log.txt`.

---

# BRIO Unlocker — V55

[Complete Console payload](dist/brio-v55.min.js): **Copy raw file**, paste once on Build Royale home, then ordinary Play. V55 counts native firing separately from angle-quality filtering and distinguishes held-right-click ADS from hip-fire recoil. **SPREAD RECON** shows clip-based targets: **max(10, clip size×3)** per mode, with no eight-sequence/stability requirement.

Clip size learns from native loaded rounds; partly used pickups are lower bounds and fuller reloads can raise the target. Requested utility/vaulted entries are excluded; Heavy Sniper remains. Progress uses a new revision; preferences/custom data and old storage survive.

[Short procedure/full carried coverage](docs/test-procedures/v55-test-procedure.md) · [Findings](docs/findings/v55-findings.md) · [Status](docs/status/v55-status.md) · [Commented source](src/brio.js) · [Validation](docs/audits/v55-validation.md).

No V54 log/rerun is requested. Native live confirmation remains pending; source/payload integration and bounded-work checks are separate evidence. All historical text follows unchanged.

---

# BRIO Unlocker — V54

Current [complete Console payload](dist/brio-v54.min.js): use **Copy raw file**, paste on Build Royale home, then play normally. Spread recording is automatic. **SPREAD RECON** opens the gun-image/name checklist with ADS/No ADS columns; progress persists across matches and reloads. Rarities share one gun entry.

A mode checks after100accepted shot groups, eight firing sequences and stable observations. The above-player test badge shows recorded/rejected shots and completion. **Show bullet spread** now draws a small unfilled V from the native held-gun muzzle using observed data. Performance metrics collect passively; there is no required PERF action.

[Minimal procedure/full carried coverage](docs/test-procedures/v54-test-procedure.md) · [Findings](docs/findings/v54-findings.md) · [Status](docs/status/v54-status.md) · [Commented source](src/brio.js) · [Source map](docs/audits/v54-source-map.md) · [Validation](docs/audits/v54-validation.md).

70source/payload integration executions plus a bounded-work regression pass; every non-vendored executable block/function annotated, zero payload comments. Completion is an empirical estimate, not a server maximum. No V53 log was uploaded; native visuals/performance remain pending. No files removed; full historical text follows unchanged.

---

# BRIO Unlocker — V53

Current release: [complete Console payload](dist/brio-v53.min.js). Copy raw file and paste on Build Royale home. In **Extras**, **Set up normal test** applies a reversible test profile; the terminal header stays available during play.

V53 repairs complete inventory/pickaxe/selection hiding and adds **Hide damage direction** to Hell. It reduces repeated draw/discovery/logging work and adds **PERF CHECK (24s)**. Spread now uses a labeled observed gun/rarity envelope after stable native shot samples; no guessed scalar-to-angle conversion or exact server spread bound is claimed.

[Minimal two-match procedure and all carried coverage](docs/test-procedures/v53-test-procedure.md) · [Findings](docs/findings/v53-findings.md) · [Status](docs/status/v53-status.md) · [Commented source](src/brio.js) · [Source map](docs/audits/v53-source-map.md) · [Validation](docs/audits/v53-validation.md) · [Repository guide](docs/README.md) · [Release history](docs/releases.md).

70 source/payload integration executions plus a work-budget regression pass; every non-vendored executable block/function is annotated and the payload contains zero comments. Native performance and repaired visuals still need the next live export. V52 map hiding is explicitly user-proven. Older files and earlier text below are preserved history.

---

# BRIO Unlocker

Current release **V52**: [complete Console payload](dist/brio-v52.min.js). Copy raw file, paste on Build Royale home, open **Extras → Set up normal test**, then ordinary Play. **EXTRAS** stays available in the minimized terminal during a match. Prior preferences have a reversible persistent backup.

V52 repairs cumulative particle-adapter starvation and reported Hell/HUD leaks, adds **Hide info popups**, fixes the cone's90-degree axis error and projected-storm target retention, experiments with cached artwork silhouette borders, and replaces unclear loot/tier controls with explicit buttons. Modifiers now have subsections; Match breakdown uses light-text cards.

[Minimal two-match procedure and complete carried-forward coverage](docs/test-procedures/v52-test-procedure.md) · [Findings](docs/findings/v52-findings.md) · [Status](docs/status/v52-status.md) · [Commented source](src/brio.js) · [Source map](docs/audits/v52-source-map.md) · [Validation](docs/audits/v52-validation.md) · [Release history](docs/releases.md).

Native visual validation remains pending. Cone half-angle units remain provisional; passive shot comparisons now record both client/server aim offsets. Silhouette fallback preserves box outlines for unreadable assets. Contents/bot recon is unresolved, not disproven. Native physics/network/ownership remain unchanged; no file removals.

Earlier handoffs below are preserved history; current V52 instructions/status take precedence.

---

# BRIO Unlocker

Current release **V51**: [complete plain Console payload](dist/brio-v51.min.js). Use **Copy raw file**, paste on Build Royale home, then ordinary Play. Terminal **EXTRAS** opens the same controls during a match/minimized. Every non-vendored source block/function is annotated; minified payload contains zero comments.

[Source](src/brio.js) · [Full V50/V51 test procedure](docs/test-procedures/v51-test-procedure.md) · [Findings](docs/findings/v51-findings.md) · [Status](docs/status/v51-status.md) · [All42 decisions](docs/proposals/v51-decisions.md) · [Source map](docs/audits/v51-source-map.md) · [Validation](docs/audits/v51-validation.md) · [Repository guide](docs/README.md) · [Release history](docs/releases.md) · [Parser notice](docs/licenses/THIRD_PARTY_NOTICES.md).

V51 adds approved solo modifiers: spread cone, build/object health outlines, safe-zone/selected-loot indicators, owned-ammo highlights, longer projectile histories and indicator colors. Native Match breakdown replaces post-game battle-pass area. New HUD/projectile/held-art challenges join **Hell**; **No map** hides mini/full map. Saved IDs/preferences survive effective preset overrides. Every changed V50 test is carried forward because V50 was not live-tested.

Limits: spread half-angle units remain provisional; gold spawn eligibility not inferred; per-player damage rankings unavailable without authoritative attribution. Shared detached trail ownership is unknown, so projectile hiding silences shared trails. Fixtures prove wiring/cleanup, not live visuals/performance. Existing container-contents/bot recon remains unresolved. Historical code/log/document files preserved.

npm ci, npm run build, npm test:35 integrated configurations against source and actual payload (70 executions), including the complete carried V50 fixtures plus expanded V51 assertions; source/vendor/zero-comment/archive checks. See validation and full live procedure above.

---

## Preserved V50 handoff

# BRIO Unlocker

Current release **V50**: [complete plain Console payload](dist/brio-v50.min.js). Use **Copy raw file**, paste on Build Royale home, then ordinary Play. Terminal **EXTRAS** reopens the same settings during a match, including while minimized. No manual arm. Zero minified comments; every non-vendored source function/block is annotated.

[Source](src/brio.js) · [Focused procedure](docs/test-procedures/v50-test-procedure.md) · [Findings](docs/findings/v50-findings.md) · [Feature status](docs/status/v50-status.md) · [Proposed features](docs/proposals/v50-additional-features.md) · [Source audit map](docs/audits/v50-source-map.md) · [Validation](docs/audits/v50-validation.md) · [Repository guide](docs/README.md) · [Release history](docs/releases.md) · [Parser notice](docs/licenses/THIRD_PARTY_NOTICES.md).

V50 adds inline warning resets, removes remote slot captions/hotkeys, enlarges remote slots/materials, adds five Mask loot tiers and two Invisible builds tiers, reopens held-art/trail invisibility, and wires native HUD challenges plus Good flippin luck. The preset forces effective gameplay challenges ON/modifiers OFF without erasing saved preferences; visual-only monochrome/flashlight remain independent. Detached trail ownership is unavailable, so All players invisible silences all trail particles while preserving native local body/held art.

npm ci, npm run build, npm test:35 integrated scenarios against source and actual payload (70 total), plus annotation/parser-preservation and zero-comment checks. New visuals remain live-pending; warning decisions/selected native border/foliage and retained meteor/mono/cosmetics stay proven. Container contents/bot classification remain unresolved. Native authority/network/ownership is preserved. Historical bytes remain at their mapped paths.
