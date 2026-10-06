// Read-only AST analysis. Never execute the engine.
const fs = require('fs'), crypto = require('crypto'), {parse} = require('acorn');
const path = process.argv[2] || 'docs/engine.js';
const raw = fs.readFileSync(path, 'utf8'), ast = parse(raw, {ecmaVersion:'latest'});
const nodes = [], schema = new Map, dictionaryOwners = new Map;
function walk(n) {
  if (!n?.type) return; nodes.push(n);
  if (n.type === 'AssignmentExpression' && n.left.type === 'MemberExpression' && typeof n.right.value === 'string') {
    const owner = n.left.object.name, key = n.left.computed ? n.left.property.value : n.left.property.name;
    if (owner && typeof key === 'string') {const map = dictionaryOwners.get(owner) || new Map;map.set(key,n.right.value);dictionaryOwners.set(owner,map);}
  }
  for (const value of Object.values(n)) if (Array.isArray(value)) {for (const x of value) walk(x);} else if(value?.type) walk(value);
}
walk(ast);
for (const map of dictionaryOwners.values()) if ([...map.values()].includes('weaponSlots')) for (const pair of map) schema.set(...pair);
const property = n => n?.computed ? n.property.value : n?.property?.name;
const callbacks = [];
for (const n of nodes) if (n.type === 'CallExpression' && property(n.callee) === 'ÃEÅ' && ['player','chest','object','gun','ammo','airdrop'].includes(n.arguments[0]?.value)) {
  n.arguments.slice(1,5).forEach((f,i) => {
    if (!f || !['FunctionExpression','ArrowFunctionExpression'].includes(f.type)) return;
    const parameter = f.params[1]?.name;
    const fields = [...new Set(nodes.filter(x=>x.start>=f.start && x.end<=f.end && x.type==='MemberExpression' && x.object.name===parameter).map(property).filter(Boolean))];
    callbacks.push({kind:n.arguments[0].value,phase:['create','frame','update','remove'][i],start:f.start,end:f.end,characters:f.end-f.start,parameter,fields:fields.map(k=>({field:k,meaning:schema.get(k)||null})),contentsTerms:/contents|lootSeed|lootTable|isBot|isAI/.test(raw.slice(f.start,f.end))});
  });
}
const references = [];
for (const [field,meaning] of schema) if (/droid|wander|contents|seed|bot|npc|chestType/i.test(meaning)) references.push({field,meaning,references:nodes.filter(x=>x.type==='MemberExpression'&&property(x)===field).map(x=>({start:x.start,excerpt:raw.slice(Math.max(0,x.start-120),x.end+180)}))});
const assets = new Map;
for (const n of nodes) if(n.type==='Property'&&typeof n.value.value==='string'&&/buildart\//.test(n.value.value)) assets.set(n.key.value||n.key.name,n.value.value);
// V48 static evidence for the two newly requested warning resources and missing source dependencies.
const warningEvidence = {
  materialOrder:nodes.filter(n=>n.type==='ArrayExpression'&&n.elements.map(x=>x?.value).join(',')==='wood,brick,metal,gear').map(n=>({start:n.start,excerpt:raw.slice(n.start,n.end)})),
  scrapAsset:assets.get('gear'),
  chargeHud:nodes.filter(n=>n.type==='Literal'&&n.value==='grappler'&&raw.slice(Math.max(0,n.start-120),n.end+180).includes('áAæ')).map(n=>({start:n.start,excerpt:raw.slice(n.start-150,n.end+300)})),
  ammoKinds:nodes.filter(n=>n.type==='ObjectExpression'&&n.properties.some(p=>(p.key.value||p.key.name)==='grappler'&&p.value.value===5)&&n.properties.some(p=>(p.key.value||p.key.name)==='scar')).map(n=>n.properties.map(p=>({type:p.key.value||p.key.name,value:p.value.type==='Literal'?p.value.value:raw.slice(p.value.start,p.value.end)}))),
  remappingCalls:nodes.filter(n=>n.type==='CallExpression'&&n.callee.object?.name==='ãè'&&property(n.callee)==='éèé').map(n=>({start:n.start,excerpt:raw.slice(n.start-60,n.end+100)})),
  requestedSources:[{file:'scheme.js',location:'Sources > buildroyale.io > js',reason:'Resolve external ãè.éèé remapping applied immediately after msgpack.decode; inspect whether packed fields/indirection are being missed.'},{file:'msgpack.js',location:'Sources > buildroyale.io > js',reason:'Confirm actual decoder/extension behavior and nested decode route. Native original decode remains unchanged; do not independently decode or send.'}]
};
const summary={source:path,characters:raw.length,bytes:Buffer.byteLength(raw),sha256:crypto.createHash('sha256').update(raw).digest('hex'),parsedNodes:nodes.length,dictionaryFields:schema.size,warningEvidence,callbacks,references,inventoryAssets:[...assets].filter(([k])=>/^(scar|topscar|bolt|topbolt|heavy sniper|topheavy sniper|stack[0-4]|inventoryammo[0-4]|wood|brick|metal|gear)$/.test(k)),decoderCalls:nodes.filter(x=>x.type==='CallExpression'&&x.callee.object?.name==='msgpack'&&property(x.callee)==='decode').map(x=>({start:x.start,excerpt:raw.slice(x.start-100,x.end+250)})),limits:'Static client source only; does not establish complete incoming server schema or pre-open selection timing.'};
fs.writeFileSync(process.argv[3] || 'docs/v48-engine-analysis.json',JSON.stringify(summary,null,2)+'\n');
console.log(JSON.stringify({sha256:summary.sha256,nodes:summary.parsedNodes,fields:summary.dictionaryFields,callbacks:callbacks.length,references:references.map(x=>({meaning:x.meaning,count:x.references.length}))}));
