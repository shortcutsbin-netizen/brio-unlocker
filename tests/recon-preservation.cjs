// V56 presentation-only guard: no source/native engine evaluation. Recorder bytes stay V55-identical.
const fs=require('fs'),{parse}=require('acorn'),assert=require('node:assert/strict');
function declarations(path){const source=fs.readFileSync(path,'utf8'),ast=parse(source,{ecmaVersion:'latest'}),found=new Map;function walk(n){if(!n?.type)return;if(n.type==='VariableDeclarator'&&n.id?.name&&n.init)found.set(n.id.name,source.slice(n.init.start,n.init.end));for(const value of Object.values(n))if(Array.isArray(value))value.forEach(walk);else if(value?.type)walk(value);}walk(ast);return found;}
const old=declarations('versions/v55/brio.js'),current=declarations('src/brio.js');let helpers=0;
for(const [name,body]of old)if(/^v55(?:Recon|Shot|Aim|Packet|Angle)/.test(name)&&!['v55ReconShow','v55ReconChecklist'].includes(name)){assert.equal(current.get(name),body,name+' must preserve the confirmed V55 recorder');helpers++;}
for(const name of ['SPREAD_RECON_KEY','SPREAD_RECON_REVISION','SPREAD_GROUP_MS','SPREAD_EXCLUDED','GUN_TYPES'])assert.equal(current.get(name),old.get(name),name+' recording scope/persistence changed');
assert.equal(current.get('v55Reset'),old.get('v55Reset').replace('if(start&&v55.reconUi)v55.reconUi.hidden=true;',''),'only reset presentation visibility may change');
console.log('V56 recorder preservation passed:',helpers,'exact helper bodies, same scope/revision/storage/thresholds; only sidebar visibility changed at Play');
