# V49 findings — 2026-10-06

## Evidence

Exact V48 log:4,667,213bytes, Git blob4cd9538ea9e76fa70f26411db88dfddb2d13c058, relocated to logs/runs/v48-log.txt. User report separately labeled. Two Plays with default then custom settings support user confirmation of custom threshold values/persistence. User reports remote HP circles unwanted, boundaries should be inclusive, flare exempt, selected-slot warning not rising, and loot particles still visible. No custom contents seen.

Deep records1130/1485, packets19718/31167; container lanes261/483 below700, replica300 capped both, player301/350. Native registry missing both,2/3registry discovery errors and55/73truncations.91chest creates90default/1legendary,93ammo crates,87grenade crates,54bubbles,9airdrops. These are lifecycle events, not unique openings.85source chunks match unchanged engine SHA25642ac4c2b8dd1de931a15373421462d0e0047b3303df30f2f6454f08f5abd1ac4.

## Fixes and contracts

- Inputs now inline child rows immediately under each controlling warning, with real disabled fieldsets and grey style. Saved valid custom values preserved; new grappler default5 used for missing/invalid settings.
- Shared inclusive count<=threshold for all resource paths and local HP. Zero warns known zero, equality warns, unknown/negative suppress. Native local HP outline only; remote resource warnings still share thresholds. Signal flare fully exempt, never mapped to grappler threshold.
- Native source frame moves aÃ[selected].ë.Ä=-10. Captured parent pointers can survive replaced child arrays; V48 logged13own bindings. V49 attaches gun borders to stable native holders, validates live child-array membership, measures current background/empty rectangle with32-node HUD cap and bounded transform chain every draw. Tracks lift/resizing/replacement; suppress stale targets. Remote proven inventory geometry/art/X untouched.
- Native gun/ammo create assigns ÀÅ as dedicated rarity glow; gun frame emits polygon particles underneath. Resource-name matching missed this branch (V48 FAIL). V49 gates ÀÅ opacity via native early-return draw behavior, including later particles, while item âê/root stay visible and simulation continues unchanged. Toggle/cleanup restores latest native opacity writes and descriptors; no Highlight loot feature reintroduced.
- Preserve proven presentation/mono/meteor/arrows/cosmetics/hiding without recurring chores. Nine flags only changed warnings, contents/bots and still-unverified foliage/glow. Custom setting value mechanics marked proven; revised placement/boundary remain live-pending.

## Supplied sources and contents

scheme.js is36bytes and only sets VULTR_SCHEME='build_prod'. It is not a schema/remapper. msgpack.js is51128bytes, codec with extension support. The previous external-remapper assumption was incorrect: ãè.éèé is internal engine function238073..238330. Static complete function shows recursive reverse-dictionary key rename, array-index preservation and unknown-key logging/retention; no contents generation/discard route. Original decoder observer already captures before native remapping; no extra native decode/encode/send/source execution added.

Static analyzer records new file hashes, parsed codec feature strings, exact remapper, selected-slot frame and native effect callback evidence. Runtime full-source audit emits bounded remapper function text. No authoritative pre-open contents/seed/NONE/bot classifier found; finite/private/capped evidence does not establish universal impossibility. Desired contents remain always-visible above each detected unopened container, independent of proximity; no guessed popup is delivered.

Request Sources > buildroyale.io > (index) main HTML document, saved as docs/game-sources/index.html, before next pass. This will establish loaded script/module/worker references and versions and help identify any client source still unaccounted for. Additional modules are not assumed to exist.

## Reorganization and validation

Docs separated into knowledge/game-sources/findings/status/test-procedures/analysis(engine,runs)/licenses; logs into runs/observations; analysis tools grouped; archives grouped by version. Original current-dist48 copy moved to dist/archived/ so every old file, including duplicates, remains. docs/relocations.json maps every original path and blob SHA; historical bodies unchanged. Current references/scripts updated, old text paths remain history with relocation guide.

npm ci/build/test:32integrated scenarios against source and actual payload. Prior29 cases adapted to explicit inclusive/local-only semantics; new selected-lift/stale-array case and own/prototype native effect-gating/late-particle/toggle/native-write/restoration cases. Source/payload parse, zero minified comments, immutable archive matches dist. Original logs/game sources/historical docs/archives preserved byte-for-byte at mapped paths; old knowledge retained as suffix. Fixtures do not prove live pixels or unavailable data.
