// V58 explicitly changes mode exceptions and angular filtering, preserving firing and storage contracts.
const fs=require('fs'),{parse,tokenizer}=require('acorn'),assert=require('node:assert/strict');
function declarations(path){const source=fs.readFileSync(path,'utf8'),ast=parse(source,{ecmaVersion:'latest'}),found=new Map;function walk(n){if(!n?.type)return;if(n.type==='VariableDeclarator'&&n.id?.name&&n.init)found.set(n.id.name,source.slice(n.init.start,n.init.end));for(const value of Object.values(n))if(Array.isArray(value))value.forEach(walk);else if(value?.type)walk(value);}walk(ast);return found;}
function tokens(source){return [...tokenizer(source,{ecmaVersion:'latest'})].map(t=>[t.type.label,t.value]);}
const old=declarations('versions/v57/brio.js'),current=declarations('src/brio.js');let helpers=0;
const changed=new Set(['v55ReconShow','v55ReconChecklist','v55ReconMode','v55ReconReport','v55ReconBadgeState','v55ShotCompare','v55ReconFinishGroup']);
for(const [name,body]of old)if(/^v55(?:Recon|Shot|Aim|Packet|Angle)/.test(name)&&!changed.has(name)){assert.deepEqual(tokens(current.get(name)),tokens(body),name+' must preserve confirmed firing/evidence/storage behavior');helpers++;}
for(const name of ['SPREAD_RECON_KEY','SPREAD_RECON_REVISION','SPREAD_GROUP_MS','SPREAD_EXCLUDED','GUN_TYPES'])assert.deepEqual(tokens(current.get(name)),tokens(old.get(name)),name+' scope/persistence changed');
const expectedShot=old.get('v55ShotCompare').replace('if(cell)cell.rejected[reason]', 'group.rejectionReason=reason;if(cell)cell.rejected[reason]').replace('        let reason=null;',"        group.quality={aimAgeMs:server?now-server.at:null,aimStableMs:server?now-server.stableSince:null,gunStableMs:now-context.stableSince,inputStableMs:now-input.at,aimMismatchDegrees:server&&Number.isFinite(r['â']?.A)?Math.abs(v55AngleDifference(r['â'].A,server.angle))*180/Math.PI:null,scalar:server?.spread??null};\n        let reason=null;");
assert.deepEqual(tokens(current.get('v55ShotCompare')),tokens(expectedShot),'angle quality/credit gates cannot change');
const expectedFinish=old.get('v55ReconFinishGroup').replace('cell.projectiles+=g.projectiles;', 'cell.projectiles+=g.projectiles;v58AngleFeedback(g,cell);');
assert.deepEqual(tokens(current.get('v55ReconFinishGroup')),tokens(expectedFinish),'only primitive feedback may be added to group finalization');
for(const name of ['v55Reset','v55ReconMode','v57SingleSpread','v57SpreadReady','v57AngleTarget'])assert.deepEqual(tokens(current.get(name)),tokens(old.get(name)),name+' cannot change');
console.log('V58 preservation passed:',helpers,'unchanged recorder helpers; firing/storage/scope/targets and angular freshness/stability/alignment/ambiguity/deduplication preserved');
