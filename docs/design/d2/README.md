# D2 — Field Kit / BRIO Unlocked

Second visual round, responding to the user's D1 feedback. Live V68 and all runtime/package/archive bytes remain unchanged. Open review.html locally or use the in-chat review. Outer review tabs/sample labels are not product navigation. Every interaction is local except the actual project GitHub link. No gameplay suite.

## Feedback applied

| Area | D2 result |
|---|---|
| Logo | Gold-to-orange UNLOCKED gradient; original white comparison retained |
| Home | No custom Play/name input; only requested additions represented |
| Socials | Ad-style cosmetics/modifiers/challenges description, repository link, plain Discord handle ads0210; community claim removed |
| Copy | Marketing subtitles and sidebar slogans removed; per-setting descriptions retained |
| Locker catalogue | Five original sets plus representative native thumbnails, deliberately limited samples; production native catalogue remains dynamic |
| Menus | Unlocker and Extras independent; close returns home. Modifiers/Challenges remain tabs within Extras |
| Controls | ON/OFF selection controls, swatch palettes/custom hex validation, segmented size/follow/tier choices; no OS color dialog/dropdown |
| Crosshairs | Ten choices INLINE in Modifiers; separate outer review comparison board is not an app page |
| Hell | Explicit gameplay effect list, existing derived locks; visual-only exceptions retained |
| Debrief | Full redesign confined to #deathPass injection contract; native totals, weapon time, observed HP/shield loss chart, scrollable victims, derived rates |
| Indicator | Accepted structure retained; bearing slider removed. Live direction follows target automatically |
| Originals | Trail Warden, Citrus Circuit, Nightglass now include gliders; new Kiln Current and Margin Runner add head/body/pickaxe/glider |
| Wraps | Existing native wraps retained. NEW custom wraps skipped pending provider/cache/all-weapon-state validation |
| Preview | BRIO-owned animated canvas: head/body/trail, held pickaxe or native-wrapped gun, plain glider/no held item, four enlarged emote slots. Pause and reduced-motion support |

## Rebuild and verify

`node tools/analysis/build-design-d2.cjs` produces the standalone review and /workspace/brio-design-d2.html (<1 MB). Read the full visualize skill before rendering/updating the inline review. Builder is Node core only; assets/fonts/icon subset are bundled. Rendering/fonts/component definitions are intended to be reused for approved integration. A screenshot approximation is not the source of truth.

`node tests/design-d2.cjs` opens only the local review with Playwright and BRIO_DESIGN_CHROME (default /tmp/chromium). All nine views, 49 retained features INCLUDING the separate Hell control, categories/emote slots, local interactions, desktop/narrow widths, no broken images/network/page errors. See validation.json.

`node tests/design-d2-source-contracts.cjs` parses native code without execution; runs only isolated BRIO-owned catalogue helpers against fixtures. Confirms new catalogue additions/removals appear on subsequent render, default exclusion/sync membership, and checks native glider/wrap source contracts. See source-contracts.json and native-contracts.md.

Fonts and Lucide notices carried from D1; artwork generation provenance in prompts.json. D1 remains preserved. Native thumbnails are reduced review samples from prior user capture, not missing game assets. Glider art remains concepts requiring individual alpha export/scale/anchor calibration and chooser/cache extension; custom wraps have not been implemented. Preview pose is source-backed design rendering, not execution of the private native playerPreview engine or native pixel equivalence. Ice gun preview is a small offline mask-composite sample; every native weapon/state is not validated here.

Debrief sample numbers demonstrate layout, not a new real match. Weapon-time percentages use the example sampled denominator; final renderer must use actually sampled totals and handle missing/zero data without fabricating values. Rates require a valid native duration; damage/elimination requires nonzero eliminations. Observed projectiles are not shots fired or accuracy. Native postgame area has limited height; use internal panel scrolling at integration, preserve native controls, never make charts obscure end-page actions.

Known full-map defect OPS-001 remains deferred. No script, V69, diagnostic removal or memory optimization in D2. Review procedure: docs/test-procedures/design-d2-review-procedure.md.
