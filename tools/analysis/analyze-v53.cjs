// V53 read-only evidence: parse every chronological JSON event and actual engine literals, never evaluate native code.
const fs=require('fs'),crypto=require('crypto'),{parse}=require('acorn');
const input=process.argv[2]||'logs/runs/v52-log.txt',bytes=fs.readFileSync(input),events=[];
for(const line of bytes.toString('utf8').split(/\r?\n/)){const m=line.match(/^\[([^\]]+)\] (.*?) (?=[{\[])(.*)$/);if(!m)continue;try{events.push({time:m[1],label:m[2],data:JSON.parse(m[3])});}catch{}}
const hash=b=>crypto.createHash('sha256').update(b).digest('hex'),counts={},runs=[];let run;
for(const e of events){counts[e.label]=(counts[e.label]||0)+1;if(e.label==='MATCH STATE RESET'){run={epoch:e.data.epoch,start:e.time,settings:null,audits:[],caps:[],terminal:null,probe:null};runs.push(run);}if(!run)continue;
 if(e.label==='TEST SETTINGS AT PLAY')run.settings={profile:e.data.profile,effective:e.data.allSelected};
 if(e.label==='CHALLENGE BRANCH COVERAGE')run.audits.push({time:e.time,...e.data});
 if(e.label==='NATIVE VISUAL GATE CAP')run.caps.push(e.data);
 if(e.label==='V52 POSTGAME COUNTERS')run.terminal=e.data;
 if(e.label==='V52 PROBE COVERAGE')run.probe=e.data;
}
const anomalies=[],observedExamples=[];const wrap=x=>((x+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;
for(const r of runs){const last=r.audits.at(-1);r.maxActiveAdapters=Math.max(0,...r.audits.map(a=>a.adapterInstances));r.latest=last;r.audits=r.audits.map(a=>({time:a.time,active:a.adapterInstances,retired:a.retired,completeInventory:a.installed.inventoryHud||0,fullMap:a.installed.fullMap||0}));
 for(const gun of last?.automaticAudit?.shotComparisons||[])for(const s of gun.examples){const actual=wrap(s.packetAngle-s.nativeAim)*180/Math.PI,error=wrap((s.offsetDegrees-actual)*Math.PI/180)*180/Math.PI;
  const e={epoch:r.epoch,weapon:gun.weapon,packetAngle:s.packetAngle,clientAim:s.nativeAim,loggedOffset:s.offsetDegrees,recomputedOffset:actual,differenceDegrees:error,scalar:s.displayHalfDegrees};observedExamples.push(e);if(Math.abs(error)>.02)anomalies.push(e);
 }
}
const engine=fs.readFileSync('docs/game-sources/engine.js'),source=engine.toString('utf8'),ast=parse(source,{ecmaVersion:'latest'}),literals=[],tables=[],routes=[];
function walk(n,p){if(!n?.type)return;
 if(n.type==='Literal'&&typeof n.value==='string'&&/spread|shoot|bulletType|rarity/i.test(n.value))literals.push({value:n.value,start:n.start,end:n.end});
 if(n.type==='VariableDeclarator'&&['äèä','æÈÅ'].includes(n.id?.name))tables.push({name:n.id.name,start:n.start,end:n.end,text:source.slice(n.start,n.end),role:n.id.name==='äèä'?'ammo-type classification, not spread values':'bullet art/effects configuration, not rarity/spread values'});
 if(n.type==='CallExpression'&&['player','bullet'].includes(n.arguments[0]?.value))for(const [i,f]of n.arguments.entries())if(f?.type==='FunctionExpression')routes.push({kind:n.arguments[0].value,argument:i,start:f.start,end:f.end,characters:f.end-f.start});
 for(const v of Object.values(n))if(Array.isArray(v))v.forEach(x=>walk(x,n));else if(v?.type)walk(v,n);
}walk(ast);
const chunks=events.filter(e=>e.label==='FULL NATIVE SOURCE CHUNK').map(e=>e.data).sort((a,b)=>a.index-b.index),recovered=Buffer.from(chunks.map(c=>c.text).join(''));
const summary={input,bytes:bytes.length,sha256:hash(bytes),eventCount:events.length,eventCounts:counts,runs,
 source:{bytes:engine.length,sha256:hash(engine),recoveredChunks:chunks.length,recoveredMatches:recovered.equals(engine),relevantLiterals:literals,tables,routes},spread:{examples:observedExamples,arithmeticAnomalies:anomalies.length,anomalies,interpretation:'Reported V52 offsets disagree with modular differences of the same raw angles. Published V52 code uses standard atan2(sin(delta),cos(delta)); cause is unknown without runtime math/payload identity. Do not calibrate from those summaries. Client has a server-received reticle scalar; no verified scalar-angle conversion or per-rarity firing bounds.'},
 findings:{inventory:'Hell has zero complete inventoryHud gates despite individual units. Source material icons have wrapper→rectangle→icon depth3; previous immediate-child inspection reached only depth2.',damage:'Floating text is suppressed but local incoming damage arrow is separate ÁÄå/Èâã/redarrow. New independent direction challenge joins Hell.',capacity:'Neither run reaches cap; maximum658/637 active. V51 capacity problem no longer explains these leaks. Old high-occupancy full-sweep path remains a potential pathological cost and is corrected separately.',performance:'V52 has no callback/frame timings, so user-visible latency cannot be attributed. Repeated saved-settings normalization on render/asset paths, duplicate uncached signature passes, capped replica resampling and synchronous draw-time contour preparation are measurable code risks; V53 adds bounded profiling/comparison and fixes those risks.',confirmed:'User explicitly confirms map disappeared; pickaxe/selected slot and damage indicators still visible; cones wrong; substantial delays. Unmentioned surfaces are not proof.',scope:'Two epochs: normal win, Hell loss. V50 never live-tested; prior lower tier/independent/win/browse tests remain carried. No HTML request, no authoritative contents/bot claims.'}};
// Publish only aggregate evidence. Raw audit rows, identities, timestamps, settings, packet examples and source excerpts remain in the input, not this derivative.
const publicSummary={input:summary.input,bytes:summary.bytes,sha256:summary.sha256,eventCount:summary.eventCount,eventCounts:summary.eventCounts,
 runs:runs.map(r=>({epoch:r.epoch,maximumActiveAdapters:r.maxActiveAdapters,capHits:r.caps.length,completeInventoryRoots:r.latest?.installed?.inventoryHud||0,individualInventoryUnits:r.latest?.installed?.inventoryHudUnit||0,fullMapRoots:r.latest?.installed?.fullMap||0,probeRecords:r.probe?.records||0})),
 source:{bytes:engine.length,sha256:hash(engine),recoveredChunks:chunks.length,recoveredMatches:recovered.equals(engine),matchingLiteralCount:literals.length,classificationTables:tables.map(t=>({role:t.role,start:t.start,end:t.end})),callbackRoutes:routes},
 spread:{reviewedExamples:observedExamples.length,arithmeticAnomalies:anomalies.length,interpretation:summary.spread.interpretation},findings:summary.findings,
 publicationScope:'Aggregate derivative only: no player identities, timestamps, raw packet/audit/settings examples, or source excerpts. Original previously uploaded evidence is unchanged.'};
const out=process.argv[3]||'docs/analysis/runs/v53-v52-focused-analysis.json';fs.writeFileSync(out,JSON.stringify(publicSummary,null,2)+'\n');
console.log(JSON.stringify({bytes:publicSummary.bytes,sha256:publicSummary.sha256,events:events.length,sourceMatches:publicSummary.source.recoveredMatches,spreadArithmeticAnomalies:anomalies.length,runs:publicSummary.runs}));
