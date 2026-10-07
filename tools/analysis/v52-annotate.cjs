// Authoring helper for new V52 branches: preserve existing comments/vendor bytes and annotate
// only missing adjacent blocks/functions using their helper ownership. Run the strict audit afterward.
const fs=require('fs'),{parse}=require('acorn');
const path=process.argv[2]||'src/brio.js',text=fs.readFileSync(path,'utf8'),comments=[];
const ast=parse(text,{ecmaVersion:'latest',onComment:comments}),edits=new Map;
const vendor=text.match(/^\(function\(e,t\)\{typeof exports/m)?.index,end=text.indexOf('\n',vendor);
const purpose={
  v52OutlineMask:'Cache bounded alpha silhouettes once per loaded asset; unreadable assets preserve rectangle fallback.',
  v52Outline:'Follow only visible native image transforms, with bounded subtree work and cached contour tints.',
  gateNativeDraw:'Gate reached own-instance native draws reversibly; preserve native state and delegate disabled calls.',
  reclaimNativeGates:'Restore disconnected native branches so historical particles cannot exhaust current capture capacity.',
  restoreNativeGate:'Restore only our own wrapper descriptor and release the retired instance reference.',
  v52Audit:'Report bounded reached/unobserved/suppressed native draw evidence without claiming pixel proof.',
  testSetup:'Apply or restore an explicit one-click test profile without erasing saved preferences or cosmetics.',
  modifierRows:'Group stable modifier IDs into sections of at least three, with remaining IDs in Miscellaneous.',
  renderChallengeTier:'Use one pressed-state button per level, while retaining saved tiers and effective Hell locks.',
  v52ShotCompare:'Read native shot/aim angles into bounded calibration summaries; never send or fit gameplay state.',
  renderIndicatorControls:'Persist validated indicator colors or loot choices; respect disabled/composite controls.',
  v52World:'Attach draw-only object health/ammo/projectile adapters; never change native health, collision or lifetime.',
  v52Player:'Gate held weapons/progress/damage text independently; render local spread and retained projectile history.',
  v52StatsObserve:'Read original decoded packets once, using bounded local counters; never guess damage attribution.',
  v52PostGame:'Replace only the native deathPass presentation after a terminal match event; preserve Play/spectate controls.',
  v52Indicators:'Use current targets, bounded DOM arrows and source-backed square zone geometry; suppress stale arrows.',
  v52Sample:'Sample bounded movement/weapon-time history; exclude teleports and finished matches.',
  v52Reset:'Clear per-match references and restore owned DOM changes at Play/destroy; retain saved choices.'
};
function walk(n,owner='V52 adapter',parent){
 if(!n?.type||n.start>=vendor&&n.end<=end)return;
 if(/Function/.test(n.type)){
  owner=n.id?.name||parent?.id?.name||owner;
  if(n.body.type!=='BlockStatement'&&!comments.some(c=>c.end<=n.start&&!text.slice(c.end,n.start).trim()&&n.start-c.end<8))edits.set(n.start,`/* BRIO expr V52: ${owner} — ${purpose[owner]||'Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending.'} */ `);
 }
 if(n.type==='BlockStatement'&&!comments.some(c=>c.start>n.start&&c.end<=(n.body[0]?.start??n.end-1)))edits.set(n.start+1,` /* BRIO block V52: ${owner} — ${purpose[owner]||'Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate.'} */ `);
 for(const [key,value]of Object.entries(n))if(!['start','end','loc'].includes(key)){
  if(Array.isArray(value))for(const child of value)walk(child,owner,n);
  else if(value?.type)walk(value,owner,n);
 }
}
walk(ast);let result=text;for(const [at,comment]of [...edits].sort((a,b)=>b[0]-a[0]))result=result.slice(0,at)+comment+result.slice(at);
fs.writeFileSync(path,result.replace(/[ \t]+$/gm,''));console.log('Annotated missing V52 blocks/functions:',edits.size);
