# User visual observations — V41

Provided on 2026-10-05 with the request to continue the repository. Original full run: `logs/v41-log.txt` (unchanged).

- A number of features appear to have regressed; cosmetics that worked in V40 and earlier no longer work. Once a feature is built, preserve it in later versions.
- Text inside shield/health bars is difficult to read; make it white with a black outline. Apply the same treatment to indicator distances.
- Indicator text may rotate with the arrow, but must never flip upside down.
- Follow-up category selection: **Emotes or several categories**. Specific individual cosmetic IDs and a per-category failure list were not provided. V42 must log them rather than infer successful rendering from LOCAL READY.

These observations establish visual failures/readability concerns, not proof of any unmentioned V41 surface. Meteor/minimap/full-map retention and warnings were not explicitly visually confirmed in this feedback.
