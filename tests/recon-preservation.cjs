// V57 explicitly changes mode exceptions and angular filtering, preserving firing and storage contracts.
const fs=require('fs'),{parse,tokenizer}=require('acorn'),assert=require('node:assert/strict');
function declarations(path){const source=fs.readFileSync(path,'utf8'),ast=parse(source,{ecmaVersion:'latest'}),found=new Map;function walk(n){if(!n?.type)return;if(n.type==='VariableDeclarator'&&n.id?.name&&n.init)found.set(n.id.name,source.slice(n.init.start,n.init.end));for(const value of Object.values(n))if(Array.isArray(value))value.forEach(walk);else if(value?.type)walk(value);}walk(ast);return found;}
function tokens(source){return [...tokenizer(source,{ecmaVersion:'latest'})].map(t=>[t.type.label,t.value]);}
const old=declarations('versions/v56/brio.js'),current=declarations('src/brio.js');let helpers=0;
const changed=new Set(['v55ReconShow','v55ReconChecklist','v55ReconMode','v55ReconReport','v55ReconBadgeState','v55ShotCompare']);
for(const [name,body]of old)if(/^v55(?:Recon|Shot|Aim|Packet|Angle)/.test(name)&&!changed.has(name)){assert.deepEqual(tokens(current.get(name)),tokens(body),name+' must preserve confirmed firing/evidence/storage behavior');helpers++;}
for(const name of ['SPREAD_RECON_KEY','SPREAD_RECON_REVISION','SPREAD_GROUP_MS','SPREAD_EXCLUDED','GUN_TYPES'])assert.deepEqual(tokens(current.get(name)),tokens(old.get(name)),name+' scope/persistence changed');
const expectedShot=old.get('v55ShotCompare').replace("else if(now-input.at<100)reason='ADS transition';else if(typeof v55.stats.nativeSteadying==='boolean'&&v55.stats.nativeSteadying!==input.right)reason='native ADS acknowledgement differs';","else if(!v57SingleSpread(weapon)&&now-input.at<100)reason='ADS transition';");
assert.deepEqual(tokens(current.get('v55ShotCompare')),tokens(expectedShot),'only recoil acknowledgement and exception transition angular filter changes are allowed');
const expectedReset=old.get('v55Reset').replace("if(S.safeZoneUi)S.safeZoneUi.style.display='none';","if(S.safeZoneUi)S.safeZoneUi.style.display='none';if(S.stormCenterUi)S.stormCenterUi.style.display='none';");
assert.deepEqual(tokens(current.get('v55Reset')),tokens(expectedReset),'only center UI hiding changes at reset');
console.log('V57 preservation passed:',helpers,'unchanged recorder helpers; firing/storage/scope/targets and angular freshness/stability/alignment/ambiguity/deduplication preserved');
