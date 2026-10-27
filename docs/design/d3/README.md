# D3 — Field Kit / BRIO Unlocked

Completed third visual review. Live V68/runtime/packages/archives/captured assets and original logs unchanged. Prior D1/D2 preserved. No gameplay suite. Review via in-chat D3 or self-contained review.html; outer tabs/sample labels are review-only. Native home buttons/overlays remain the test-suite design; no added Play, Unlocker or Extras home controls.

## Latest feedback applied

- General Advantages now lists19 included modifier toggles, Large inventory and default warning thresholds. DRAFT action clears every excluded modifier toggle through the catalogue, including future additions, then applies included settings. Remains editable. Preserves unrelated challenges, colors, cosmetics and uploads; Hell off as before. LIVE change is OPS-002, not shipped yet. Supersedes prior merge-only contract.
- GitHub button shortened to GitHub. Purple Discord-logo badge shows ads0210 but is a span with no href, role=button, tabindex, event or hover-action treatment. Source brand SVG from Simple Icons, credited in assets/discord-NOTICE.md.
- Native running recon replaces whole-player wobble with separate body/head angles, hand group, alternating feet and independent trail composition. See preview-recon.md, preview-source.json and reproducible source analyzer. Still needs focused native reference for exact timing/renderer padding/scale, not proven pixel-equivalent.
- Hell lists each effect on its own line with punctuation. General Advantages includes every selected setting. The lists are intentionally explicit; app marketing subtitles remain absent.
-36 static crosshair choices (10 accepted earlier +26new). Families cover point/pixel, open/closed crosses, fine/duplex, ring/scope, brackets, square/diamond/triangle, center-dot variations, T/post/axis-only, chevrons, three-spoke/diagonal/star and off-center corner variants. No calibrated range marks, spread, dynamic recoil, decorative animations or firing guarantees. This is the useful set identified this round, not a claim that no future useful shape could exist. Existing choices/colors/sizes remain editable inline.
- Five new sets bring total10sets/40pieces. Tide Archivist: nautical copper/chart; Glass Orchard: stained botanical glass; Rivet Sonata: brass/burgundy resonance; Polar Frequency: periwinkle analog radio; Morrow Loom: indigo/saffron woven structure. All head/body/pickaxe/plain-glider concepts. New custom wraps still skipped pending safe provider/cache/all-art-state proof. Existing built-in wraps remain.
- Debrief top values and labels centered. Overall panel accepted as design direction; actual #deathPass placement/scroll/native controls must be reviewed after final implementation. Indicator accepted unchanged. Logo accepted gradient retained.

## Assets and reproducibility

Generation-plan.json contains exact built-in image tool prompts/reference roles; generation-{set}.json records sources. Project-consumed assets are in assets/; original generated PNGs were preserved at their generation locations and selected full WebP boards saved here. No project reference depends on a volatile generation path. Each new source board is retained alongside review downscales and bounded sprite atlas. pack-design-d3-cosmetics.py deterministically crops the four largest solid-alpha components into padded350px cells (SciPy/Pillow); no redraw/semantic edit. Atlas-layout.json records exact bounds/source sizes. Atlases are draft packing, not native anchoring proof. Main builder consumes lighter atlas-review assets, bundled fonts, native thumbnail samples and Lucide subset; uses Node core only and writes inline /workspace/brio-design-d3.html under1MB and standalone review.html.

Commands from repo root:

- node tools/analysis/build-design-d3.cjs
- node tests/design-d3.cjs (Playwright, BRIO_DESIGN_CHROME default /tmp/chromium; ONLY local file)
- node tools/analysis/analyze-design-d3-preview.cjs (Acorn; native AST only, isolated existing BRIO numeric interpreter)
- node tests/design-d2-source-contracts.cjs (existing dynamic catalogue addition/removal/default exclusion and source glider/wrap contracts; writes its unchanged D2 report)

Validation.json records desktop/mobile checks, all49 retained features INCLUDING Hell, all36nonblank/unique crosshairs,10sets, exact preset with future modifier fixture/unrelated preservation/editability, threshold reset, independent menus, noninteractive Discord, zero HTTP/page errors, responsive images/fonts, reduced motion/pause and centered statistics. These are draft UI checks, not gameplay or final native fidelity. Reuse exact approved component definitions/fonts/assets during integration; apply actual native host dimensions/scroll constraints at that stage. Dynamic catalogue provider remains source-backed; D3's samples are not the production list. Preserve safe unavailable/zero/sampled-data handling from D2 contracts for stats.

## Handoff and checkpoints

Artwork/source recon/docket checkpoint published9a36e4308ce8944465fbba0f18d6154ed0a47695. Final D3 handoff supersedes that WIP note, preserving history. Resume from checkpoint.md and current AGENTS prefix. Read full visualize skill before changing inline preview. Next user reviews D3, revisits focused no-match animation reference if needed, then iterates or approves. OPS-001/OPS-002, native renderer calibration, custom-glider chooser/cache extension, final sprite anchors, diagnostic-terminal removal and measured memory lifecycle work remain final-integration items; no live change here.
