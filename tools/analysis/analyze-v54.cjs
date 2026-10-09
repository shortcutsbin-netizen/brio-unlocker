// V54 source-only mechanics audit. Parse engine data/coordinates; never evaluate native engine code.
// This derivative contains no player identities, timestamps, packets, or source excerpts.
const fs=require('fs'),crypto=require('crypto'),{parse}=require('acorn');
const input='docs/game-sources/engine.js',bytes=fs.readFileSync(input),source=bytes.toString('utf8'),ast=parse(source,{ecmaVersion:'latest'}),fields=[],steadyWrites=[],callbacks=[];
const relevant=new Set(['steadying','wAmmo','selectedWeapon','weaponSlots','bulletType','pi','spread']);
function walk(n){
 if(!n?.type)return;
 if(n.type==='AssignmentExpression'&&n.left?.type==='MemberExpression'){
  const key=n.left.computed?n.left.property.value:n.left.property.name;
  if(n.right.type==='Literal'&&relevant.has(n.right.value))fields.push({nativeKey:key,meaning:n.right.value,start:n.start,end:n.end});
  if(key==='ée')steadyWrites.push({owner:n.left.object.name||null,valueType:n.right.type,start:n.start,end:n.end});
 }
 if(n.type==='CallExpression'&&['player','bullet'].includes(n.arguments[0]?.value))n.arguments.forEach((a,i)=>{if(a.type==='FunctionExpression')callbacks.push({kind:n.arguments[0].value,argument:i,start:a.start,end:a.end});});
 for(const v of Object.values(n))if(Array.isArray(v))v.forEach(walk);else if(v?.type)walk(v);
}
walk(ast);
const report={date:'2026-10-09',source:{input,bytes:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex')},fields,steadyWrites,callbacks,
 findings:{ads:'Original decoded steadying is authoritative; native updates can temporarily force renderer steadying true during hip-fire recoil. Observe the original decode result before native mutation and check held right-click, not camera/art state.',identity:'Inventory gun type is the recon key; native bulletType can be a shared projectile family such as sniper. Slot/context stability is required; rarities are pooled with secondary counts.',muzzle:'Native flash is a child of held weapon, hand and physical containers. Compose native ancestry into the already-rotated local root; do not use a player-centered600-unit sector.',lifetime:'Heavy diagnostics retain15-minute and existing lane caps; lean anonymous shot/counter observation continues through native match end, then restores decoder identity.'},
 estimation:{groupsPerMode:100,minimumSequences:8,groupWindowMs:35,stabilityWindows:[50,50],toleranceDegrees:'max(0.6, 10% of the larger window maximum)',rarities:'one gun-type surface; secondary counts only',theory:{model:'IID absolute-offset maximum, fixed distribution',oneSidedConfidenceFormula:'1-p^n',coverageAt95ConfidenceFor100:Math.pow(.05,1/100),samplesFor99CoverageAt95Confidence:Math.ceil(Math.log(.05)/Math.log(.99)),inference:'Mathematical motivation only. Bloom, motion, filtering and grouped/correlated pellets violate IID; completion is an empirical stability milestone, not a guaranteed server maximum.'},reference:'https://www.itl.nist.gov/div898/handbook/prc/section2/prc264.htm'},
 publicationScope:'source coordinates, anonymous mechanism summaries, own mathematical design; no raw log derivative'};
fs.mkdirSync('docs/analysis/engine',{recursive:true});fs.writeFileSync('docs/analysis/engine/v54-spread-mechanics.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({sourceBytes:bytes.length,fields:fields.length,steadyWrites:steadyWrites.length,callbacks:callbacks.length,groupsPerMode:100}));
