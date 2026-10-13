// Authoring helper for new V58 branches: preserve existing comments/vendor bytes and annotate
// only missing adjacent blocks/functions using their helper ownership. Run the strict audit afterward.
const fs=require('fs'),{parse}=require('acorn');
const path=process.argv[2]||'src/brio.js',text=fs.readFileSync(path,'utf8'),comments=[];
const ast=parse(text,{ecmaVersion:'latest',onComment:comments}),edits=new Map;
const vendor=text.match(/^\(function\(e,t\)\{typeof exports/m)?.index,end=text.indexOf('\n',vendor);
const purpose={
 v55ReconEligible:'Exclude only the requested utility/throwable/vaulted entries from spread recon; retain other modifiers.',
 v55ReconTarget:'Use max(10, learned native clip size times3), without a hidden sequence or angle requirement.',
 v55ReconClip:'Track native loaded-ammo high-water marks and reopen completion if a fuller reload raises the target.',
 v55ReconCredit:'Credit one confirmed discharge once, separately from whether its angles can be sampled.',
 v55ReconRecord:'Bound short-lived primitive discharge records to32; never count user clicks as actual firing.',
 v55ReconNativeShot:'Use native shot markers or unchanged-gun ammo decreases; correlate duplicate evidence and exclude non-test weapons.',
 v55GunName:'Canonicalize the native AK variant only; preserve inventory gun identity.',
 v55ReconCell:'Create separate bounded confirmed-shot and angular-evidence aggregates.',
 v55ReconGun:'Admit only known gun keys into at most64 persistent entries; pool rarities.',
 v55ReconLoad:'Validate revision-scoped saved aggregates and recompute every checkmark; never trust saved flags.',
 v55ReconEvaluate:'Recompute clip-based recording completion; angle sampling remains independent.',
 v55ReconSave:'Persist dirty anonymous aggregates no more than once per5seconds, plus terminal/teardown flush.',
 v55ReconFinishGroup:'Commit one conservative pellet/discharge group to bounded evidence; do not inflate confidence per pellet.',
 v55ReconInput:'Observe native mouse transitions passively; never alter or synthesize input and invalidate blur state.',
 v55ReconMode:'Classify held right-click independently from recoil-mutated native art; retain blur/release boundaries.',
 v55ReconContext:'Read authoritative native inventory/ADS/ammo before renderer mutation; separate gun names from bullet families.',
 v55ReconReport:'Export anonymous persistent gun/mode aggregates and explicit estimation limits.',
 v55ReconShow:'Open the optional read-only checklist with native inventory art; no measurement arming action.',
 v55ReconChecklist:'Show shot targets separately from qualified angular evidence; require only applicable gun modes; preserve progress.',
 v55ReconBadgeState:'Report current recording acceptance, rejection and gun/mode completion above the local player.',
 v55Muzzle:'Compose up to6 native held/muzzle affine transforms into the already-rotated player root.',

  nativeResourcePath:"Normalize weakly held native resource paths only when the raw source changes; preserve resource identity.",
  v55DeferredNative:"Inspect up to32 empty-root constructions after native population, with80-node and epoch guards; no persistent hook.",
  v55PerfBegin:"Count scoped BRIO calls and time only one in64; bound phase/name rows and preserve native delegation.",
  v55PerfEnd:"Aggregate elapsed sampled BRIO cost into five fixed buckets; never retain per-frame samples.",
  v55Quiet:"Read the user-authorized temporary diagnostic pause; keep raw preferences and native packets unchanged.",
  v55ModsPaused:"Read the last comparison phase only; gameplay challenges/cosmetics remain effective.",
  v55Frame:"Measure visible reached-local draw cadence, excluding duplicate draws and separating long/menu gaps.",
  v55PerfReport:"Report bounded sampled costs/cadence and explicit attribution limits; nested callback rows overlap.",
  v55PerfFinish:"Restore temporary comparison behavior and record completion/cancellation without writing preferences.",
  v55PerfAdvance:"Advance each eight-second comparison phase only after the explicit click; restore on completion.",
  v55PerfStart:"Start or cancel an explicit24-second diagnostic/modifier comparison during a live native match.",
  v55PerfReset:"Disconnect the optional long-task observer and clear phase/aggregate state at native Play/destroy.",
  v55PrepareOutline:"Prepare at most one queued asset per500ms sampler tick; no alpha readback in native drawing.",
  v55PlayerPreflight:"Use unchanged pointer/pool-length checks before gating held replacements, direction arrows and new damage text.",
  v55InventoryRoot:"Validate six-slot ancestry and depth3 material icons; gate the complete native inventory including pickaxe/selection.",
  v55CalibrationStatus:"Show measured-sample readiness and temporary performance phase; never claim received scalar is a firing angle.",
  v55PacketValue:"Cache decoded native-field aliases per dictionary size; preserve original packet objects/values.",
  v55AngleDifference:"Compute signed modular radians directly from raw rotations, independent of atan2 summary anomalies.",
  v55AimObserve:"Retain fresh local server aim/scalar/stability/position with gun/rarity context; no authority changes.",
  v55ShotCompare:"Deduplicate owned projectiles, join native discharges and reject uncertain angles without erasing firing progress.",

  v55OutlineMask:'Cache bounded alpha silhouettes once per loaded asset; unreadable assets preserve rectangle fallback.',
  v55Outline:'Follow only visible native image transforms, with bounded subtree work and cached contour tints.',
  gateNativeDraw:'Gate reached own-instance native draws reversibly; preserve native state and delegate disabled calls.',
  reclaimNativeGates:'Restore disconnected native branches so historical particles cannot exhaust current capture capacity.',
  restoreNativeGate:'Restore only our own wrapper descriptor and release the retired instance reference.',
  v55Audit:'Report bounded reached/unobserved/suppressed native draw evidence without claiming pixel proof.',
  testSetup:'Apply or restore an explicit one-click test profile without erasing saved preferences or cosmetics.',
  modifierRows:'Group stable modifier IDs into sections of at least three, with remaining IDs in Miscellaneous.',
  renderChallengeTier:'Use one pressed-state button per level, while retaining saved tiers and effective Hell locks.',
  v55ShotCompare:'Deduplicate owned projectiles, join native discharges and reject uncertain angles without erasing firing progress.',
  renderIndicatorControls:'Persist validated indicator colors or loot choices; respect disabled/composite controls.',
  v55World:'Attach draw-only object health/ammo/projectile adapters; never change native health, collision or lifetime.',
  v55Player:'Gate held weapons/progress/damage text independently; render local spread and retained projectile history.',
  v55StatsObserve:'Read original decoded packets once, using bounded local counters; never guess damage attribution.',
  v55PostGame:'Replace only the native deathPass presentation after a terminal match event; preserve Play/spectate controls.',
  v55Indicators:'Use current targets, bounded DOM arrows and source-backed square zone geometry; suppress stale arrows.',
  v55Sample:'Sample bounded movement/weapon-time history; exclude teleports and finished matches.',
  v55Reset:'Clear per-match references and restore owned DOM changes at Play/destroy; retain saved choices.'
};
function walk(n,owner='V58 adapter',parent){
 if(!n?.type||n.start>=vendor&&n.end<=end)return;
 if(/Function/.test(n.type)){
  owner=n.id?.name||parent?.id?.name||owner;
  if(n.body.type!=='BlockStatement'&&!comments.some(c=>c.end<=n.start&&!text.slice(c.end,n.start).trim()&&n.start-c.end<8))edits.set(n.start,`/* BRIO expr V58: ${owner} — ${purpose[owner]||'Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending.'} */ `);
 }
 if(n.type==='BlockStatement'&&!comments.some(c=>c.start>n.start&&c.end<=(n.body[0]?.start??n.end-1)))edits.set(n.start+1,` /* BRIO block V58: ${owner} — ${purpose[owner]||'Keep this branch bounded and reversible under the enclosing helper. V58 live-pending; regression proof is separate.'} */ `);
 for(const [key,value]of Object.entries(n))if(!['start','end','loc'].includes(key)){
  if(Array.isArray(value))for(const child of value)walk(child,owner,n);
  else if(value?.type)walk(value,owner,n);
 }
}
walk(ast);let result=text;for(const [at,comment]of [...edits].sort((a,b)=>b[0]-a[0]))result=result.slice(0,at)+comment+result.slice(at);
fs.writeFileSync(path,result.replace(/[ \t]+$/gm,''));console.log('Annotated missing V58 blocks/functions:',edits.size);
