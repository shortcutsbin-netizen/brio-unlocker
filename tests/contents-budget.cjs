// OUR bounded recorder only: prioritization does not enlarge total byte/time/network budgets.
const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict'),{parse}=require('acorn');
const source=fs.readFileSync('src/brio.js','utf8'),ast=parse(source,{ecmaVersion:'latest'}),names=['DEEP_LANES','v59LaneCaps','deepRecord'],found=new Map;
function walk(n){if(!n?.type)return;if(n.type==='VariableDeclarator'&&names.includes(n.id?.name))found.set(n.id.name,source.slice(n.init.start,n.init.end));for(const v of Object.values(n))if(Array.isArray(v))v.forEach(walk);else if(v?.type)walk(v);}walk(ast);assert.equal(found.size,3);
for(const focus of [false,true]){const deep={contentsFocus:focus,records:0,bytes:0,lanes:{},suppressed:{},truncations:0},ctx={deep,JSON,probeSnapshot:data=>({data,entries:1,truncated:false}),log(){}};vm.createContext(ctx);vm.runInContext(names.map(n=>'const '+n+'='+found.get(n)+';').join('\n')+'\nthis.record=deepRecord;this.caps=v59LaneCaps;',ctx);
 const caps=ctx.caps();assert.equal(caps.container,focus?1200:700);assert.equal(caps.player,focus?0:350);
 for(let i=0;i<caps.container;i++)assert(ctx.record('INCOMING TARGET PAYLOAD',{kind:'chest',value:i}));assert(!ctx.record('INCOMING TARGET PAYLOAD',{kind:'chest'}));
 if(focus){assert(!ctx.record('INCOMING TARGET PAYLOAD',{kind:'player'}));assert.equal(deep.lanes.player,undefined);assert.equal(deep.records,1200);}deep.records=1800;assert(!ctx.record('ENVIRONMENT TARGET FIELD',{}));deep.records=0;deep.bytes=8e6;assert(!ctx.record('ENVIRONMENT TARGET FIELD',{}));
}
console.log('Contents priority bounds passed:1200 focused/700 normal containers, no focused player records, original1800/8MB ceilings');
