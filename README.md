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
