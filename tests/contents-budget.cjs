// OUR bounded recorder only: prioritization does not enlarge total byte/time/network budgets.
const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict'),{parse}=require('acorn');
const source=fs.readFileSync('src/brio.js','utf8'),ast=parse(source,{ecmaVersion:'latest'}),names=['DEEP_LANES','v59LaneCaps','deepRecord','deepTick','replicaStateAudit'],found=new Map;
function walk(n){if(!n?.type)return;if(n.type==='VariableDeclarator'&&names.includes(n.id?.name))found.set(n.id.name,source.slice(n.init.start,n.init.end));for(const v of Object.values(n))if(Array.isArray(v))v.forEach(walk);else if(v?.type)walk(v);}walk(ast);assert.equal(found.size,names.length);
for(const focus of [false,true]){const deep={contentsFocus:focus,records:0,bytes:0,lanes:{},suppressed:{},truncations:0},ctx={deep,JSON,probeSnapshot:data=>({data,entries:1,truncated:false}),log(){}};vm.createContext(ctx);vm.runInContext(names.map(n=>'const '+n+'='+found.get(n)+';').join('\n')+'\nthis.record=deepRecord;this.caps=v59LaneCaps;',ctx);
 const caps=ctx.caps();assert.equal(caps.container,focus?1200:700);assert.equal(caps.player,focus?0:350);
 for(let i=0;i<caps.container;i++)assert(ctx.record('INCOMING TARGET PAYLOAD',{kind:'chest',value:i}));assert(!ctx.record('INCOMING TARGET PAYLOAD',{kind:'chest'}));
 if(focus){assert(!ctx.record('INCOMING TARGET PAYLOAD',{kind:'player'}));assert.equal(deep.lanes.player,undefined);assert.equal(deep.records,1200);}deep.records=1800;assert(!ctx.record('ENVIRONMENT TARGET FIELD',{}));deep.records=0;deep.bytes=8e6;assert(!ctx.record('ENVIRONMENT TARGET FIELD',{}));
}
console.log('Contents priority bounds passed:1200 focused/700 normal containers, no focused player records, original1800/8MB ceilings');

// Exercise actual focused replica work with200 players ahead of a chest; players must not fill identities/snapshot work.
for(const cap of [0,200]){
 let snapshots=0;const players=Array.from({length:200},(_,id)=>({id,type:'player'})),chest={id:999,type:'chest'};
 const deep={contentsFocus:true,until:100,restore:()=>{},windowScanned:true,records:0,bytes:0,lanes:{replica:cap},suppressed:{},truncations:0,identities:new Map,subtypes:new Map,replicas:new Map};
 const ctx={deep,JSON,performance:{now:()=>1},S:{destroyed:false,renderer:null,replicaAuditCount:0},v55PerfBegin(){},v55PerfEnd(){},v55Quiet:()=>false,collectPlayers:()=>players,collectWorld:()=>[chest],isPlayer:o=>o.type==='player',reconKind:o=>o.type,isLocal:()=>false,worldPos:()=>null,schemaFields:new Map,replicaAuditSeen:new WeakSet,probeSnapshot:data=>{snapshots++;return {data,entries:1,truncated:false};},log(){}};
 vm.createContext(ctx);vm.runInContext(names.map(n=>'const '+n+'='+found.get(n)+';').join('\n')+'\nthis.tick=deepTick;this.audit=replicaStateAudit;',ctx);
 ctx.tick();assert.equal(snapshots,cap?0:2);assert.equal(deep.replicas.size,cap?0:1);assert.equal(deep.identities.size,1);
 for(const player of players)ctx.audit(player);assert.equal(ctx.S.replicaAuditCount,0,'focused shallow audit must reserve all80 identities for containers');
}
console.log('Focused replica actual paths passed:200 players cannot starve chest/map/audit; focused200 cap prevents snapshot work');
