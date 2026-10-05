# All-feature status — V44

Current live evidence is V43. Established means the earlier completed behavior is preserved, not that every current browser/mode was retested. New V44 visual paths need the live run. Mock coverage is not pixel proof. Fully completed baseline components remain in place; changed dependency paths are tracked separately.

| Item | Status at this delivery |
|---|---|
| Native (un)Locker/Extras home buttons, ad CSS, category/search UI, saved selections | Completed baseline; preserved |
| Body/Head/Pickaxe Native/Random/bundled/Invisible/Custom, upload/cache | Completed baseline; preserved; failure/isolation regressions pass |
| Wrap Native/Random/bundled; Trail/Glider Native/Random/bundled/Invisible | Completed baseline; preserved |
| Four independent Emote Native/Random/bundled slots | Completed baseline; preserved |
| Dynamic Play name/capture, local-only authority, direct JS delivery/export, cleanup/reinjection | Completed baseline; preserved |
| All players invisible, Loot invisible, Builds invisible (ordinary/special/preview), all gliders/trails invisible | Established baseline; preserved; native/fixture limits in knowledge apply |
| Transparent roofs | Established baseline; 21 captured in V43; no fresh explicit pixel confirmation |
| Player names | Established baseline; preserved |
| Player health bars | Established baseline; V44 equal shield height/spacing needs live check |
| Health/shield number style | User-confirmed improved black/white style; retained; resized shield rendering needs live check |
| Inventory tracking, three toggles, five slots excluding pickaxe, size Small/Medium/Large/XL | Established baseline; preserved |
| Exact native inline inventory appearance/assets/captions | V43 visually failed; V44 rendered-array/native asset/geometry path added; pixel identity and weapon/caption/font gaps pending |
| Own low-material display outline | V43 invisible/zero bindings; V44 acquisition changed; live pending |
| Remote material values<30 and ammo-type values<20 flash red | New V44 implementation and blue test surface; boundary mocks pass; live pending |
| Low-health glowing/flashing player outline HP≤30 | Implemented; preserved; current visual confirmation pending |
| Nearest player/chest/airdrop arrows, distances/upright text/on-screen suppression | Implemented; preserved; live correctness still pending; unchanged regression coverage |
| Permanent meteor on minimap and full map | V43 visually failed; V44 acquisition/dual native marker expiry retention changed; live pending |
| Screen chests (normal/legendary/ammo/grenade), Screen airdrops, Screen fishing/NONE | Recon unresolved; identity/type known; pre-open contents unimplemented; not proven impossible; options retained |
| Identify bots | Recon unresolved; no safe classifier; options retained |
| Automatic match phase from ordinary Play | V44 removes MATCH START and observes native gliding pair; mocks pass; live/mode coverage pending |
| Chests invisible, Foliage invisible, Transparent foliage, Monochrome | Implemented earlier; awaiting explicit live validation; preserved |
| Highlight loot, Remove loot glow/effects, High-contrast players | Implemented earlier; awaiting explicit live validation; preserved |
| Build material labels, Deployable labels, Deployable effect-radius | Implemented earlier; awaiting explicit live validation; preserved |
| No minimap, No crosshair, No inventory/item bar, No health/shield HUD | Planned/unimplemented |
| Invisible storm, Storm edge, Safe-zone center direction, Storm-edge distance | Planned/unimplemented; source recon retained |
| Flashlight mode, Enhanced/custom crosshair | Planned/unimplemented; source recon retained |

No classifier, guessed contents or ownership/network mutation was introduced. The full root/current knowledge/history still defines specific modes and evidence limits.
