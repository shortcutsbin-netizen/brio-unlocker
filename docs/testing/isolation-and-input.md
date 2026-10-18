# Dedicated browser containment and BRIO input feasibility

## Current decision — 2026-10-18

The user asks whether the assistant can be technically confined to a dedicated browser window after the user signs into BRIO, and whether aiming/buttons can be delivered programmatically. This is a design/feasibility discussion, not authorization to install or run a custom input bridge. No local app, VM, extension, bridge or game input has been verified. Existing cloud access fails before the native home page. V61 is unchanged; no matches have been played by the assistant.

**A dedicated window alone is not an enforced boundary.** A task instruction can scope behavior, but does not establish that the available browser, desktop, file or shell tools cannot reach other resources. A dedicated profile reduces routine session exposure without providing an OS sandbox.

The recommended stronger candidate is a VM containing both the controlling ChatGPT desktop app and a dedicated Chrome installation/profile. This isolates normal guest computer actions from the main desktop when host integrations and other host-side tools are not granted. It does not literally limit an unrestricted guest agent to one browser window. For that stricter requirement, add an enforceable target-tab/window input interface and withhold other guest/host control tools. No configuration is a promise of zero security vulnerabilities.

## Boundary comparison

| Arrangement | What it provides | What it does not establish |
|---|---|---|
| Dedicated window in the normal Chrome profile | Clear task target | Isolation from other tabs, accounts, browser windows, host tools or files |
| Dedicated browser/profile and site approvals | Fewer unrelated sessions and a narrower approved workflow | A hard browser-window boundary; all other tool access must be considered separately |
| VM with ChatGPT app and Chrome inside it | Stronger separation from the normal desktop; independent guest pointer/desktop | Browser-only confinement within the guest; protection for accounts signed into the guest; automatic LAN isolation |
| Restricted input interface bound to an owned tab | Potential application-enforced target boundary and minimal input vocabulary | A stock ChatGPT feature already installed here, or protection if separate broad tools remain available |
| VM plus a restricted interface and no host integrations | Strongest practical proposed combination for this test surface | A formally proven security sandbox, zero escape risk, or verified game performance |

OpenAI's [Computer Use documentation](https://learn.chatgpt.com/docs/computer-use) explicitly describes running the desktop app inside a Windows VM to keep its computer use off the main Windows desktop. Actual feature availability and compatibility must still be checked. The controlling app must run **inside** the VM for this design; merely displaying a VM window while granting the agent general host-desktop control is a different boundary.

## Suggested VM scope, if chosen

- Dedicated guest environment with no mounted host disks/shared folders, shared clipboard, drag/drop, unnecessary USB passthrough or host credential integration.
- No agent connection to host-side shell, filesystem, desktop-control server or unrelated browser profile. Audit the tools actually exposed to the task, not just the browser window selected.
- Review VM network reachability: guest networking can still reach host/LAN services unless restricted. Permit the legitimate game/authentication/update connections needed for the task through supported controls; do not use proxies/fingerprints to evade a game access block.
- The user signs in manually and approves only relevant site access. Accounts remain sensitive even inside a VM. Using the same Google account can retain access to other Google services; a VM does not turn that identity into a game-only account.
- The user retains a host-side way to stop/suspend the VM or task. Stopping the guest or disconnecting may end the live match; match rejoin after departure is not available per user report.
- VM compute/graphics overhead can affect FPS and therefore observations. Pick a platform and resource allocation only after checking Windows edition/hardware, supported browser/app features and any applicable VM/OS licensing requirements. No VM vendor or paid configuration has been selected.

The application may offer browser/site/app approval controls, but we have not verified a stock setting that guarantees one chosen window is the only resource every agent tool can reach. Do not present a behavioral promise, a profile, or a site allowlist as stronger isolation than it actually provides.

## Native input source evidence

`../analysis/engine/input-surface-2026-10-18.json` records the parsed listeners and source offsets. Engine SHA256 remains `42ac4c2b8dd1de931a15373421462d0e0047b3303df30f2f6454f08f5abd1ac4`.

- The native `mousemove` listener around character 332979 uses `clientX/clientY` when the game's pointer is unlocked.
- Under pointer lock, it adds `movementX/movementY` to a bounded virtual point. An absolute-position event alone is insufficient for that branch.
- Native `mousedown`/`mouseup` listeners maintain separate left/right states. The configured binding dispatcher around characters 628508 and 629974 converts mouse buttons using `2000 + event.button` before invoking the same action binding logic.
- Keyboard actions have independent down/up handlers and configured binding lookup. Their actual custom key assignments still require reading in the live settings without modifying them.
- The AST search finds no direct `isTrusted` identifier/literal in this supplied engine. This is not proof of acceptance of every synthetic input, absence of all input gates, or native/server success.

This supports a **plausible ordinary-input aiming route**. It does not support claiming any particular connected tool can already play BRIO.

## Three meanings of programmatic aiming

| Method | Effect | Assessment |
|---|---|---|
| OS pointer movement inside the guest | Moves the VM's pointer and generates native GUI input | General computer use can move/type/click, but its exact exposed movement/hold API must be checked after connection. It need not move the host pointer when control truly runs in the guest. |
| Browser-level virtual pointer/input | Supplies mouse coordinates and button/key state to the controlled page, potentially without moving the host OS pointer | Preferred candidate for a restricted tab interface. Requires an actually supported browser/driver API, viewport and focus mapping, and live input verification. |
| In-page synthetic events | Dispatches event-shaped input to page listeners | Could fit the unlocked native handler; synthetic-event acceptance and pointer-lock deltas remain untested. Page JavaScript cannot generally relocate the OS cursor. Do not misuse the currently read-only evaluation API to implement this. |

Setting a DOM value, drawing a cursor overlay or changing an internal player/aim variable is not the same as delivering ordinary browser input. Prefer native/browser input first. No protocol sends, game-state edits, hidden input API or auto-aim implementation is introduced by this design.

Official API [driver documentation](https://developers.openai.com/api/docs/guides/tools-computer-use-sdk-drivers) includes pointer movement. Its [integration examples](https://developers.openai.com/api/docs/guides/tools-computer-use-integration) show browser pointer and key operations. Those are developer integration capabilities, not evidence that this chat's current browser tools expose equivalent methods. A separate runner/bridge would be additional implementation with its own supported connection and review requirements.

## What a useful game-control interface must prove

| Required behavior | Verification |
|---|---|
| Aim without firing | Move the game aim through known screen points; confirm rendered gun/bullet direction, not just a fake cursor |
| Hip fire | Independent left-button down/up at an aim point, with actual native discharge |
| ADS | Right-button hold across aim changes; distinguish input from native steadying/recoil |
| Movement while aiming and firing | Independently held native movement key(s), right button and left button; observe combined behavior |
| Normal actions | Read and exercise needed custom interaction/reload/slot/map/heal/build bindings; mouse wheel/other buttons only if actually mapped |
| Release safety | Release all held keys/buttons on timeout, stop, disconnect, focus loss or exception; no indefinite stuck movement/fire |
| Timing and observation | Bounded action batches followed by screenshots/state; measure actual latency and reliability before claiming combat competence |
| Scope enforcement | Reject wrong tab/window/origin, stale target, forbidden keys/navigation and out-of-bounds coordinates; do not silently retarget another window |

An interface exposing only clicks or completed key presses may be insufficient for simultaneous movement/ADS/fire. Document exactly which controls pass rather than declaring all buttons supported. General assistant reasoning and screenshot round trips are not a guaranteed frame-rate combat loop, even if deterministic low-level inputs are available. Winning remains an eventual test objective, not promised performance.

## Restricted interface proposal — not built

If the official connected interface fails the control or containment requirements, a small supported local bridge could expose only `observe`, `aim`, configured key down/up, allowed mouse button down/up, bounded input batches and `releaseAll`. It would own one dedicated browser target, check identity/origin/focus before each command, limit durations, fail closed and release inputs on faults. It should expose no arbitrary shell, filesystem, URL navigation, script evaluation or general CDP command passthrough to the agent. Any temporary setup/Console work should occur as a separate user-controlled phase.

The bridge cannot guarantee containment if the same agent still has a separate unrestricted host/browser/guest tool. Enforce boundaries at the driver/OS/VM level, not in prompt text alone. No extension, local service, open debugging port or remote code-execution endpoint has been installed or exposed. Build only after the user chooses the isolation route and the available official tool surface is checked.

## Next decision

Choose the acceptable boundary first. If protecting the main PC is the priority, evaluate the VM setup before extending browser permissions. If literal one-tab-only operation is required, plan an explicitly restricted interface in addition to guest isolation. Read `local-browser-trial.md` for the first capability gate. User-installed software/permissions and all live input remain unverified; keep the existing targeted user-play fallback.
