# V45 user observations received 2026-10-06

The user supplied `logs/v45-log.txt` and reported that everything looked correct generally, with these specific exceptions and coverage notes:

- Player names in indicators were difficult to read and should be larger.
- With a selected gun under the ammo threshold, the red box appeared at an unrelated bottom-left position. Every native gun slot below the threshold should glow red, including unequipped guns. Materials looked correct.
- Meteor retention worked, but an old match's marker remained after entering a new game. Runtime game state should clear between matches; saved selections should carry over.
- Multiple normal chests, ammo/grenade crates and a fishing spot were opened. The user did not believe a legendary chest or an airdrop was exercised.
- Continue the analyze/build/push/test workflow with maximum useful information gain. Readable source may have comments; remove all comments from the minified dist.

This is a paraphrase of explicit user feedback, not a pixel-by-pixel comparison or proof of every option. The user supplied the original post-v45 request after the previous v46 drafting thread was interrupted.

V46 interpretation from the native source: a gun's displayed slot count is loaded ammunition plus the matching reserve; grappler and signal flare use loaded ammunition only. Warning threshold remains strictly below 20. This interpretation is logged and included in the test procedure; the user did not specify a different threshold/count convention.
