// Work-bound regression and reproducible CPU comparison, using OUR readable draw-gate helpers only.
// Native source is never evaluated. Timing is a synthetic local benchmark, not live FPS/ping proof.
const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict'),{parse}=require('acorn'),{performance}=require('node:perf_hooks');
function helpers(file,names){const source=fs.readFileSync(file,'utf8'),ast=parse(source,{ecmaVersion:'latest'}),found=new Map;function walk(n,p){if(!n?.type)return;const key=p?.id?.name;if(/Function/.test(n.type)&&names.includes(key))found.set(key,source.slice(n.start,n.end));for(const v of Object.values(n))if(Array.isArray(v))v.forEach(x=>walk(x,n));else if(v?.type)walk(v,n);}walk(ast);assert.equal(found.size,names.length);return names.map(n=>'const '+n+'='+found.get(n)+';').join('\n');}
function measure(file,current){const names=['gateAnchor','restoreNativeGate','reclaimNativeGates','gateNativeDraw'],functions=helpers(file,names);const ctx={performance,Map,WeakMap,Set,Object,Reflect,Array,String,console,S:{},v53:{perf:{retirementVisits:0}},v52:{},nativeDrawGates:new Map,nativeCandidateCache:new WeakMap,nativeVisualCoverage:new Map,nativeVisualSuppressed:new Map,gateInsertions:0,gateRetirementCursor:null,log(){},hudPath:()=>'',exFast:()=>({}),v53PerfBegin:()=>null,v53PerfEnd(){}};vm.createContext(ctx);vm.runInContext(functions+'\nthis.gate=gateNativeDraw;',ctx);
 const root={âè:[],ÉE:[]},native=function(){return 'native'};let membershipChecks=0;root.âè.includes=function(n){membershipChecks++;return Array.prototype.includes.call(this,n)};
 // Prepopulate4096 stable native branches. This isolates overflow admission cost, not setup/source parsing.
 for(let i=0;i<4096;i++){const node={parent:root,éa:native};root.âè.push(node);ctx.nativeDrawGates.set(node,{anchor:root,original:native,descriptor:undefined,wrapper:native,gates:new Map});}
 const start=performance.now();for(let i=0;i<64;i++){const node={parent:root,éa:native};ctx.gate(node,'trailParticles',()=>false);}const ms=performance.now()-start;
 assert.equal(ctx.nativeDrawGates.size,4096);assert(ctx.S.visualGateCap);if(current){assert.equal(membershipChecks,0);assert.equal(ctx.v53.perf.retirementVisits,0,'overflow must not cause a map sweep for every rejected node');
  ctx.gateInsertions=255;ctx.gate({parent:root,éa:native},'trailParticles',()=>false);assert(ctx.v53.perf.retirementVisits<=256,'each pass has a fixed visit budget');
 }
 return {file,attempts:64,activeNodes:4096,membershipChecks,retirementVisits:current?ctx.v53.perf.retirementVisits:null,overflowAdmissionMs:ms};
}
const baseline=measure('versions/v52/brio.js',false),current=measure('src/brio.js',true);assert(baseline.membershipChecks>=4096*64);
const report={date:'2026-10-09',baseline,current,assertions:'fixed visit budget; no full sweep on every rejected high-occupancy node; native branch count preserved',limits:'single synthetic Node run; elapsed values depend on machine and do not prove live-game latency'};
fs.mkdirSync('docs/audits',{recursive:true});if(process.argv.includes('--record'))fs.writeFileSync('docs/audits/v53-performance-benchmark.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report));
