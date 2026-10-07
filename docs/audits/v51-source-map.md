# V51 source audit map — 2026-10-07

Every non-vendored executable block and function has adjacent annotation. Source: src/brio.js; immutable readable copy: versions/v51/brio.js. Line numbers refer to this release only. Vendored Acorn is unchanged; strict audit excludes its byte-identical line. Full machine map: ../analysis/source/v51-comment-audit.json.

## Function locations

| Helper / callback | Line | Body | Annotated |
|---|---|---|---|
| startup IIFE | 32 | BlockStatement | Yes |
| parseNative | 39 | BlockStatement | Yes |
| weaponChoices | 118 | CallExpression | Yes |
| [...GUN_TYPES].filter callback | 118 | LogicalExpression | Yes |
| indicatorColor | 119 | LogicalExpression | Yes |
| renderIndicatorControls | 120 | BlockStatement | Yes |
| input.oninput | 125 | BlockStatement | Yes |
| c.onchange | 134 | BlockStatement | Yes |
| v51HealthColor | 140 | BlockStatement | Yes |
| v51ObjectBody | 145 | LogicalExpression | Yes |
| v51GroundType | 146 | BlockStatement | Yes |
| v51AmmoIndex | 152 | BlockStatement | Yes |
| v51World | 156 | BlockStatement | Yes |
| gateNativeDraw callback | 161 | UnaryExpression | Yes |
| gateNativeDraw callback | 161 | CallExpression | Yes |
| gateNativeDraw callback | 162 | UnaryExpression | Yes |
| attachFeature callback | 167 | BlockStatement | Yes |
| attachFeature callback | 173 | BlockStatement | Yes |
| (S.renderer?.['Åé']\|\|[]).some callback | 175 | LogicalExpression | Yes |
| v51TrailSample | 179 | BlockStatement | Yes |
| v51Player | 186 | BlockStatement | Yes |
| gateNativeDraw callback | 190 | UnaryExpression | Yes |
| gateNativeDraw callback | 192 | UnaryExpression | Yes |
| gateNativeDraw callback | 193 | Literal | Yes |
| gateNativeDraw callback | 193 | BlockStatement | Yes |
| gateNativeDraw callback | 194 | UnaryExpression | Yes |
| gateNativeDraw callback | 195 | UnaryExpression | Yes |
| attachFeature callback | 198 | BlockStatement | Yes |
| attachFeature callback | 207 | BlockStatement | Yes |
| path.points.forEach callback | 213 | ConditionalExpression | Yes |
| v51SafePoint | 218 | BlockStatement | Yes |
| edges.sort callback | 225 | BinaryExpression | Yes |
| v51Indicators | 227 | BlockStatement | Yes |
| collectWorld().filter callback | 232 | LogicalExpression | Yes |
| matches.sort callback | 233 | BlockStatement | Yes |
| v51NativeCandidate | 252 | BlockStatement | Yes |
| children | 254 | BlockStatement | Yes |
| [...a,...b].filter callback | 254 | LogicalExpression | Yes |
| color | 255 | CallExpression | Yes |
| gateNativeDraw callback | 257 | UnaryExpression | Yes |
| list.some callback | 259 | LogicalExpression | Yes |
| list.some callback | 259 | LogicalExpression | Yes |
| list.some callback | 259 | LogicalExpression | Yes |
| gateNativeDraw callback | 259 | UnaryExpression | Yes |
| gateNativeDraw callback | 260 | UnaryExpression | Yes |
| list.filter callback | 261 | LogicalExpression | Yes |
| white.filter callback | 262 | LogicalExpression | Yes |
| white.filter callback | 262 | LogicalExpression | Yes |
| white.some callback | 262 | LogicalExpression | Yes |
| children(marker).filter callback | 263 | LogicalExpression | Yes |
| gateNativeDraw callback | 264 | UnaryExpression | Yes |
| list.some callback | 266 | BinaryExpression | Yes |
| children(root.parent\|\|{}).some callback | 266 | CallExpression | Yes |
| gateNativeDraw callback | 266 | UnaryExpression | Yes |
| v51PacketValue | 269 | BlockStatement | Yes |
| v51StatsObserve | 272 | BlockStatement | Yes |
| value | 277 | CallExpression | Yes |
| v51Sample | 298 | BlockStatement | Yes |
| v51PostGame | 310 | BlockStatement | Yes |
| shown | 322 | ConditionalExpression | Yes |
| [...stats.weaponSeconds].sort callback | 327 | BinaryExpression | Yes |
| [...stats.weaponSeconds].sort(/* BRIO expr V51: v51PostGame — Replace only the n callback | 327 | BinaryExpression | Yes |
| v51Reset | 332 | BlockStatement | Yes |
| normalizeWarningThresholds | 355 | BlockStatement | Yes |
| valid | 356 | ConditionalExpression | Yes |
| WARNING_DEFAULTS.ammo.map callback | 358 | CallExpression | Yes |
| WARNING_DEFAULTS.materials.map callback | 359 | CallExpression | Yes |
| belowWarning | 365 | LogicalExpression | Yes |
| materialIndex | 370 | CallExpression | Yes |
| ["wood","brick","metal","scrap"].findIndex callback | 370 | LogicalExpression | Yes |
| q | 371 | CallExpression | Yes |
| t | 371 | CallExpression | Yes |
| read | 374 | BlockStatement | Yes |
| write | 383 | BlockStatement | Yes |
| state | 392 | CallExpression | Yes |
| saveState | 392 | CallExpression | Yes |
| storedExtras | 395 | BlockStatement | Yes |
| Object.entries(INDICATOR_COLORS).map callback | 400 | ArrayExpression | Yes |
| value.lootChoices.filter callback | 401 | LogicalExpression | Yes |
| LOOT_TIERS.some callback | 403 | BinaryExpression | Yes |
| BUILD_TIERS.some callback | 404 | BinaryExpression | Yes |
| extrasState | 412 | BlockStatement | Yes |
| saveExtras | 427 | CallExpression | Yes |
| norm | 427 | BlockStatement | Yes |
| clean | 436 | BlockStatement | Yes |
| J | 445 | BlockStatement | Yes |
| log | 454 | BlockStatement | Yes |
| setTimeout callback | 458 | BlockStatement | Yes |
| mkBlank | 471 | BlockStatement | Yes |
| catalog | 485 | ConditionalExpression | Yes |
| syncSet | 485 | NewExpression | Yes |
| items | 485 | CallExpression | Yes |
| Object.entries(catalog()).filter callback | 485 | LogicalExpression | Yes |
| Object.entries(catalog()).filter(/* BRIO expr: items / Object.entries(catalog()) callback | 485 | ObjectExpression | Yes |
| Object.entries(catalog()).filter(/* BRIO expr: items / Object.entries(catalog()) callback | 489 | CallExpression | Yes |
| openDB | 493 | NewExpression | Yes |
| anonymous callback | 493 | BlockStatement | Yes |
| r.onupgradeneeded | 495 | BlockStatement | Yes |
| r.onsuccess | 500 | CallExpression | Yes |
| r.onerror | 501 | CallExpression | Yes |
| loadCustom | 505 | BlockStatement | Yes |
| anonymous callback | 508 | BlockStatement | Yes |
| r.onsuccess | 509 | CallExpression | Yes |
| r.onerror | 510 | CallExpression | Yes |
| S.custom[k].sort callback | 519 | BinaryExpression | Yes |
| Object.entries(S.custom).map callback | 520 | ArrayExpression | Yes |
| putCustom | 528 | BlockStatement | Yes |
| anonymous callback | 530 | BlockStatement | Yes |
| tr.onerror | 534 | CallExpression | Yes |
| statusOf | 541 | ConditionalExpression | Yes |
| patchButtons | 548 | BlockStatement | Yes |
| kcat | 586 | ConditionalExpression | Yes |
| sel | 586 | BlockStatement | Yes |
| setSel | 596 | BlockStatement | Yes |
| preview | 609 | ConditionalExpression | Yes |
| card | 609 | BlockStatement | Yes |
| c.querySelector("img").onerror | 616 | CallExpression | Yes |
| c.onclick | 617 | CallExpression | Yes |
| c.onclick | 624 | CallExpression | Yes |
| c.onclick | 631 | CallExpression | Yes |
| renderGrid | 639 | BlockStatement | Yes |
| match | 640 | LogicalExpression | Yes |
| renderLocker | 651 | BlockStatement | Yes |
| z.onclick | 658 | BlockStatement | Yes |
| z.onclick | 669 | BlockStatement | Yes |
| z.onclick | 680 | BlockStatement | Yes |
| locker.querySelector("[data-close]").onclick | 688 | AssignmentExpression | Yes |
| locker.querySelector("[data-upload]").onclick | 690 | CallExpression | Yes |
| locker.querySelector('input[type="file"]').onchange | 691 | BlockStatement | Yes |
| im.onload | 695 | BlockStatement | Yes |
| S.custom[k].reduce callback | 705 | CallExpression | Yes |
| nativeScanNeeded | 770 | LogicalExpression | Yes |
| ["showBulletSpread","buildHealth","objectHealth","safeZoneIndicator","lootIndica callback | 772 | UnaryExpression | Yes |
| CHALLENGE_TESTS.some callback | 772 | UnaryExpression | Yes |
| renderWarningThresholds | 779 | BlockStatement | Yes |
| current | 797 | BlockStatement | Yes |
| input.oninput | 801 | BlockStatement | Yes |
| input.onblur | 809 | BlockStatement | Yes |
| reset.onclick | 815 | BlockStatement | Yes |
| renderChallengeTier | 832 | BlockStatement | Yes |
| select.onchange | 840 | BlockStatement | Yes |
| renderExtras | 849 | BlockStatement | Yes |
| z.onclick | 860 | BlockStatement | Yes |
| c.onchange | 899 | BlockStatement | Yes |
| c.onchange | 909 | BlockStatement | Yes |
| extras.querySelector("[data-close]").onclick | 933 | AssignmentExpression | Yes |
| intercept | 937 | BlockStatement | Yes |
| choose | 952 | BlockStatement | Yes |
| S.custom[k].find callback | 958 | BinaryExpression | Yes |
| asset | 988 | ConditionalExpression | Yes |
| loadRes | 988 | BlockStatement | Yes |
| anonymous callback | 994 | BlockStatement | Yes |
| im.onload | 997 | BlockStatement | Yes |
| im.onerror | 1008 | CallExpression | Yes |
| p.catch callback | 1012 | CallExpression | Yes |
| held | 1014 | LogicalExpression | Yes |
| nativeSnap | 1017 | ObjectExpression | Yes |
| restoreEmote | 1034 | BlockStatement | Yes |
| emoteSlot | 1042 | BlockStatement | Yes |
| (read("locker2", {}).emotes \|\| []).map callback | 1045 | CallExpression | Yes |
| mapEmote | 1047 | BlockStatement | Yes |
| installEmote | 1050 | BlockStatement | Yes |
| get | 1063 | BlockStatement | Yes |
| set | 1066 | BlockStatement | Yes |
| restoreSrc | 1072 | BlockStatement | Yes |
| installSrc | 1079 | BlockStatement | Yes |
| R.emotes.some callback | 1081 | BinaryExpression | Yes |
| set | 1089 | BlockStatement | Yes |
| restoreResourceMaps | 1104 | BlockStatement | Yes |
| cosmeticLock | 1112 | BlockStatement | Yes |
| getNative | 1123 | ConditionalExpression | Yes |
| get | 1127 | BlockStatement | Yes |
| set | 1130 | BlockStatement | Yes |
| (S.cosmeticAdapters \|\| (S.cosmeticAdapters = [])).push callback | 1134 | BlockStatement | Yes |
| restoreCosmetics | 1143 | BlockStatement | Yes |
| sceneObserve | 1149 | BlockStatement | Yes |
| wrap | 1163 | BlockStatement | Yes |
| restores.push callback | 1182 | BlockStatement | Yes |
| sceneRoots | 1190 | BlockStatement | Yes |
| nativeDrawable | 1211 | UnaryExpression | Yes |
| observeRendered | 1212 | BlockStatement | Yes |
| observeRenderArray | 1227 | BlockStatement | Yes |
| anonymous callback | 1233 | BlockStatement | Yes |
| anonymous callback | 1234 | BlockStatement | Yes |
| anonymous callback | 1238 | BlockStatement | Yes |
| restores.push callback | 1253 | BlockStatement | Yes |
| stopRenderDiscovery | 1262 | BlockStatement | Yes |
| restoreRenderArrays | 1272 | BlockStatement | Yes |
| startRenderDiscovery | 1278 | BlockStatement | Yes |
| wrap | 1281 | BlockStatement | Yes |
| anonymous callback | 1285 | BlockStatement | Yes |
| applyLocal | 1310 | BlockStatement | Yes |
| Array.from callback | 1322 | CallExpression | Yes |
| safe | 1325 | CallExpression | Yes |
| loadRes(k, x).catch callback | 1325 | BlockStatement | Yes |
| R.emotes.map callback | 1338 | CallExpression | Yes |
| cosmeticLock callback | 1341 | Identifier | Yes |
| cosmeticLock callback | 1343 | Identifier | Yes |
| cosmeticLock callback | 1344 | Identifier | Yes |
| cosmeticLock callback | 1347 | Identifier | Yes |
| cosmeticLock callback | 1348 | ConditionalExpression | Yes |
| cosmeticLock callback | 1351 | Literal | Yes |
| cosmeticLock callback | 1352 | BinaryExpression | Yes |
| cosmeticLock callback | 1353 | ConditionalExpression | Yes |
| cosmeticLock callback | 1354 | MemberExpression | Yes |
| cosmeticLock callback | 1357 | ConditionalExpression | Yes |
| cosmeticLock callback | 1358 | ConditionalExpression | Yes |
| em.map callback | 1364 | ConditionalExpression | Yes |
| [ "body", "head", "pickaxe", "trail", "wrap", "glider" ].map callback | 1371 | ArrayExpression | Yes |
| R.emotes.map callback | 1374 | ObjectExpression | Yes |
| isPlayer | 1384 | UnaryExpression | Yes |
| isLocal | 1384 | BinaryExpression | Yes |
| worldPos | 1384 | BlockStatement | Yes |
| localNameMatch | 1390 | BlockStatement | Yes |
| resourceSlots | 1399 | BlockStatement | Yes |
| walk | 1400 | BlockStatement | Yes |
| isWorld | 1432 | UnaryExpression | Yes |
| collectPlayers | 1435 | BlockStatement | Yes |
| collectWorld | 1445 | BlockStatement | Yes |
| transparentImage | 1453 | BlockStatement | Yes |
| anonymous callback | 1456 | BlockStatement | Yes |
| make | 1457 | BlockStatement | Yes |
| im.onload | 1468 | BlockStatement | Yes |
| im.onerror | 1474 | CallExpression | Yes |
| done | 1479 | BlockStatement | Yes |
| loaded | 1484 | BlockStatement | Yes |
| failed | 1487 | BlockStatement | Yes |
| p.then callback | 1501 | BlockStatement | Yes |
| blankWrapper | 1505 | BlockStatement | Yes |
| captureRoof | 1518 | BlockStatement | Yes |
| blankWrapper(w, S.roofSaved, p).then(maybeStop).catch callback | 1521 | CallExpression | Yes |
| isBuild | 1522 | BlockStatement | Yes |
| resourceSlots(o).map callback | 1523 | MemberExpression | Yes |
| resourceSlots(o).some callback | 1524 | CallExpression | Yes |
| blankBuild | 1527 | BlockStatement | Yes |
| blankWrapper(x.w, S.buildSaved, x.path).catch callback | 1528 | CallExpression | Yes |
| blankLoot | 1531 | BlockStatement | Yes |
| blankWrapper(x.w, S.lootSaved, x.path).catch callback | 1532 | CallExpression | Yes |
| rememberRemote | 1534 | BlockStatement | Yes |
| makeTrack | 1549 | ObjectExpression | Yes |
| Eââ | 1562 | BlockStatement | Yes |
| éa | 1577 | BlockStatement | Yes |
| ÊÈA | 1580 | BlockStatement | Yes |
| attachTrack | 1586 | BlockStatement | Yes |
| attachLocalTrack | 1595 | BlockStatement | Yes |
| screenState | 1609 | BlockStatement | Yes |
| ensureArrow | 1619 | BlockStatement | Yes |
| placeArrow | 1628 | BlockStatement | Yes |
| projectWorld | 1649 | BlockStatement | Yes |
| nearestTick | 1660 | CallExpression | Yes |
| hudKinds | 1661 | ConditionalExpression | Yes |
| hudWalk | 1665 | BlockStatement | Yes |
| hudPath | 1679 | CallExpression | Yes |
| hudCandidate | 1680 | BlockStatement | Yes |
| setTimeout callback | 1688 | BlockStatement | Yes |
| slotCaption | 1704 | CallExpression | Yes |
| hudWalk(root, 32).find callback | 1704 | LogicalExpression | Yes |
| slotUnit | 1708 | BlockStatement | Yes |
| hudWalk(root, 40).filter callback | 1713 | BinaryExpression | Yes |
| captureSlotRow | 1723 | BlockStatement | Yes |
| [...(row["âè"] \|\| []), ...(row["ÉE"] \|\| [])].map callback | 1730 | ObjectExpression | Yes |
| [...(row["âè"] \|\| []), ...(row["ÉE"] \|\| [])].map(/* BRIO expr: captureSlotRow /  callback | 1730 | MemberExpression | Yes |
| holders.some callback | 1731 | BinaryExpression | Yes |
| holders.sort callback | 1739 | BinaryExpression | Yes |
| holders.map callback | 1740 | CallExpression | Yes |
| nodes.find callback | 1745 | BinaryExpression | Yes |
| S.hudTemplates.slots.findIndex callback | 1748 | BinaryExpression | Yes |
| nodes.find callback | 1755 | LogicalExpression | Yes |
| Object.entries(S.hudTemplates).map callback | 1761 | ArrayExpression | Yes |
| hudInspect | 1768 | BlockStatement | Yes |
| nodes.filter callback | 1783 | BinaryExpression | Yes |
| nodes.some callback | 1785 | BinaryExpression | Yes |
| nodes.some callback | 1786 | LogicalExpression | Yes |
| nodes.filter callback | 1794 | BinaryExpression | Yes |
| nodes.some callback | 1797 | LogicalExpression | Yes |
| nodes.some callback | 1800 | LogicalExpression | Yes |
| ammoIndex | 1806 | UnaryExpression | Yes |
| S.hudTemplates[kind].findIndex callback | 1807 | ConditionalExpression | Yes |
| nodes.find callback | 1822 | LogicalExpression | Yes |
| Object.entries(S.hudTemplates).map callback | 1830 | ArrayExpression | Yes |
| nodes.map callback | 1840 | ObjectExpression | Yes |
| Object.entries(x).filter callback | 1850 | LogicalExpression | Yes |
| hudBounds | 1859 | BlockStatement | Yes |
| liveSlotWarningBounds | 1901 | BlockStatement | Yes |
| hudWalk(holder,32).filter callback | 1904 | LogicalExpression | Yes |
| nodes.filter callback | 1905 | LogicalExpression | Yes |
| nodes.find callback | 1907 | LogicalExpression | Yes |
| ownMaterialWarnings | 1927 | BlockStatement | Yes |
| draw | 1941 | BlockStatement | Yes |
| cloneNativeWidget | 1983 | BlockStatement | Yes |
| clone | 1986 | BlockStatement | Yes |
| ensureNativeSlotArt | 2042 | BlockStatement | Yes |
| unit.pairs.some callback | 2043 | CallExpression | Yes |
| unit.pairs.find callback | 2044 | CallExpression | Yes |
| nativeInvFor | 2076 | BlockStatement | Yes |
| raw.slice().sort callback | 2086 | ConditionalExpression | Yes |
| inventoryBounds | 2116 | ConditionalExpression | Yes |
| remoteRowAdvance | 2124 | MemberExpression | Yes |
| drawNativeInv | 2129 | BlockStatement | Yes |
| row.units.map callback | 2151 | MemberExpression | Yes |
| row.units.map callback | 2152 | MemberExpression | Yes |
| widths.reduce callback | 2153 | BinaryExpression | Yes |
| row.units.forEach callback | 2155 | BlockStatement | Yes |
| pair.node[method] | 2174 | BlockStatement | Yes |
| u.pairs.find callback | 2201 | CallExpression | Yes |
| resetNativeHud | 2234 | BlockStatement | Yes |
| isSlotArtwork | 2262 | LogicalExpression | Yes |
| nativeSlotAmmoIndex | 2269 | BlockStatement | Yes |
| rec?.nodes?.find callback | 2274 | CallExpression | Yes |
| nativeSlotLow | 2283 | LogicalExpression | Yes |
| drawRemoteChargeWarning | 2289 | BlockStatement | Yes |
| nativeSlotAmmo | 2300 | BlockStatement | Yes |
| slotArtStyle | 2313 | BlockStatement | Yes |
| drawSlotArt | 2324 | BlockStatement | Yes |
| drawEmptyX | 2332 | BlockStatement | Yes |
| invScale | 2345 | LogicalExpression | Yes |
| invImage | 2348 | BlockStatement | Yes |
| im.onload | 2353 | BlockStatement | Yes |
| im.onerror | 2358 | BlockStatement | Yes |
| itemPath | 2372 | BlockStatement | Yes |
| matState | 2378 | BlockStatement | Yes |
| drawImg | 2381 | BlockStatement | Yes |
| warningColor | 2390 | ConditionalExpression | Yes |
| drawHudText | 2390 | BlockStatement | Yes |
| drawTxt | 2401 | CallExpression | Yes |
| drawInv | 2404 | BlockStatement | Yes |
| vals.forEach callback | 2431 | BlockStatement | Yes |
| makeInv | 2448 | ObjectExpression | Yes |
| Eââ | 2461 | BlockStatement | Yes |
| éa | 2468 | BlockStatement | Yes |
| ÊÈA | 2476 | BlockStatement | Yes |
| attachInv | 2485 | BlockStatement | Yes |
| restoreInvTrace | 2495 | BlockStatement | Yes |
| automaticPhase | 2499 | BlockStatement | Yes |
| botPhase | 2506 | BlockStatement | Yes |
| botSample | 2519 | BlockStatement | Yes |
| collectPlayers().filter callback | 2522 | UnaryExpression | Yes |
| BOT_CLUSTER.map callback | 2529 | ArrayExpression | Yes |
| BOT_CLUSTER.map callback | 2543 | ArrayExpression | Yes |
| BOT_CLUSTER.map callback | 2544 | ArrayExpression | Yes |
| botStart | 2592 | BlockStatement | Yes |
| setInterval callback | 2600 | BlockStatement | Yes |
| botStop | 2608 | BlockStatement | Yes |
| [ ...S.botWatch.values() ].map callback | 2615 | ObjectExpression | Yes |
| Object.entries(e.phases).map callback | 2620 | ArrayExpression | Yes |
| nearestBy | 2630 | LogicalExpression | Yes |
| collectWorld().filter callback | 2630 | LogicalExpression | Yes |
| collectWorld().filter(/* BRIO expr: nearestBy / collectWorld().filter callback — callback | 2630 | BlockStatement | Yes |
| airdropPred | 2636 | LogicalExpression | Yes |
| resourceSlots(o).some callback | 2636 | CallExpression | Yes |
| fishingPred | 2636 | LogicalExpression | Yes |
| resourceSlots(o).some callback | 2636 | CallExpression | Yes |
| airdropObj | 2636 | CallExpression | Yes |
| chestObj | 2636 | CallExpression | Yes |
| nearestBy callback | 2636 | BinaryExpression | Yes |
| fishingObj | 2636 | CallExpression | Yes |
| targetOnScreen | 2636 | BlockStatement | Yes |
| indicatorTick | 2642 | BlockStatement | Yes |
| shallowState | 2643 | BlockStatement | Yes |
| passiveTick | 2659 | BlockStatement | Yes |
| passiveAdded | 2693 | BlockStatement | Yes |
| resourceSlots(o).map callback | 2703 | MemberExpression | Yes |
| restoreRandom | 2706 | BlockStatement | Yes |
| stopMeteorPersist | 2707 | BlockStatement | Yes |
| restoreMeteor | 2711 | BlockStatement | Yes |
| meteorAutoStop | 2717 | BlockStatement | Yes |
| meteorCandidate | 2728 | BlockStatement | Yes |
| meteorScan | 2739 | BlockStatement | Yes |
| meteorAutoStart | 2778 | BlockStatement | Yes |
| tick | 2785 | BlockStatement | Yes |
| applyRemote | 2811 | BlockStatement | Yes |
| queueRemote | 2831 | BlockStatement | Yes |
| setTimeout callback | 2835 | BlockStatement | Yes |
| setTimeout callback | 2838 | BlockStatement | Yes |
| queueWorld | 2842 | BlockStatement | Yes |
| setTimeout callback | 2846 | BlockStatement | Yes |
| setTimeout callback | 2850 | BlockStatement | Yes |
| handleAdded | 2859 | BlockStatement | Yes |
| patchArray | 2884 | BlockStatement | Yes |
| p | 2886 | BlockStatement | Yes |
| u | 2890 | BlockStatement | Yes |
| restoreArrays | 2913 | BlockStatement | Yes |
| onLocal | 2922 | BlockStatement | Yes |
| setTimeout callback | 2928 | BlockStatement | Yes |
| setTimeout callback | 2932 | BlockStatement | Yes |
| setInterval callback | 2949 | BlockStatement | Yes |
| goals | 2962 | ObjectExpression | Yes |
| stopCapture | 2965 | BlockStatement | Yes |
| maybeStop | 2976 | BlockStatement | Yes |
| tagName | 2983 | BlockStatement | Yes |
| arm | 3006 | BlockStatement | Yes |
| required.map callback | 3095 | ArrayExpression | Yes |
| required.filter callback | 3098 | UnaryExpression | Yes |
| hp | 3103 | BlockStatement | Yes |
| hu | 3108 | BlockStatement | Yes |
| setTimeout callback | 3116 | BlockStatement | Yes |
| bindPlay | 3136 | BlockStatement | Yes |
| prep | 3140 | CallExpression | Yes |
| go | 3140 | CallExpression | Yes |
| verify | 3150 | BlockStatement | Yes |
| reconMarkers.map callback | 3167 | ObjectExpression | Yes |
| term.onclick | 3214 | BlockStatement | Yes |
| Promise.resolve().then callback | 3227 | BlockStatement | Yes |
| Promise.resolve().then(() => { /* BRIO block: term.onclick — Promise.resolve().t callback | 3230 | CallExpression | Yes |
| Promise.resolve().then(() => { /* BRIO block: term.onclick — Promise.resolve().t callback | 3230 | BlockStatement | Yes |
| term.querySelector(".head").onpointerdown | 3241 | BlockStatement | Yes |
| term.querySelector(".head").onpointermove | 3253 | BlockStatement | Yes |
| term.querySelector(".head").onpointerup | 3258 | AssignmentExpression | Yes |
| S.destroy | 3264 | BlockStatement | Yes |
| botAuditReset | 3324 | BlockStatement | Yes |
| botMeta | 3337 | BlockStatement | Yes |
| walk | 3339 | BlockStatement | Yes |
| x.every callback | 3353 | LogicalExpression | Yes |
| botAuditTick | 3358 | BlockStatement | Yes |
| botSourceAudit | 3393 | BlockStatement | Yes |
| deepError | 3428 | BlockStatement | Yes |
| probeSnapshot | 3436 | BlockStatement | Yes |
| walk | 3438 | BlockStatement | Yes |
| deepRecord | 3466 | BlockStatement | Yes |
| environmentProbe | 3477 | BlockStatement | Yes |
| fields.map callback | 3480 | ObjectExpression | Yes |
| incomingDelta | 3494 | BlockStatement | Yes |
| incomingProbe | 3523 | BlockStatement | Yes |
| own | 3528 | ConditionalExpression | Yes |
| targetObject | 3533 | CallExpression | Yes |
| targetKind | 3534 | LogicalExpression | Yes |
| deepEngineProbe | 3575 | BlockStatement | Yes |
| wrapper | 3586 | BlockStatement | Yes |
| deep.engineRestores.push callback | 3594 | BlockStatement | Yes |
| deepTick | 3602 | BlockStatement | Yes |
| wrapper | 3608 | BlockStatement | Yes |
| deep.restore | 3616 | BlockStatement | Yes |
| Reflect.ownKeys(p).map callback | 3631 | BlockStatement | Yes |
| deepReport | 3657 | CallExpression | Yes |
| deepStop | 3668 | BlockStatement | Yes |
| deepStart | 3677 | BlockStatement | Yes |
| tick | 3681 | BlockStatement | Yes |
| numericSourceConstants | 3688 | BlockStatement | Yes |
| readNumber | 3690 | BlockStatement | Yes |
| invalidate | 3706 | BlockStatement | Yes |
| execute | 3712 | BlockStatement | Yes |
| ast.body.find callback | 3722 | LogicalExpression | Yes |
| completeSourceAudit | 3729 | BlockStatement | Yes |
| Array.from callback | 3734 | CallExpression | Yes |
| walk | 3737 | BlockStatement | Yes |
| [...GUN_TYPES].filter callback | 3754 | CallExpression | Yes |
| fn.params.map callback | 3761 | LogicalExpression | Yes |
| object.properties.filter callback | 3768 | BinaryExpression | Yes |
| object.properties.filter(/* BRIO expr: completeSourceAudit / object.properties.f callback | 3768 | ArrayExpression | Yes |
| object.properties.filter(/* BRIO expr: completeSourceAudit / object.properties.f callback | 3768 | LogicalExpression | Yes |
| [...GUN_TYPES].filter callback | 3769 | CallExpression | Yes |
| [...schemaFields].filter callback | 3771 | CallExpression | Yes |
| (members.get(key) \|\| []).slice(0, 120).map callback | 3772 | ObjectExpression | Yes |
| strings.filter callback | 3773 | CallExpression | Yes |
| sourceSchemaAudit | 3783 | BlockStatement | Yes |
| pairs.filter callback | 3799 | CallExpression | Yes |
| pairs.filter callback | 3800 | CallExpression | Yes |
| replicaStateAudit | 3870 | BlockStatement | Yes |
| walk | 3877 | BlockStatement | Yes |
| registrationAudit | 3909 | BlockStatement | Yes |
| [ ...text.matchAll(/([\w$À-ÿ]+)\.([\w$À-ÿ]+)\s*=\s*([\w$À-ÿ]+)\.([\w$À-ÿ]+)/g) ] callback | 3913 | ObjectExpression | Yes |
| resetMonochrome | 3944 | BlockStatement | Yes |
| syncMonochrome | 3955 | BlockStatement | Yes |
| gateNativeDraw | 3975 | BlockStatement | Yes |
| wrapper | 3986 | BlockStatement | Yes |
| featureRestore.push callback | 3998 | BlockStatement | Yes |
| pickupPopupHidden | 4016 | LogicalExpression | Yes |
| nativeVisualCandidate | 4023 | BlockStatement | Yes |
| [node,node.parent].filter callback | 4026 | LogicalExpression | Yes |
| gateNativeDraw callback | 4030 | UnaryExpression | Yes |
| [...(root["âè"]\|\|[]),...(root["ÉE"]\|\|[])].filter callback | 4036 | LogicalExpression | Yes |
| color | 4037 | CallExpression | Yes |
| children.some callback | 4040 | CallExpression | Yes |
| gateNativeDraw callback | 4042 | UnaryExpression | Yes |
| children.find callback | 4045 | LogicalExpression | Yes |
| children.filter callback | 4046 | LogicalExpression | Yes |
| gateNativeDraw callback | 4048 | UnaryExpression | Yes |
| children.filter callback | 4051 | LogicalExpression | Yes |
| arms.filter callback | 4052 | LogicalExpression | Yes |
| arms.filter callback | 4052 | LogicalExpression | Yes |
| arms.some callback | 4052 | LogicalExpression | Yes |
| gateNativeDraw callback | 4053 | UnaryExpression | Yes |
| children.find callback | 4055 | CallExpression | Yes |
| children.find callback | 4055 | CallExpression | Yes |
| gateNativeDraw callback | 4059 | UnaryExpression | Yes |
| gateNativeDraw callback | 4064 | Literal | Yes |
| gateNativeDraw callback | 4064 | BlockStatement | Yes |
| gateNativeDraw callback | 4083 | LogicalExpression | Yes |
| nativeInventoryChallenge | 4090 | BlockStatement | Yes |
| gateNativeDraw callback | 4094 | UnaryExpression | Yes |
| hudWalk(root,240).filter callback | 4098 | LogicalExpression | Yes |
| paths.some callback | 4099 | CallExpression | Yes |
| paths.filter callback | 4100 | CallExpression | Yes |
| paths.some callback | 4100 | CallExpression | Yes |
| paths.some callback | 4100 | CallExpression | Yes |
| gateNativeDraw callback | 4101 | UnaryExpression | Yes |
| remoteInformation | 4111 | BlockStatement | Yes |
| lockOpacity callback | 4116 | UnaryExpression | Yes |
| lockOpacity callback | 4119 | LogicalExpression | Yes |
| featureRestore.push callback | 4121 | CallExpression | Yes |
| restoreRemoteInformation | 4131 | BlockStatement | Yes |
| syncFeatureSettings | 4142 | BlockStatement | Yes |
| exFast | 4175 | BlockStatement | Yes |
| nativeNode | 4185 | ObjectExpression | Yes |
| Eââ | 4198 | BlockStatement | Yes |
| éa | 4205 | BlockStatement | Yes |
| ÊÈA | 4216 | BlockStatement | Yes |
| attachFeature | 4223 | BlockStatement | Yes |
| featureRing | 4234 | BlockStatement | Yes |
| resetFeatures | 4245 | BlockStatement | Yes |
| lockOpacity | 4263 | BlockStatement | Yes |
| featureRestore.some callback | 4264 | BinaryExpression | Yes |
| get | 4271 | BlockStatement | Yes |
| set | 4274 | BlockStatement | Yes |
| restore | 4279 | BlockStatement | Yes |
| featurePlayer | 4294 | BlockStatement | Yes |
| gateNativeDraw callback | 4302 | UnaryExpression | Yes |
| gateNativeDraw callback | 4304 | UnaryExpression | Yes |
| gateNativeDraw callback | 4307 | LogicalExpression | Yes |
| gateNativeDraw callback | 4310 | LogicalExpression | Yes |
| get | 4320 | ConditionalExpression | Yes |
| set | 4321 | BlockStatement | Yes |
| featureRestore.push callback | 4326 | BlockStatement | Yes |
| attachFeature callback | 4339 | BlockStatement | Yes |
| attachFeature callback | 4371 | BlockStatement | Yes |
| attachFeature callback | 4377 | BlockStatement | Yes |
| featureWorld | 4389 | BlockStatement | Yes |
| gateNativeDraw callback | 4395 | LogicalExpression | Yes |
| gateNativeDraw callback | 4419 | UnaryExpression | Yes |
| gateNativeDraw callback | 4420 | UnaryExpression | Yes |
| gateNativeDraw callback | 4421 | LogicalExpression | Yes |
| attachFeature callback | 4422 | BlockStatement | Yes |
| featureTick | 4432 | BlockStatement | Yes |
| (S.hudTemplates?.slots \|\| []).map callback | 4460 | ObjectExpression | Yes |
| indicatorReport | 4483 | BlockStatement | Yes |
| validTarget | 4499 | UnaryExpression | Yes |
| showIndicator | 4499 | BlockStatement | Yes |
| nearestV40 | 4514 | BlockStatement | Yes |
| collectPlayers().filter callback | 4521 | LogicalExpression | Yes |
| active.sort callback | 4524 | BlockStatement | Yes |
| indicatorsV40 | 4532 | BlockStatement | Yes |
| anonymous callback | 4535 | BinaryExpression | Yes |
| anonymous callback | 4535 | LogicalExpression | Yes |
| nearestBy callback | 4535 | LogicalExpression | Yes |
| runtimeV40 | 4539 | BlockStatement | Yes |
| collectPlayers().filter callback | 4542 | UnaryExpression | Yes |
| world.map callback | 4546 | BinaryExpression | Yes |
| [ ...featureNodes.values() ].flatMap callback | 4548 | ArrayExpression | Yes |
| [ ...featureNodes.values() ].flatMap(/* BRIO expr: runtimeV40 / [ ...featureNode callback | 4548 | CallExpression | Yes |
| x["Åé"].map callback | 4562 | ConditionalExpression | Yes |
| nativeAssetAudit | 4574 | BlockStatement | Yes |
| [ ...paths ].filter callback | 4579 | CallExpression | Yes |
| reconSource | 4594 | BlockStatement | Yes |
| [ ...D.scripts ].map callback | 4596 | MemberExpression | Yes |
| [ ...D.scripts ].map(/* BRIO expr: reconSource / [ ...D.scripts ].map callback — callback | 4596 | BlockStatement | Yes |
| urls.find callback | 4603 | CallExpression | Yes |
| setTimeout callback | 4604 | CallExpression | Yes |
| raw.replace callback | 4617 | CallExpression | Yes |
| matches.filter callback | 4644 | BinaryExpression | Yes |
| runtime.filter callback | 4644 | LogicalExpression | Yes |
| chosen.map callback | 4649 | ObjectExpression | Yes |
| EXTRA.challenges.concat(EXTRA.modifiers).filter callback | 4662 | MemberExpression | Yes |
| EXTRA.challenges.concat(EXTRA.modifiers).filter(/* BRIO expr: reconSource / EXTR callback | 4662 | ObjectExpression | Yes |
| reconDom | 4676 | BlockStatement | Yes |
| [ ...D.querySelectorAll("[id]") ].filter callback | 4677 | LogicalExpression | Yes |
| nodes.map callback | 4680 | BlockStatement | Yes |
| [ ...D.querySelectorAll("canvas") ].slice(0, 12).map callback | 4689 | ObjectExpression | Yes |
| reconAdded | 4697 | BlockStatement | Yes |
| resourceSlots(o).map callback | 4700 | MemberExpression | Yes |
| resourceSlots(o).map callback | 4706 | MemberExpression | Yes |
| reconRuntime | 4710 | BlockStatement | Yes |
| r["Åé"].map callback | 4721 | ConditionalExpression | Yes |
| reconKind | 4738 | BlockStatement | Yes |
| resourceSlots(o).map callback | 4739 | MemberExpression | Yes |
| reconDeep | 4747 | BlockStatement | Yes |
| walk | 4749 | BlockStatement | Yes |
| x.every callback | 4763 | CallExpression | Yes |
| Object.entries(out).filter callback | 4768 | LogicalExpression | Yes |
| reconContainers | 4772 | BlockStatement | Yes |
| world.map callback | 4774 | MemberExpression | Yes |
| resourceSlots(o).map callback | 4791 | MemberExpression | Yes |
| world.filter callback | 4809 | CallExpression | Yes |
| world.filter(/* BRIO expr: reconContainers / world.filter callback — Keep this e callback | 4809 | ObjectExpression | Yes |
| world.filter(/* BRIO expr: reconContainers / world.filter callback — Keep this e callback | 4812 | LogicalExpression | Yes |
| world.filter(/* BRIO expr: reconContainers / world.filter callback — Keep this e callback | 4812 | ObjectExpression | Yes |
| restoreMarkerCapture | 4825 | BlockStatement | Yes |
| restoreMarkerHolds | 4835 | BlockStatement | Yes |
| holdMeteor | 4860 | BlockStatement | Yes |
| queueMicrotask callback | 4862 | BlockStatement | Yes |
| wrap | 4884 | BlockStatement | Yes |
| reconRestore.push callback | 4901 | BlockStatement | Yes |
| get | 4914 | BlockStatement | Yes |
| set | 4917 | BlockStatement | Yes |
| reconRestore.push callback | 4922 | BlockStatement | Yes |
| get | 4938 | ConditionalExpression | Yes |
| set | 4939 | BlockStatement | Yes |
| reconRestore.push callback | 4943 | BlockStatement | Yes |
| dw | 4955 | BlockStatement | Yes |
| reconRestore.push callback | 4963 | BlockStatement | Yes |
| loadCustom().finally callback | 5002 | BlockStatement | Yes |
| [...REQUIRED_TESTS,...CHALLENGE_TESTS].map callback | 5009 | LogicalExpression | Yes |
| [...EXTRA.modifiers,...EXTRA.challenges].find callback | 5009 | BinaryExpression | Yes |

## Executable block locations

| Enclosing helper | Line | Annotated |
|---|---|---|
| startup IIFE | 32 | Yes |
| startup IIFE | 35 | Yes |
| startup IIFE | 37 | Yes |
| parseNative | 39 | Yes |
| renderIndicatorControls | 120 | Yes |
| input.oninput | 125 | Yes |
| renderIndicatorControls | 130 | Yes |
| renderIndicatorControls | 132 | Yes |
| c.onchange | 134 | Yes |
| v51HealthColor | 140 | Yes |
| v51GroundType | 146 | Yes |
| v51AmmoIndex | 152 | Yes |
| v51World | 156 | Yes |
| v51World | 159 | Yes |
| v51World | 164 | Yes |
| attachFeature callback | 167 | Yes |
| attachFeature callback | 173 | Yes |
| attachFeature callback | 176 | Yes |
| v51TrailSample | 179 | Yes |
| v51TrailSample | 183 | Yes |
| v51Player | 186 | Yes |
| gateNativeDraw callback | 193 | Yes |
| attachFeature callback | 198 | Yes |
| attachFeature callback | 207 | Yes |
| attachFeature callback | 210 | Yes |
| attachFeature callback | 211 | Yes |
| v51SafePoint | 218 | Yes |
| v51Indicators | 227 | Yes |
| v51Indicators | 229 | Yes |
| matches.sort callback | 233 | Yes |
| v51Indicators | 236 | Yes |
| v51Indicators | 237 | Yes |
| v51Indicators | 238 | Yes |
| v51Indicators | 239 | Yes |
| v51Indicators | 242 | Yes |
| v51NativeCandidate | 252 | Yes |
| children | 254 | Yes |
| v51NativeCandidate | 256 | Yes |
| v51NativeCandidate | 262 | Yes |
| v51PacketValue | 269 | Yes |
| v51StatsObserve | 272 | Yes |
| v51StatsObserve | 276 | Yes |
| v51StatsObserve | 279 | Yes |
| v51StatsObserve | 279 | Yes |
| v51StatsObserve | 279 | Yes |
| v51StatsObserve | 280 | Yes |
| v51StatsObserve | 282 | Yes |
| v51StatsObserve | 285 | Yes |
| v51StatsObserve | 289 | Yes |
| v51StatsObserve | 290 | Yes |
| v51StatsObserve | 292 | Yes |
| v51Sample | 298 | Yes |
| v51Sample | 300 | Yes |
| v51Sample | 303 | Yes |
| v51Sample | 307 | Yes |
| v51PostGame | 310 | Yes |
| v51PostGame | 316 | Yes |
| v51PostGame | 317 | Yes |
| v51PostGame | 318 | Yes |
| v51PostGame | 323 | Yes |
| v51PostGame | 324 | Yes |
| v51PostGame | 327 | Yes |
| v51PostGame | 328 | Yes |
| v51Reset | 332 | Yes |
| normalizeWarningThresholds | 355 | Yes |
| read | 374 | Yes |
| read | 375 | Yes |
| read | 377 | Yes |
| write | 383 | Yes |
| write | 384 | Yes |
| write | 386 | Yes |
| storedExtras | 395 | Yes |
| extrasState | 412 | Yes |
| extrasState | 414 | Yes |
| norm | 427 | Yes |
| norm | 428 | Yes |
| norm | 430 | Yes |
| clean | 436 | Yes |
| clean | 439 | Yes |
| J | 445 | Yes |
| J | 446 | Yes |
| J | 448 | Yes |
| log | 454 | Yes |
| log | 457 | Yes |
| setTimeout callback | 458 | Yes |
| setTimeout callback | 460 | Yes |
| mkBlank | 471 | Yes |
| anonymous callback | 493 | Yes |
| r.onupgradeneeded | 495 | Yes |
| loadCustom | 505 | Yes |
| loadCustom | 507 | Yes |
| anonymous callback | 508 | Yes |
| loadCustom | 513 | Yes |
| loadCustom | 521 | Yes |
| putCustom | 528 | Yes |
| anonymous callback | 530 | Yes |
| patchButtons | 548 | Yes |
| patchButtons | 549 | Yes |
| patchButtons | 558 | Yes |
| patchButtons | 565 | Yes |
| sel | 586 | Yes |
| setSel | 596 | Yes |
| setSel | 599 | Yes |
| card | 609 | Yes |
| card | 614 | Yes |
| card | 622 | Yes |
| card | 629 | Yes |
| renderGrid | 639 | Yes |
| renderLocker | 651 | Yes |
| renderLocker | 654 | Yes |
| z.onclick | 658 | Yes |
| renderLocker | 665 | Yes |
| z.onclick | 669 | Yes |
| renderLocker | 676 | Yes |
| z.onclick | 680 | Yes |
| locker.querySelector('input[type="file"]').onchange | 691 | Yes |
| im.onload | 695 | Yes |
| renderWarningThresholds | 779 | Yes |
| renderWarningThresholds | 786 | Yes |
| renderWarningThresholds | 791 | Yes |
| current | 797 | Yes |
| input.oninput | 801 | Yes |
| input.onblur | 809 | Yes |
| reset.onclick | 815 | Yes |
| renderChallengeTier | 832 | Yes |
| renderChallengeTier | 836 | Yes |
| select.onchange | 840 | Yes |
| renderExtras | 849 | Yes |
| renderExtras | 851 | Yes |
| renderExtras | 856 | Yes |
| z.onclick | 860 | Yes |
| renderExtras | 866 | Yes |
| renderExtras | 871 | Yes |
| renderExtras | 872 | Yes |
| renderExtras | 884 | Yes |
| renderExtras | 890 | Yes |
| renderExtras | 892 | Yes |
| c.onchange | 899 | Yes |
| renderExtras | 905 | Yes |
| c.onchange | 909 | Yes |
| c.onchange | 917 | Yes |
| c.onchange | 921 | Yes |
| intercept | 937 | Yes |
| intercept | 943 | Yes |
| intercept | 946 | Yes |
| choose | 952 | Yes |
| choose | 957 | Yes |
| choose | 975 | Yes |
| loadRes | 988 | Yes |
| anonymous callback | 994 | Yes |
| im.onload | 997 | Yes |
| restoreEmote | 1034 | Yes |
| restoreEmote | 1037 | Yes |
| restoreEmote | 1040 | Yes |
| emoteSlot | 1042 | Yes |
| mapEmote | 1047 | Yes |
| installEmote | 1050 | Yes |
| get | 1063 | Yes |
| set | 1066 | Yes |
| restoreSrc | 1072 | Yes |
| restoreSrc | 1074 | Yes |
| restoreSrc | 1076 | Yes |
| installSrc | 1079 | Yes |
| set | 1089 | Yes |
| set | 1091 | Yes |
| set | 1093 | Yes |
| set | 1095 | Yes |
| restoreResourceMaps | 1104 | Yes |
| restoreResourceMaps | 1105 | Yes |
| restoreResourceMaps | 1106 | Yes |
| restoreResourceMaps | 1108 | Yes |
| cosmeticLock | 1112 | Yes |
| cosmeticLock | 1115 | Yes |
| get | 1127 | Yes |
| set | 1130 | Yes |
| (S.cosmeticAdapters \|\| (S.cosmeticAdapters = [])).push callback | 1134 | Yes |
| (S.cosmeticAdapters \|\| (S.cosmeticAdapters = [])).push callback | 1135 | Yes |
| (S.cosmeticAdapters \|\| (S.cosmeticAdapters = [])).push callback | 1138 | Yes |
| restoreCosmetics | 1143 | Yes |
| restoreCosmetics | 1144 | Yes |
| restoreCosmetics | 1146 | Yes |
| sceneObserve | 1149 | Yes |
| sceneObserve | 1160 | Yes |
| wrap | 1163 | Yes |
| wrap | 1165 | Yes |
| wrap | 1170 | Yes |
| sceneObserve | 1175 | Yes |
| restores.push callback | 1182 | Yes |
| restores.push callback | 1183 | Yes |
| sceneObserve | 1187 | Yes |
| sceneRoots | 1190 | Yes |
| sceneRoots | 1192 | Yes |
| sceneRoots | 1196 | Yes |
| sceneRoots | 1198 | Yes |
| sceneRoots | 1199 | Yes |
| sceneRoots | 1202 | Yes |
| observeRendered | 1212 | Yes |
| observeRendered | 1215 | Yes |
| observeRendered | 1218 | Yes |
| observeRendered | 1221 | Yes |
| observeRendered | 1225 | Yes |
| observeRenderArray | 1227 | Yes |
| observeRenderArray | 1230 | Yes |
| anonymous callback | 1233 | Yes |
| anonymous callback | 1234 | Yes |
| anonymous callback | 1238 | Yes |
| anonymous callback | 1240 | Yes |
| restores.push callback | 1253 | Yes |
| restores.push callback | 1254 | Yes |
| stopRenderDiscovery | 1262 | Yes |
| restoreRenderArrays | 1272 | Yes |
| startRenderDiscovery | 1278 | Yes |
| wrap | 1281 | Yes |
| wrap | 1282 | Yes |
| wrap | 1284 | Yes |
| anonymous callback | 1285 | Yes |
| anonymous callback | 1287 | Yes |
| anonymous callback | 1287 | Yes |
| applyLocal | 1310 | Yes |
| loadRes(k, x).catch callback | 1325 | Yes |
| applyLocal | 1334 | Yes |
| applyLocal | 1342 | Yes |
| applyLocal | 1346 | Yes |
| applyLocal | 1356 | Yes |
| applyLocal | 1359 | Yes |
| applyLocal | 1379 | Yes |
| worldPos | 1384 | Yes |
| localNameMatch | 1390 | Yes |
| resourceSlots | 1399 | Yes |
| walk | 1400 | Yes |
| walk | 1403 | Yes |
| walk | 1410 | Yes |
| walk | 1413 | Yes |
| walk | 1415 | Yes |
| walk | 1419 | Yes |
| resourceSlots | 1427 | Yes |
| collectPlayers | 1435 | Yes |
| collectPlayers | 1437 | Yes |
| collectWorld | 1445 | Yes |
| collectWorld | 1447 | Yes |
| transparentImage | 1453 | Yes |
| anonymous callback | 1456 | Yes |
| make | 1457 | Yes |
| make | 1459 | Yes |
| im.onload | 1468 | Yes |
| anonymous callback | 1477 | Yes |
| done | 1479 | Yes |
| loaded | 1484 | Yes |
| failed | 1487 | Yes |
| p.then callback | 1501 | Yes |
| blankWrapper | 1505 | Yes |
| blankWrapper | 1511 | Yes |
| captureRoof | 1518 | Yes |
| isBuild | 1522 | Yes |
| blankBuild | 1527 | Yes |
| blankLoot | 1531 | Yes |
| rememberRemote | 1534 | Yes |
| rememberRemote | 1536 | Yes |
| rememberRemote | 1544 | Yes |
| Eââ | 1562 | Yes |
| Eââ | 1563 | Yes |
| Eââ | 1575 | Yes |
| éa | 1577 | Yes |
| ÊÈA | 1580 | Yes |
| ÊÈA | 1581 | Yes |
| ÊÈA | 1583 | Yes |
| attachTrack | 1586 | Yes |
| attachTrack | 1589 | Yes |
| attachTrack | 1592 | Yes |
| attachLocalTrack | 1595 | Yes |
| attachLocalTrack | 1600 | Yes |
| attachLocalTrack | 1606 | Yes |
| screenState | 1609 | Yes |
| ensureArrow | 1619 | Yes |
| ensureArrow | 1620 | Yes |
| placeArrow | 1633 | Yes |
| placeArrow | 1646 | Yes |
| projectWorld | 1649 | Yes |
| hudWalk | 1665 | Yes |
| hudWalk | 1667 | Yes |
| hudCandidate | 1680 | Yes |
| setTimeout callback | 1688 | Yes |
| setTimeout callback | 1691 | Yes |
| setTimeout callback | 1693 | Yes |
| setTimeout callback | 1694 | Yes |
| slotUnit | 1708 | Yes |
| slotUnit | 1711 | Yes |
| captureSlotRow | 1723 | Yes |
| captureSlotRow | 1729 | Yes |
| captureSlotRow | 1742 | Yes |
| captureSlotRow | 1759 | Yes |
| hudInspect | 1768 | Yes |
| hudInspect | 1775 | Yes |
| hudInspect | 1779 | Yes |
| hudInspect | 1780 | Yes |
| hudInspect | 1782 | Yes |
| hudInspect | 1786 | Yes |
| hudInspect | 1793 | Yes |
| hudInspect | 1821 | Yes |
| hudInspect | 1823 | Yes |
| hudInspect | 1833 | Yes |
| hudBounds | 1859 | Yes |
| hudBounds | 1861 | Yes |
| hudBounds | 1864 | Yes |
| liveSlotWarningBounds | 1901 | Yes |
| liveSlotWarningBounds | 1910 | Yes |
| ownMaterialWarnings | 1927 | Yes |
| ownMaterialWarnings | 1930 | Yes |
| ownMaterialWarnings | 1931 | Yes |
| ownMaterialWarnings | 1931 | Yes |
| ownMaterialWarnings | 1933 | Yes |
| ownMaterialWarnings | 1939 | Yes |
| draw | 1941 | Yes |
| draw | 1948 | Yes |
| draw | 1955 | Yes |
| ownMaterialWarnings | 1968 | Yes |
| cloneNativeWidget | 1983 | Yes |
| clone | 1986 | Yes |
| clone | 1994 | Yes |
| clone | 2005 | Yes |
| clone | 2007 | Yes |
| clone | 2009 | Yes |
| clone | 2012 | Yes |
| clone | 2016 | Yes |
| clone | 2025 | Yes |
| ensureNativeSlotArt | 2042 | Yes |
| ensureNativeSlotArt | 2065 | Yes |
| nativeInvFor | 2076 | Yes |
| nativeInvFor | 2081 | Yes |
| nativeInvFor | 2083 | Yes |
| nativeInvFor | 2085 | Yes |
| nativeInvFor | 2087 | Yes |
| nativeInvFor | 2091 | Yes |
| nativeInvFor | 2092 | Yes |
| drawNativeInv | 2129 | Yes |
| drawNativeInv | 2135 | Yes |
| drawNativeInv | 2146 | Yes |
| row.units.forEach callback | 2155 | Yes |
| row.units.forEach callback | 2161 | Yes |
| row.units.forEach callback | 2162 | Yes |
| row.units.forEach callback | 2167 | Yes |
| row.units.forEach callback | 2172 | Yes |
| pair.node[method] | 2174 | Yes |
| row.units.forEach callback | 2177 | Yes |
| row.units.forEach callback | 2179 | Yes |
| row.units.forEach callback | 2181 | Yes |
| row.units.forEach callback | 2183 | Yes |
| row.units.forEach callback | 2191 | Yes |
| row.units.forEach callback | 2193 | Yes |
| row.units.forEach callback | 2202 | Yes |
| row.units.forEach callback | 2211 | Yes |
| resetNativeHud | 2234 | Yes |
| resetNativeHud | 2235 | Yes |
| resetNativeHud | 2237 | Yes |
| resetNativeHud | 2239 | Yes |
| resetNativeHud | 2241 | Yes |
| nativeSlotAmmoIndex | 2269 | Yes |
| drawRemoteChargeWarning | 2289 | Yes |
| drawRemoteChargeWarning | 2291 | Yes |
| drawRemoteChargeWarning | 2295 | Yes |
| nativeSlotAmmo | 2300 | Yes |
| slotArtStyle | 2313 | Yes |
| slotArtStyle | 2320 | Yes |
| drawSlotArt | 2324 | Yes |
| drawEmptyX | 2332 | Yes |
| invImage | 2348 | Yes |
| im.onload | 2353 | Yes |
| im.onerror | 2358 | Yes |
| im.onerror | 2359 | Yes |
| itemPath | 2372 | Yes |
| itemPath | 2376 | Yes |
| matState | 2378 | Yes |
| drawImg | 2381 | Yes |
| drawImg | 2384 | Yes |
| drawImg | 2386 | Yes |
| drawHudText | 2390 | Yes |
| drawInv | 2404 | Yes |
| drawInv | 2411 | Yes |
| drawInv | 2412 | Yes |
| drawInv | 2416 | Yes |
| drawInv | 2418 | Yes |
| drawInv | 2427 | Yes |
| vals.forEach callback | 2431 | Yes |
| drawInv | 2436 | Yes |
| drawInv | 2440 | Yes |
| Eââ | 2461 | Yes |
| éa | 2468 | Yes |
| ÊÈA | 2476 | Yes |
| ÊÈA | 2477 | Yes |
| ÊÈA | 2479 | Yes |
| attachInv | 2485 | Yes |
| attachInv | 2488 | Yes |
| attachInv | 2491 | Yes |
| restoreInvTrace | 2495 | Yes |
| automaticPhase | 2499 | Yes |
| botPhase | 2506 | Yes |
| botSample | 2519 | Yes |
| botSample | 2522 | Yes |
| botSample | 2523 | Yes |
| botSample | 2533 | Yes |
| botSample | 2569 | Yes |
| botSample | 2577 | Yes |
| botSample | 2583 | Yes |
| botStart | 2592 | Yes |
| setInterval callback | 2600 | Yes |
| botStop | 2608 | Yes |
| collectWorld().filter(/* BRIO expr: nearestBy / collectWorld().filter callback — callback | 2630 | Yes |
| targetOnScreen | 2636 | Yes |
| indicatorTick | 2642 | Yes |
| shallowState | 2643 | Yes |
| shallowState | 2645 | Yes |
| shallowState | 2647 | Yes |
| shallowState | 2649 | Yes |
| passiveTick | 2659 | Yes |
| passiveTick | 2660 | Yes |
| passiveTick | 2662 | Yes |
| passiveTick | 2664 | Yes |
| passiveTick | 2667 | Yes |
| passiveTick | 2674 | Yes |
| passiveTick | 2676 | Yes |
| passiveTick | 2678 | Yes |
| passiveTick | 2685 | Yes |
| passiveTick | 2690 | Yes |
| passiveAdded | 2693 | Yes |
| restoreRandom | 2706 | Yes |
| stopMeteorPersist | 2707 | Yes |
| restoreMeteor | 2711 | Yes |
| meteorAutoStop | 2717 | Yes |
| meteorCandidate | 2728 | Yes |
| meteorCandidate | 2732 | Yes |
| meteorScan | 2739 | Yes |
| meteorScan | 2741 | Yes |
| meteorScan | 2748 | Yes |
| meteorScan | 2753 | Yes |
| meteorScan | 2760 | Yes |
| meteorScan | 2771 | Yes |
| meteorAutoStart | 2778 | Yes |
| tick | 2785 | Yes |
| tick | 2786 | Yes |
| tick | 2788 | Yes |
| tick | 2789 | Yes |
| applyRemote | 2811 | Yes |
| applyRemote | 2816 | Yes |
| applyRemote | 2825 | Yes |
| queueRemote | 2831 | Yes |
| setTimeout callback | 2835 | Yes |
| setTimeout callback | 2838 | Yes |
| queueWorld | 2842 | Yes |
| setTimeout callback | 2846 | Yes |
| setTimeout callback | 2850 | Yes |
| handleAdded | 2859 | Yes |
| handleAdded | 2861 | Yes |
| handleAdded | 2864 | Yes |
| handleAdded | 2870 | Yes |
| handleAdded | 2877 | Yes |
| patchArray | 2884 | Yes |
| p | 2886 | Yes |
| u | 2890 | Yes |
| restoreArrays | 2913 | Yes |
| restoreArrays | 2914 | Yes |
| restoreArrays | 2917 | Yes |
| onLocal | 2922 | Yes |
| setTimeout callback | 2928 | Yes |
| setTimeout callback | 2932 | Yes |
| onLocal | 2946 | Yes |
| setInterval callback | 2949 | Yes |
| stopCapture | 2965 | Yes |
| maybeStop | 2976 | Yes |
| tagName | 2983 | Yes |
| tagName | 2990 | Yes |
| tagName | 2992 | Yes |
| tagName | 2999 | Yes |
| arm | 3006 | Yes |
| arm | 3029 | Yes |
| arm | 3056 | Yes |
| arm | 3060 | Yes |
| arm | 3067 | Yes |
| arm | 3069 | Yes |
| arm | 3071 | Yes |
| arm | 3073 | Yes |
| arm | 3075 | Yes |
| arm | 3077 | Yes |
| arm | 3079 | Yes |
| arm | 3083 | Yes |
| arm | 3087 | Yes |
| hp | 3103 | Yes |
| hu | 3108 | Yes |
| setTimeout callback | 3116 | Yes |
| bindPlay | 3136 | Yes |
| verify | 3150 | Yes |
| term.onclick | 3214 | Yes |
| term.onclick | 3216 | Yes |
| term.onclick | 3218 | Yes |
| term.onclick | 3222 | Yes |
| term.onclick | 3222 | Yes |
| Promise.resolve().then callback | 3227 | Yes |
| Promise.resolve().then(() => { /* BRIO block: term.onclick — Promise.resolve().t callback | 3230 | Yes |
| Promise.resolve().then(() => { /* BRIO block: term.onclick — Promise.resolve().t callback | 3233 | Yes |
| Promise.resolve().then(() => { /* BRIO block: term.onclick — Promise.resolve().t callback | 3235 | Yes |
| term.querySelector(".head").onpointerdown | 3241 | Yes |
| term.querySelector(".head").onpointermove | 3253 | Yes |
| S.destroy | 3264 | Yes |
| S.destroy | 3295 | Yes |
| S.destroy | 3297 | Yes |
| S.destroy | 3298 | Yes |
| S.destroy | 3300 | Yes |
| S.destroy | 3301 | Yes |
| S.destroy | 3303 | Yes |
| S.destroy | 3305 | Yes |
| S.destroy | 3307 | Yes |
| botAuditReset | 3324 | Yes |
| botMeta | 3337 | Yes |
| walk | 3339 | Yes |
| walk | 3342 | Yes |
| walk | 3345 | Yes |
| walk | 3347 | Yes |
| walk | 3351 | Yes |
| botAuditTick | 3358 | Yes |
| botAuditTick | 3360 | Yes |
| botAuditTick | 3363 | Yes |
| botAuditTick | 3381 | Yes |
| botSourceAudit | 3393 | Yes |
| botSourceAudit | 3402 | Yes |
| deepError | 3428 | Yes |
| probeSnapshot | 3436 | Yes |
| walk | 3438 | Yes |
| walk | 3439 | Yes |
| walk | 3440 | Yes |
| walk | 3440 | Yes |
| walk | 3446 | Yes |
| walk | 3449 | Yes |
| walk | 3452 | Yes |
| deepRecord | 3466 | Yes |
| deepRecord | 3467 | Yes |
| deepRecord | 3469 | Yes |
| environmentProbe | 3477 | Yes |
| environmentProbe | 3481 | Yes |
| environmentProbe | 3483 | Yes |
| environmentProbe | 3484 | Yes |
| incomingDelta | 3494 | Yes |
| incomingDelta | 3500 | Yes |
| incomingDelta | 3505 | Yes |
| incomingDelta | 3512 | Yes |
| incomingDelta | 3517 | Yes |
| incomingProbe | 3523 | Yes |
| incomingProbe | 3526 | Yes |
| incomingProbe | 3535 | Yes |
| incomingProbe | 3537 | Yes |
| incomingProbe | 3539 | Yes |
| incomingProbe | 3543 | Yes |
| incomingProbe | 3545 | Yes |
| incomingProbe | 3548 | Yes |
| incomingProbe | 3556 | Yes |
| incomingProbe | 3558 | Yes |
| incomingProbe | 3561 | Yes |
| incomingProbe | 3562 | Yes |
| incomingProbe | 3565 | Yes |
| deepEngineProbe | 3575 | Yes |
| deepEngineProbe | 3581 | Yes |
| deepEngineProbe | 3584 | Yes |
| wrapper | 3586 | Yes |
| wrapper | 3587 | Yes |
| wrapper | 3587 | Yes |
| wrapper | 3590 | Yes |
| deep.engineRestores.push callback | 3594 | Yes |
| deepTick | 3602 | Yes |
| deepTick | 3603 | Yes |
| deepTick | 3604 | Yes |
| deepTick | 3605 | Yes |
| deepTick | 3605 | Yes |
| deepTick | 3607 | Yes |
| wrapper | 3608 | Yes |
| wrapper | 3610 | Yes |
| wrapper | 3610 | Yes |
| wrapper | 3611 | Yes |
| wrapper | 3611 | Yes |
| deep.restore | 3616 | Yes |
| deepTick | 3622 | Yes |
| deepTick | 3624 | Yes |
| deepTick | 3628 | Yes |
| Reflect.ownKeys(p).map callback | 3631 | Yes |
| deepTick | 3633 | Yes |
| deepTick | 3636 | Yes |
| deepTick | 3638 | Yes |
| deepTick | 3642 | Yes |
| deepTick | 3644 | Yes |
| deepTick | 3646 | Yes |
| deepTick | 3651 | Yes |
| deepStop | 3668 | Yes |
| deepStop | 3670 | Yes |
| deepStart | 3677 | Yes |
| tick | 3681 | Yes |
| tick | 3681 | Yes |
| tick | 3681 | Yes |
| numericSourceConstants | 3688 | Yes |
| readNumber | 3690 | Yes |
| readNumber | 3694 | Yes |
| readNumber | 3695 | Yes |
| invalidate | 3706 | Yes |
| execute | 3712 | Yes |
| execute | 3714 | Yes |
| execute | 3716 | Yes |
| execute | 3717 | Yes |
| execute | 3717 | Yes |
| completeSourceAudit | 3729 | Yes |
| completeSourceAudit | 3731 | Yes |
| completeSourceAudit | 3734 | Yes |
| completeSourceAudit | 3734 | Yes |
| completeSourceAudit | 3735 | Yes |
| walk | 3737 | Yes |
| walk | 3747 | Yes |
| walk | 3747 | Yes |
| walk | 3748 | Yes |
| walk | 3748 | Yes |
| walk | 3749 | Yes |
| walk | 3749 | Yes |
| walk | 3750 | Yes |
| walk | 3750 | Yes |
| completeSourceAudit | 3754 | Yes |
| completeSourceAudit | 3755 | Yes |
| completeSourceAudit | 3756 | Yes |
| completeSourceAudit | 3758 | Yes |
| completeSourceAudit | 3765 | Yes |
| completeSourceAudit | 3769 | Yes |
| completeSourceAudit | 3775 | Yes |
| sourceSchemaAudit | 3783 | Yes |
| sourceSchemaAudit | 3785 | Yes |
| sourceSchemaAudit | 3803 | Yes |
| sourceSchemaAudit | 3807 | Yes |
| sourceSchemaAudit | 3812 | Yes |
| sourceSchemaAudit | 3814 | Yes |
| sourceSchemaAudit | 3818 | Yes |
| sourceSchemaAudit | 3823 | Yes |
| sourceSchemaAudit | 3830 | Yes |
| sourceSchemaAudit | 3854 | Yes |
| sourceSchemaAudit | 3856 | Yes |
| replicaStateAudit | 3870 | Yes |
| walk | 3877 | Yes |
| walk | 3880 | Yes |
| walk | 3883 | Yes |
| walk | 3885 | Yes |
| walk | 3889 | Yes |
| registrationAudit | 3909 | Yes |
| registrationAudit | 3910 | Yes |
| registrationAudit | 3926 | Yes |
| registrationAudit | 3928 | Yes |
| resetMonochrome | 3944 | Yes |
| resetMonochrome | 3946 | Yes |
| syncMonochrome | 3955 | Yes |
| syncMonochrome | 3956 | Yes |
| syncMonochrome | 3958 | Yes |
| gateNativeDraw | 3975 | Yes |
| gateNativeDraw | 3978 | Yes |
| gateNativeDraw | 3981 | Yes |
| gateNativeDraw | 3982 | Yes |
| wrapper | 3986 | Yes |
| wrapper | 3987 | Yes |
| wrapper | 3989 | Yes |
| featureRestore.push callback | 3998 | Yes |
| featureRestore.push callback | 3999 | Yes |
| gateNativeDraw | 4004 | Yes |
| nativeVisualCandidate | 4023 | Yes |
| nativeVisualCandidate | 4027 | Yes |
| nativeVisualCandidate | 4040 | Yes |
| nativeVisualCandidate | 4047 | Yes |
| nativeVisualCandidate | 4056 | Yes |
| nativeVisualCandidate | 4063 | Yes |
| gateNativeDraw callback | 4064 | Yes |
| nativeInventoryChallenge | 4090 | Yes |
| nativeInventoryChallenge | 4093 | Yes |
| nativeInventoryChallenge | 4097 | Yes |
| nativeInventoryChallenge | 4100 | Yes |
| remoteInformation | 4111 | Yes |
| remoteInformation | 4114 | Yes |
| remoteInformation | 4117 | Yes |
| remoteInformation | 4124 | Yes |
| remoteInformation | 4125 | Yes |
| remoteInformation | 4126 | Yes |
| restoreRemoteInformation | 4131 | Yes |
| restoreRemoteInformation | 4132 | Yes |
| restoreRemoteInformation | 4133 | Yes |
| syncFeatureSettings | 4142 | Yes |
| syncFeatureSettings | 4145 | Yes |
| syncFeatureSettings | 4149 | Yes |
| syncFeatureSettings | 4156 | Yes |
| syncFeatureSettings | 4158 | Yes |
| syncFeatureSettings | 4160 | Yes |
| syncFeatureSettings | 4162 | Yes |
| exFast | 4175 | Yes |
| exFast | 4177 | Yes |
| Eââ | 4198 | Yes |
| Eââ | 4199 | Yes |
| Eââ | 4201 | Yes |
| éa | 4205 | Yes |
| éa | 4208 | Yes |
| éa | 4212 | Yes |
| ÊÈA | 4216 | Yes |
| attachFeature | 4223 | Yes |
| attachFeature | 4226 | Yes |
| featureRing | 4234 | Yes |
| resetFeatures | 4245 | Yes |
| resetFeatures | 4247 | Yes |
| resetFeatures | 4249 | Yes |
| resetFeatures | 4253 | Yes |
| resetFeatures | 4255 | Yes |
| lockOpacity | 4263 | Yes |
| get | 4271 | Yes |
| set | 4274 | Yes |
| restore | 4279 | Yes |
| restore | 4280 | Yes |
| restore | 4284 | Yes |
| featurePlayer | 4294 | Yes |
| featurePlayer | 4300 | Yes |
| featurePlayer | 4311 | Yes |
| featurePlayer | 4313 | Yes |
| featurePlayer | 4315 | Yes |
| set | 4321 | Yes |
| featureRestore.push callback | 4326 | Yes |
| featureRestore.push callback | 4327 | Yes |
| featureRestore.push callback | 4330 | Yes |
| featurePlayer | 4337 | Yes |
| attachFeature callback | 4339 | Yes |
| attachFeature callback | 4345 | Yes |
| attachFeature callback | 4358 | Yes |
| attachFeature callback | 4362 | Yes |
| attachFeature callback | 4366 | Yes |
| attachFeature callback | 4371 | Yes |
| attachFeature callback | 4377 | Yes |
| featureWorld | 4389 | Yes |
| featureWorld | 4398 | Yes |
| featureWorld | 4401 | Yes |
| featureWorld | 4407 | Yes |
| featureWorld | 4411 | Yes |
| featureWorld | 4417 | Yes |
| attachFeature callback | 4422 | Yes |
| featureTick | 4432 | Yes |
| featureTick | 4433 | Yes |
| featureTick | 4434 | Yes |
| featureTick | 4448 | Yes |
| featureTick | 4462 | Yes |
| featureTick | 4466 | Yes |
| featureTick | 4467 | Yes |
| featureTick | 4469 | Yes |
| featureTick | 4473 | Yes |
| featureTick | 4474 | Yes |
| featureTick | 4476 | Yes |
| featureTick | 4480 | Yes |
| indicatorReport | 4483 | Yes |
| indicatorReport | 4485 | Yes |
| showIndicator | 4499 | Yes |
| showIndicator | 4501 | Yes |
| showIndicator | 4507 | Yes |
| nearestV40 | 4514 | Yes |
| nearestV40 | 4515 | Yes |
| nearestV40 | 4517 | Yes |
| active.sort callback | 4524 | Yes |
| nearestV40 | 4529 | Yes |
| indicatorsV40 | 4532 | Yes |
| indicatorsV40 | 4533 | Yes |
| indicatorsV40 | 4536 | Yes |
| runtimeV40 | 4539 | Yes |
| nativeAssetAudit | 4574 | Yes |
| nativeAssetAudit | 4576 | Yes |
| nativeAssetAudit | 4581 | Yes |
| reconSource | 4594 | Yes |
| reconSource | 4595 | Yes |
| [ ...D.scripts ].map(/* BRIO expr: reconSource / [ ...D.scripts ].map callback — callback | 4596 | Yes |
| [ ...D.scripts ].map(/* BRIO expr: reconSource / [ ...D.scripts ].map callback — callback | 4597 | Yes |
| [ ...D.scripts ].map(/* BRIO expr: reconSource / [ ...D.scripts ].map callback — callback | 4600 | Yes |
| reconSource | 4606 | Yes |
| reconSource | 4613 | Yes |
| reconSource | 4624 | Yes |
| reconSource | 4637 | Yes |
| reconSource | 4672 | Yes |
| reconDom | 4676 | Yes |
| nodes.map callback | 4680 | Yes |
| reconAdded | 4697 | Yes |
| reconRuntime | 4710 | Yes |
| reconRuntime | 4711 | Yes |
| reconRuntime | 4727 | Yes |
| reconRuntime | 4729 | Yes |
| reconRuntime | 4734 | Yes |
| reconKind | 4738 | Yes |
| reconDeep | 4747 | Yes |
| walk | 4749 | Yes |
| walk | 4752 | Yes |
| walk | 4755 | Yes |
| walk | 4757 | Yes |
| walk | 4761 | Yes |
| reconContainers | 4772 | Yes |
| reconContainers | 4773 | Yes |
| reconContainers | 4775 | Yes |
| reconContainers | 4779 | Yes |
| reconContainers | 4794 | Yes |
| reconContainers | 4803 | Yes |
| reconContainers | 4821 | Yes |
| restoreMarkerCapture | 4825 | Yes |
| restoreMarkerHolds | 4835 | Yes |
| restoreMarkerHolds | 4844 | Yes |
| restoreMarkerHolds | 4846 | Yes |
| restoreMarkerHolds | 4849 | Yes |
| restoreMarkerHolds | 4852 | Yes |
| restoreMarkerHolds | 4852 | Yes |
| holdMeteor | 4860 | Yes |
| queueMicrotask callback | 4862 | Yes |
| queueMicrotask callback | 4863 | Yes |
| queueMicrotask callback | 4867 | Yes |
| wrap | 4884 | Yes |
| wrap | 4885 | Yes |
| reconRestore.push callback | 4901 | Yes |
| reconRestore.push callback | 4902 | Yes |
| queueMicrotask callback | 4906 | Yes |
| get | 4914 | Yes |
| set | 4917 | Yes |
| reconRestore.push callback | 4922 | Yes |
| reconRestore.push callback | 4923 | Yes |
| reconRestore.push callback | 4926 | Yes |
| queueMicrotask callback | 4933 | Yes |
| set | 4939 | Yes |
| reconRestore.push callback | 4943 | Yes |
| reconRestore.push callback | 4944 | Yes |
| reconRestore.push callback | 4947 | Yes |
| queueMicrotask callback | 4954 | Yes |
| dw | 4955 | Yes |
| dw | 4956 | Yes |
| reconRestore.push callback | 4963 | Yes |
| reconRestore.push callback | 4964 | Yes |
| queueMicrotask callback | 4978 | Yes |
| loadCustom().finally callback | 5002 | Yes |
