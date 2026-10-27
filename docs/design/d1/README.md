# D1 — Field Kit / BRIO Unlocked

First professional end-user design round for review. **Not installed in the game.** Live V68, src/dist/version archives and gameplay settings remain unchanged. No new gameplay test; known full-map leak is OPS-001 on the deferred docket.

## Review coverage

| Area | Draft coverage | State |
|---|---|---|
| Home socials | Responsive728x90strip; project GitHub + Discord visual | Draft; Discord invite pending |
| Unlocker | Skins Head/Body, Pickaxes, Wraps, Trails, Gliders, Emotes/four slots; modes/search/import/equip | Draft |
| Extras / Modifiers | All29retained rows, grouped; editable General Advantages/default resets | Draft |
| Extras / Challenges | All20retained rows; highest-tier Hell/visual exceptions; tiers/feedback groups | Draft |
| Match debrief | Victory/elimination sample states; placement/native totals/observed notes; unavailable accuracy/attribution explicit | Draft/sample data |
| Crosshairs | Pinpoint, Split rail, Halo, Pilot, Compass, Apex; live color/size | Draft vector/canvas geometry |
| Custom cosmetics | Trail Warden, Citrus Circuit, Nightglass; head/body/pickaxe only | Concept art; native slicing/anchors pending |
| Shared indicator | Same silhouette across colors/types; rotating arrow/upright distance/optionalname | Draft |
| Home logo | BRIO UNLOCKED text; original wood/pickaxe/blueprint language | Draft adapted raster |

The outer D1 navigation/sample-data labels and local-interaction toast are review chrome, not planned in-game UI. Buttons are local demonstrations except the real project GitHub link. Discord deliberately has no invented destination. Native thumbnail samples are from the user's prior captured assets, not newly fetched game data. Full production catalog still uses existing native data; this draft only needs representative thumbnails.

## Rebuild and render

Run `node tools/analysis/build-design-d1.cjs` from repository root. It assembles identical CSS/component JS/assets into `review.html` plus the current inline fragment `/workspace/brio-design-d1.html` (<1MB). Read the full visualize skill before using the inline fragment in a new turn. Builder uses Node core plus vendored named Lucide glyph data; no network or runtime injection.

`node tests/design-d1.cjs` uses Playwright and `BRIO_DESIGN_CHROME` (default `/tmp/chromium`) to inspect ONLY the local self-contained document. Browser/runtime dependencies are executor tooling, not active game dependencies. Local screenshots were inspected for home/locker/modifiers/challenges/debrief/crosshairs/cosmetics/indicator/logo. QA results in validation.json, including1120/1024/736/390/320widths. Actual fonts are bundled WOFF from the font sources below, making previews reproducible. Keep the exact approved components/assets for final integration; new visual rounds should preserve this first draft and record decisions.

## Reference and asset provenance

- User reference index: https://github.com/sindresorhus/awesome . Followed its [Web Design](https://github.com/nicolesaidy/awesome-web-design), [Design Principles](https://github.com/robinstickel/awesome-design-principles) and [Game Development / Magictools](https://github.com/ellisonleao/magictools) links. Applied hierarchy/proximity/progressive grouping, typography pairing and clear sprite silhouettes; this is original component work, not a copied template or third-party UI kit.
- Logo source supplied by user: https://buildroyale.io/buildart/logo5.png ; prior captured asset00997,223x107, viewed before edit. New adaptation uses built-in image generation in edit mode, exact BRIO/UNLOCKED words and original signboard language. `assets/logo.webp` is selected packaged art.
- Original body/head anatomy references are captured worker_head.png and worker_body.png. New cosmetic concept board generated with built-in image generation; prompts and exact reference/output roles in prompts.json. `assets/cosmetics.webp` is selected packaged board. CSS preview crops keep original image data unchanged; individual native export calibration is deferred until accepted. The full generated PNGs were shown directly in chat; packaged assets use WebP for self-contained review size.
- Fonts: Barlow Condensed800 and DM Sans400/600. Source URLs and selected WOFF hashes in assets/fonts.json. Font licenses in assets/barlow-OFL.txt and dm-sans-OFL.txt. The unused downloaded font variants were not retained as product assets.
- Named Lucide glyph subset from installed lucide1.8.0; data in lucide-icons.json and ISC notice in assets/lucide-LICENSE.txt. No hand-drawn generic UI icon paths.
- `native-thumbnails.json` contains lossless WebP review copies with original source filenames. Original captures/logs/native/vendor bytes remain untouched.

## Operational and design limits

Source/encoded asset sharing gives a reproducible design, not proof of final native pixels or cosmetic anchors. Live V68 viewport/font metrics are retained in design-d1-v68-analysis.json. A matched viewport/font/host CSS integration is still required; chat may scale visuals and game backgrounds are dynamic. Prototype sample numbers/names are explicitly examples and do not assert new stats. No accuracy/assists/per-player damage rankings/new gameplay mechanics. No game performance or unlimited-match memory claim from local QA. OPS-001 remains unfixed until final approved visual integration.

See ../deferred-integration-docket.md and ../../test-procedures/design-d1-review-procedure.md. Give feedback by the nine review tabs, keeping socials and logo distinct if helpful. Supply the Discord invite with feedback. No matches requested.
