# Release paths

`src/brio.js` is current editable source. `dist/` contains the current complete plain Console payload. `versions/` preserves released bytes under consistent names.

| Version | Current archived path | Former path |
|---|---|---|
| V40 | `versions/brio-v40.min.js` | `versions/v40.js` |
| V41 corrected plain payload | `versions/brio-v41.min.js` | `dist/v41.js` |
| V42 | `versions/brio-v42.min.js` | `dist/brio-v42.min.js` (duplicate removed) |
| V43 current | `dist/brio-v43.min.js`, `versions/brio-v43.min.js` | — |

V40/V41 moves preserve exact uploaded bytes, including terminal newline differences. V42 archive is byte-identical to its previous dist file. Historical documents retain original paths as evidence; use this table for their current location. Previous commit links remain available. Full logs keep existing user-upload names; observations are separate labeled Markdown files.

V44: `src/brio.js`, `dist/brio-v44.min.js`, identical `versions/brio-v44.min.js`. V43 old dist duplicate removed; unchanged `versions/brio-v43.min.js` retains the complete payload.
