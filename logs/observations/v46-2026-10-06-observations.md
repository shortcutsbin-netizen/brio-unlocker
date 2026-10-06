# Explicit user feedback after V46

The uploaded `logs/v46-log.txt` contains four normal Plays. User observations, received 2026-10-06:

- Red empty-inventory X looked better in v45; restore it. Inventory icons look correct, but sizing shrank; restore v45 sizing.
- Remove build/deployable label modifiers, deployable radius and Highlight loot. They were not enabled for these tests.
- Keep High-contrast players, but temporarily remove it from the test surface; it was not enabled and is difficult to judge with other modifiers.
- Player names in indicator labels now look great.
- Meteor persists correctly and does not carry over to the next match.
- Remove invisible foliage from Challenges because transparent foliage already exists in Modifiers.
- All X-invisible modifiers and all cosmetics work correctly.
- Monochrome looks good and disables/restores colors correctly. There was a brief normal-color flash at entering a match before mono returned; an unavoidable buffer would be acceptable.
- Invisible chests worked in the final match.
- No chest-content screening popup was noticed.
- Annotate the new readable source extensively for reliable targeted maintenance. Minified payload comments must remain removed.

These are explicit observations, not inferred visual passes for settings that were off. Actual legendary chest creates/airdrop payloads in the log show those native objects were observed, not necessarily opened by this user. No explicit new ammo-border visual verdict was supplied; retain it in the next test.
