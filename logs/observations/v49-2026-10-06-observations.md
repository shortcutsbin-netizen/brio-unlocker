# Explicit V49 user observations — input to V50

This is a separately labeled summary of the user's report, not a replacement for the exact full export in `../runs/v49-log.txt`.

- Threshold warning decisions work correctly. Requested per-group Reset to default and inline line items; multiple values on one row. Visual redesign is deferred.
- Transparent foliage looks correct and is complete. Native selected-slot warning border now follows the raised slot correctly.
- Remote inventory still has native hotkeys underneath. Remove them only from remote clones; enlarge materials and proportionally enlarge item slots to match the ammo-strip width.
- Remove loot glow works. Retire the standalone modifier, retain its implementation/proof, and reuse it inside Mask loot: Mask item, Mask rarity, Popups only, Locations only, All invisible.
- Invisible builds becomes Blueprints only / All invisible. Preserve genuine aiming blueprints; placed builds must not leave blue ghosts.
- Reopen All players invisible: held pickaxe/guns/build art and trail particles remain visible in V49 and must be silenced.
- Add Good flippin luck: all gameplay challenges at highest tiers, every modifier disabled, visual-only monochrome excluded. Future gameplay challenges should join automatically.
- `docs/game-sources/main.css` was uploaded because no `index.html` appeared in Sources. Verify the document and explain retrieval; request further supporting files only with a concrete reason.
- Deliver a wide table of additional source-supported modifier/challenge proposals in chat. These are approval candidates for a later pass, not authorization to implement them now.
- Continue extensive annotations in `src/brio.js`; strip every comment from dist. Preserve historical files and publish the next version to GitHub with the live procedure in chat.

Prior explicit proof retained: meteor retention/next-match clearing, monochrome startup/restoration, larger indicator player names, cosmetics, native warning semantics and chest hiding. High contrast remains retained/deferred/unflagged. Contents/bot classification remain unresolved; native nearby labels are not custom pre-open contents.
