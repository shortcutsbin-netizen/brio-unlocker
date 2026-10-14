// V60 changes drawing only; preserve V60 firing/storage/angle contracts.
const fs=require('fs'),{parse,tokenizer}=require('acorn'),assert=require('node:assert/strict');
function declarations(path){const source=fs.readFileSync(path,'utf8'),ast=parse(source,{ecmaVersion:'latest'}),found=new Map;function walk(n){if(!n?.type)return;if(n.type==='VariableDeclarator'&&n.id?.name&&n.init)found.set(n.id.name,source.slice(n.init.start,n.init.end));for(const value of Object.values(n))if(Array.isArray(value))value.forEach(walk);else if(value?.type)walk(value);}walk(ast);return found;}
function tokens(source){return [...tokenizer(source,{ecmaVersion:'latest'})].map(t=>[t.type.label,t.value]);}
const old=declarations('versions/v60/brio.js'),current=declarations('src/brio.js');let helpers=0;
const changed=new Set(['v55ReconShow','v55ReconChecklist','v55ReconMode','v55ReconReport','v55ReconBadgeState','v55ShotCompare','v55ReconFinishGroup']);
for(const [name,body]of old)if(/^v55(?:Recon|Shot|Aim|Packet|Angle)/.test(name)&&!changed.has(name)&&name!=='v55ReconInput'){assert.deepEqual(tokens(current.get(name)),tokens(body),name+' must preserve confirmed firing/evidence/storage behavior');helpers++;}
for(const name of ['SPREAD_RECON_KEY','SPREAD_RECON_REVISION','SPREAD_GROUP_MS','SPREAD_EXCLUDED','GUN_TYPES'])assert.deepEqual(tokens(current.get(name)),tokens(old.get(name)),name+' scope/persistence changed');
for(const name of ['v55ShotCompare','v55ReconFinishGroup','v55Reset','v55ReconMode','v57SingleSpread','v57SpreadReady','v57AngleTarget'])assert.deepEqual(tokens(current.get(name).replace('v61SpreadView.pointer=null;v61SpreadView.root=null;v61SpreadView.checks=0;','')),tokens(old.get(name)),name+' recording contract cannot change');
console.log('V61 preservation passed:',helpers,'unchanged recorder helpers; firing/storage/scope/targets and angular freshness/stability/alignment/ambiguity/deduplication preserved');

assert.deepEqual(tokens(current.get('v55ReconInput').replace('v61Pointer(e);','')),tokens(old.get('v55ReconInput')),'only passive pointer observation added; firing logic unchanged');
