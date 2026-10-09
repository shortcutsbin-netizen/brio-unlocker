// Authoring helper for new V53 branches: preserve existing comments/vendor bytes and annotate
// only missing adjacent blocks/functions using their helper ownership. Run the strict audit afterward.
const fs=require('fs'),{parse}=require('acorn');
const path=process.argv[2]||'src/brio.js',text=fs.readFileSync(path,'utf8'),comments=[];
const ast=parse(text,{ecmaVersion:'latest',onComment:comments}),edits=new Map;
const vendor=text.match(/^\(function\(e,t\)\{typeof exports/m)?.index,end=text.indexOf('\n',vendor);
const purpose={
  nativeResourcePath:"Normalize weakly held native resource paths only when the raw source changes; preserve resource identity.",
  v53DeferredNative:"Inspect up to32 empty-root constructions after native population, with80-node and epoch guards; no persistent hook.",
  v53PerfBegin:"Count scoped BRIO calls and time only one in64; bound phase/name rows and preserve native delegation.",
  v53PerfEnd:"Aggregate elapsed sampled BRIO cost into five fixed buckets; never retain per-frame samples.",
  v53Quiet:"Read the user-authorized temporary diagnostic pause; keep raw preferences and native packets unchanged.",
  v53ModsPaused:"Read the last comparison phase only; gameplay challenges/cosmetics remain effective.",
  v53Frame:"Measure visible reached-local draw cadence, excluding duplicate draws and separating long/menu gaps.",
  v53PerfReport:"Report bounded sampled costs/cadence and explicit attribution limits; nested callback rows overlap.",
  v53PerfFinish:"Restore temporary comparison behavior and record completion/cancellation without writing preferences.",
  v53PerfAdvance:"Advance each eight-second comparison phase only after the explicit click; restore on completion.",
  v53PerfStart:"Start or cancel an explicit24-second diagnostic/modifier comparison during a live native match.",
  v53PerfReset:"Disconnect the optional long-task observer and clear phase/aggregate state at native Play/destroy.",
  v53PrepareOutline:"Prepare at most one queued asset per500ms sampler tick; no alpha readback in native drawing.",
  v53PlayerPreflight:"Use unchanged pointer/pool-length checks before gating held replacements, direction arrows and new damage text.",
  v53InventoryRoot:"Validate six-slot ancestry and depth3 material icons; gate the complete native inventory including pickaxe/selection.",
  v53CalibrationStatus:"Show measured-sample readiness and temporary performance phase; never claim received scalar is a firing angle.",
  v53PacketValue:"Cache decoded native-field aliases per dictionary size; preserve original packet objects/values.",
  v53AngleDifference:"Compute signed modular radians directly from raw rotations, independent of atan2 summary anomalies.",
  v53AimObserve:"Retain fresh local server aim/scalar/stability/position with gun/rarity context; no authority changes.",
  v53ShotCompare:"Reject stale/moving/switching samples; aggregate observed projectile angles by gun/rarity/scalar without maximum claims.",

  v53OutlineMask:'Cache bounded alpha silhouettes once per loaded asset; unreadable assets preserve rectangle fallback.',
  v53Outline:'Follow only visible native image transforms, with bounded subtree work and cached contour tints.',
  gateNativeDraw:'Gate reached own-instance native draws reversibly; preserve native state and delegate disabled calls.',
  reclaimNativeGates:'Restore disconnected native branches so historical particles cannot exhaust current capture capacity.',
  restoreNativeGate:'Restore only our own wrapper descriptor and release the retired instance reference.',
  v53Audit:'Report bounded reached/unobserved/suppressed native draw evidence without claiming pixel proof.',
  testSetup:'Apply or restore an explicit one-click test profile without erasing saved preferences or cosmetics.',
  modifierRows:'Group stable modifier IDs into sections of at least three, with remaining IDs in Miscellaneous.',
  renderChallengeTier:'Use one pressed-state button per level, while retaining saved tiers and effective Hell locks.',
  v53ShotCompare:'Reject stale/moving/switching samples; retain observed gun/rarity/scalar angles without server-bound claims.',
  renderIndicatorControls:'Persist validated indicator colors or loot choices; respect disabled/composite controls.',
  v53World:'Attach draw-only object health/ammo/projectile adapters; never change native health, collision or lifetime.',
  v53Player:'Gate held weapons/progress/damage text independently; render local spread and retained projectile history.',
  v53StatsObserve:'Read original decoded packets once, using bounded local counters; never guess damage attribution.',
  v53PostGame:'Replace only the native deathPass presentation after a terminal match event; preserve Play/spectate controls.',
  v53Indicators:'Use current targets, bounded DOM arrows and source-backed square zone geometry; suppress stale arrows.',
  v53Sample:'Sample bounded movement/weapon-time history; exclude teleports and finished matches.',
  v53Reset:'Clear per-match references and restore owned DOM changes at Play/destroy; retain saved choices.'
};
function walk(n,owner='V53 adapter',parent){
 if(!n?.type||n.start>=vendor&&n.end<=end)return;
 if(/Function/.test(n.type)){
  owner=n.id?.name||parent?.id?.name||owner;
  if(n.body.type!=='BlockStatement'&&!comments.some(c=>c.end<=n.start&&!text.slice(c.end,n.start).trim()&&n.start-c.end<8))edits.set(n.start,`/* BRIO expr V53: ${owner} — ${purpose[owner]||'Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending.'} */ `);
 }
 if(n.type==='BlockStatement'&&!comments.some(c=>c.start>n.start&&c.end<=(n.body[0]?.start??n.end-1)))edits.set(n.start+1,` /* BRIO block V53: ${owner} — ${purpose[owner]||'Keep this branch bounded and reversible under the enclosing helper. V53 live-pending; regression proof is separate.'} */ `);
 for(const [key,value]of Object.entries(n))if(!['start','end','loc'].includes(key)){
  if(Array.isArray(value))for(const child of value)walk(child,owner,n);
  else if(value?.type)walk(value,owner,n);
 }
}
walk(ast);let result=text;for(const [at,comment]of [...edits].sort((a,b)=>b[0]-a[0]))result=result.slice(0,at)+comment+result.slice(at);
fs.writeFileSync(path,result.replace(/[ \t]+$/gm,''));console.log('Annotated missing V53 blocks/functions:',edits.size);
