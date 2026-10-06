# User-reported V48 observations and V49 directions

Labeled summary of the current user message, not extra inferred observations. Exact full run retained under logs/runs/v48-log.txt.

- Grappler default should be5 going forward.
- Threshold fields should be inline under their corresponding warning options, like nearest-arrow name under the indicator, rather than distant at the top.
- Low-health circles appeared around remote players; intended for native local player only.
- Glow particles still exist with Remove loot glow/effects. Highlight loot was previously removed and is not requested back.
- Warnings must apply when value is LESS THAN OR EQUAL to threshold: threshold1/count1 warns.
- Custom thresholds otherwise appear to work correctly.
- Native selected item slot rises slightly; red warning box did not follow its border.
- Flare gun is single-use and must be exempt from low-ammo warning.
- No custom container contents seen. Always-visible above-detected-container goal remains.
- scheme.js and msgpack.js supplied under docs/.
- Reorganize repository into useful subfolders throughout; preserve every historical file/context.
- Authorized full analysis/build/upload/test-procedure workflow.

No new explicit transparent-foliage, inventory slot-number-removal or bot/content feasibility verdict is inferred. Prior proven inventory presentation/meteor/monochrome/cosmetics/indicators/chest hiding remain proof unless dependencies change.
