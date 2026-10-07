# Additional mechanics proposed after V50 recon

Approval candidates only: none of this table is implemented by V50. Existing approved features are omitted. All candidates are local visual/information adapters; no server ownership, damage, firing, collision or packet authority changes. New gameplay challenges would join Good flippin luck; visual-only options would be explicitly excluded.

“Direct” means an identifiable native drawable/data route exists, not live proof of a future feature. “Validate” means recon has a route, but units, lifetime, ownership or accessibility must be established before implementation. The read-only engine analysis records decoded fields, callback kinds and source coordinates. A dictionary-only field is not sufficient proof: chargedAmmo and generic debug rays in particular cannot justify inventing live data.

| ID | Kind | Proposal | Native support / remaining gap |
|---|---|---|---|
| M01 | Modifier | Stamina number / low-stamina warning | Validate: native stamina arc, sprint state; numeric scale |
| M02 | Modifier | Reload progress beside selected weapon | Validate: native rt/frt counters and reload arc; units |
| M03 | Modifier | Charge-weapon progress and stored charges | Validate: chargeTime/charges HUD; live weapon ownership |
| M04 | Modifier | Reticle shows current spread / steadying | Validate: spread + steadying references; projected scale |
| M05 | Modifier | Active-effect names and countdowns | Direct: player effects entries have duration; per-effect units |
| M06 | Modifier | Recent HP/shield loss summary | Direct: hLost/sLost update routes; bounded local history |
| M07 | Modifier | Number of builds affordable per material | Direct: native recipes, mats and selected build; validate costs |
| M08 | Modifier | Clear blocked-build / insufficient-material cue | Direct: canBuild, needResource and native preview colors |
| M09 | Modifier | Placed-build health numbers / damage tint | Direct: object health/fullHealth and build roots |
| M10 | Modifier | Harvestable-object health / damage tint | Direct: reached object health/fullHealth; category filtering |
| M11 | Modifier | Distinct visual palette for build materials | Direct: native wood/brick/metal art and damage stages |
| M12 | Modifier | Arrow to nearest safe-zone edge | Direct: native square-zone position/extent; no circular guess |
| M13 | Modifier | Distance to safe-zone boundary | Direct: player position + square-zone bounds |
| M14 | Modifier | Larger storm countdown / phase bar | Direct: native waiting/moving state and time callback |
| M15 | Modifier | Always-visible labels on detected ground loot | Direct: native gunType/rarity and ammo/material mapping |
| M16 | Modifier | Selective loot emphasis by category | Direct: separate gun/ammo/material/consumable art branches |
| M17 | Modifier | Small textual rarity badge on visible loot | Direct: loot rarity field; optional replacement presentation |
| M18 | Modifier | Distinguish legendary chest markers | Direct: chestType default/legendary creates already recorded |
| M19 | Modifier | Separate crate/fishing indicators | Direct: ammocrate/grenadecrate/bubbles subtypes and positions |
| M20 | Modifier | Mark pickups matching carried weapons' ammo | Direct: weapon slots + native ammo-type table; no quantity inference |
| M21 | Modifier | Dedicated grappler-charge readout | Direct: selected/per-slot loaded-charge state; no reserve fiction |
| M22 | Modifier | Longer visible projectile traces | Direct: bullet create/frame/remove; lifetime/ownership validation |
| M23 | Modifier | Throwable position / observed-flight trail | Direct: throwable callbacks; past path only, no predicted physics |
| M24 | Modifier | Armed-landmine cue | Direct: primed flag and native armed/unarmed art |
| M25 | Modifier | Vehicle health/status readout | Validate: car/baller health render/update branches and scale |
| M26 | Modifier | Team-filtered distance / indicator targets | Validate: team membership + player/ping positions per mode |
| C01 | Challenge | No full map | Direct: native full-map scene, separate from minimap |
| C02 | Challenge | Hide ammo amounts, retain item slots | Direct: stack counters and selected-ammo HUD branches |
| C03 | Challenge | Hide material amounts, retain material icons | Direct: native material counter nodes |
| C04 | Challenge | Mask inventory item identities, retain slots | Direct: native slot art separate from backgrounds |
| C05 | Challenge | Mask inventory rarity, retain item identities | Direct: native slot rarity backgrounds; preserve readable art |
| C06 | Challenge | No pickup labels, keep ground loot visible | Direct: identified native cached pickup-popup sprite |
| C07 | Challenge | No teammate names/status labels | Direct: remote information root and native team/name drawables |
| C08 | Challenge | No teammate/ping map markers | Validate: marker groups/ping events; separate native storm roots |
| C09 | Challenge | No hit-confirmation marker | Direct: red hit-marker child of native crosshair |
| C10 | Challenge | No floating damage numbers | Direct: native player damage-text pool; separate from HP bars |
| C11 | Challenge | No reload / charge progress cues | Direct: native progress-arc/HUD branches |
| C12 | Challenge | Invisible bullets / throwable projectiles | Direct: bullet/throwable roots; keep physics native |
| C13 | Challenge | Invisible placed mines / traps | Direct: throwable subtype/primed art; pickup art separate |
| C14 | Challenge | Invisible vehicles | Direct: car/baller physical roots; keep native collision |
| C15 | Challenge | Conceal held weapons, keep player bodies | Direct: held-art parent and external aiming-preview branch |
| C16 | Challenge | No storm countdown | Direct: native timer/counter holder; leave map/player counters |

Approve/reject by ID, with any preferred names or tiers. These are inferred implementation opportunities from client routes, not promised access to hidden server facts. Pre-open container contents and reliable bot classification remain existing unresolved work, rather than new feasibility claims.
