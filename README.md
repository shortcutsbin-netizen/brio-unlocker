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
