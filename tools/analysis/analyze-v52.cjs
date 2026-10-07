// Read-only chronological analysis of the entire V51 export and exact supplied engine bytes.
// No game code, log text, source snippets or fetched modules are evaluated.
const fs=require('fs'),crypto=require('crypto');
const input=process.argv[2]||'logs/runs/v51-log.txt',bytes=fs.readFileSync(input),events=[];
for(const line of bytes.toString('utf8').split(/\r?\n/)){
 const m=line.match(/^\[([^\]]+)\] (.*?) (?=[{\[])(.*)$/);if(!m)continue;
 try{events.push({time:m[1],label:m[2],data:JSON.parse(m[3])});}catch{}
}
const runs=[];let run;
for(const e of events){
 if(e.label==='MATCH STATE RESET'){run={epoch:e.data.epoch,time:e.time,settings:null,gateCaps:[],branches:{},lastBranchCoverage:null,spread:[],terminal:null,probe:null,hud:null,firstWaitingTarget:null};runs.push(run);}
 if(!run)continue;
 if(e.label==='TEST SETTINGS AT PLAY')run.settings=e.data;
 if(e.label==='NATIVE VISUAL GATE CAP')run.gateCaps.push({time:e.time,...e.data});
 if(e.label==='NATIVE VISUAL BRANCH')run.branches[e.data.category]={time:e.time,...e.data};
 if(e.label==='CHALLENGE BRANCH COVERAGE')run.lastBranchCoverage=e.data;
 if(e.label==='V51 SPREAD CALIBRATION')run.spread.push(e.data);
 if(e.label==='V51 POSTGAME COUNTERS')run.terminal=e.data;
 if(e.label==='V51 PROBE COVERAGE')run.probe=e.data;
 if(e.label==='NATIVE HUD CAPTURE STATUS')run.hud=e.data;
 if(e.label==='INCOMING SCHEMA FIRST'){
  const p=(e.data.data||e.data).packet;if(p?.t==='circle'&&p.state==='waiting'&&!run.firstWaitingTarget)run.firstWaitingTarget=p;
 }
}
const hash=b=>crypto.createHash('sha256').update(b).digest('hex'),engine=fs.readFileSync('docs/game-sources/engine.js'),text=engine.toString('utf8');
const chunks=events.filter(e=>e.label==='FULL NATIVE SOURCE CHUNK').map(e=>e.data).sort((a,b)=>a.index-b.index),recovered=chunks.map(c=>c.text).join('');
// Parse actual literal values, including escaped/obfuscated source spellings, without executing the bundle.
const {parse}=require('acorn'),ast=parse(text,{ecmaVersion:'latest'}),callbacks=[];
function walk(n){if(!n?.type)return;if(n.type==='CallExpression'&&['circle','announcement','feed','elim','death','gun','ammo','object','bullet'].includes(n.arguments[0]?.value)){const f=n.arguments[1];if(f?.type==='FunctionExpression')callbacks.push({kind:n.arguments[0].value,start:f.start,end:f.end,characters:f.end-f.start,text:text.slice(f.start,Math.min(f.end,f.start+5000)),excerptLimited:f.end-f.start>5000});}for(const value of Object.values(n)){if(Array.isArray(value))for(const x of value)walk(x);else if(value?.type)walk(value);}}
walk(ast);const circle=callbacks.find(c=>c.kind==='circle');
const summary={input,bytes:bytes.length,sha256:hash(bytes),events:events.length,runs,
 source:{bytes:engine.length,sha256:hash(engine),chunks:chunks.length,recoveredMatches:Buffer.from(recovered).equals(engine),circleCallback:circle,callbacks},
 findings:{gateCapacity:'Both Play epochs hit4096 cumulative instances. Hell has3612 trail-particle installations, but no placedBuild/fullMap/complete inventoryHud. Capacity starvation is supported; not every visible leak can be attributed to it.',
  storm:'Native waiting/lobby circle writes projected âÊ; moving circle updates current áÊ/EÃÊ and does not move projected âÊ. V51 incorrectly used every circle packet as a destination.',
  spread:'Client local aim -atan2(dx,dy)+PI/2 establishes positive-X forward; V51 positive-Y cone was rotated90degrees. Spread/100 is reticle scalar, not proven server half-angle units. Routine local rotation fields were omitted from capped/changed-field exports, so V51 cannot establish an accurate empirical bound.',
  hud:'Hell captured only inventory units, not complete inventory root; native empty slots/pickaxe/build bindings/lift rectangle are siblings. No map must now hide whole timer/player/kill holder. Own ammo HUD is outside inventory root, above health rows.',
  recon:'No authoritative unopened-container contents or bot classifier found in existing observed routes. Private/capped/missing evidence cannot establish impossibility.',
  observation:'User skipped Match B. Build/object outline presentation and basic postgame stats were positively observed. Other unmentioned or skipped surfaces remain live-pending.'}};
fs.writeFileSync('docs/analysis/runs/v52-v51-focused-analysis.json',JSON.stringify(summary,null,2)+'\n');
console.log(JSON.stringify({bytes:summary.bytes,sha256:summary.sha256,events:summary.events,sourceMatches:summary.source.recoveredMatches,runs:runs.map(r=>({epoch:r.epoch,gateCaps:r.gateCaps.length,adapterInstances:r.lastBranchCoverage?.adapterInstances,trailInstallations:r.lastBranchCoverage?.installed?.trailParticles,placedBuild:r.lastBranchCoverage?.installed?.placedBuild||0,terminal:r.terminal?.terminal,probeRecords:r.probe?.records}))}));
