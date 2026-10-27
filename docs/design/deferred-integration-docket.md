# D2 docket update — 2026-10-27

OPS-001 remains deferred/unfixed. User approved continued design iteration, not runtime integration. Supersedes older social requirements below: use project GitHub and plain Discord handle ads0210; no invite/link. No custom Play or whole-page end redesign. Unlocker/Extras independent. Final integration must preserve dynamic native catalogue, implement native-compatible header preview (head/body/trail, held pickaxe/native-wrap gun, glider/no held gear, emote slots), extend custom-glider chooser/cache with tests if artwork approved, and keep new custom wraps excluded pending validation. Five sets/ten crosshair concepts in D2 are not shipped. Read docs/design/d2/native-contracts.md for exact provider/pose/data limits. D2 debrief is only #deathPass replacement; native controls remain. No extra gameplay while reviewing. Max2matches for eventual approved final integration.

---

# Deferred final-integration docket — design phase

## OPS-001 — No map still exposes the full map

**Status: confirmed user-reported defect; fix deferred by explicit instruction.**

V68 hides the minimap but the native full map can still be opened and seen. The uploaded V68 run is preserved in logs/runs/v68-log.txt. This is an outstanding runtime defect, not a design-only observation and not fixed by the D1 preview. User explicitly requested no new gameplay suite now; apply the fix together with the approved final visual implementation.

Final acceptance: No map and Hell hide both minimap and every native full-map rendering/opening path, plus map counters/numeric countdown. Separate storm/event/status announcements, elimination banners and kill feed remain visible. Turning the challenge off restores the original map behavior without a stuck input/focus state. Native keybind settings, simulation and packet authority remain untouched. Diagnose the actual reached full-map render branch before choosing a gate; do not assume a `mapScene` name match proves all full-map paths. No broad new hooks or guessed root suppression. Test within the single final visual integration suite, maximum2played matches.

## Visual integration after iterative approval

- Apply approved socials/home logo, all locker screens, separate Extras pages, end-screen stats, crosshairs, head/body/pickaxe originals and shared indicator. Preserve D1 and later review records; use exact approved component definitions/assets instead of an approximate redraw.
- GitHub destination is the project repository (user chose it). Discord invite remains unknown; prototype gives a local pending-link notice, never a fabricated invite.
- Cosmetic sheet is concept artwork: final individual alpha exports, trimming, native scale/rotation/anchors and 1:1 preview still need verification before shipping. Do not treat CSS atlas crops as native-ready sprites.
- Keep all49retained option IDs/semantics, editable General Advantages vs derived Hell locks, native status/feed exclusions, own-name/countdown fixes and native cosmetic selection behavior. New crosshair artwork is not spread/cone reconstruction.
- Preserve authoritative/native match totals and explicitly observed counters. Prototype stats are labeled sample data; no invented accuracy, assist counts or per-player damage rankings.
- Replace/remove the diagnostic terminal only as part of production integration; deliberate access to settings/errors must remain. Measure retained resources across match lifecycles before memory fixes. Past cap notices are not a diagnosis of a memory leak.

No live script, dist payload, published versions or gameplay test procedure is changed in this design turn. Do not restart the old V68 full test. Review draft layouts here, iterate until user approval, then implement together with OPS-001.
