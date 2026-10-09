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
