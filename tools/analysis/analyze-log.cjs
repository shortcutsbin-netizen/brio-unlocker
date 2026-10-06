// Reproducible read-only run evidence. No engine or log text is executed.
const fs = require('fs'), crypto = require('crypto');
const input = process.argv[2] || 'logs/runs/v48-log.txt';
const output = process.argv[3] || 'docs/analysis/runs/v49-v48-analysis.json';
const bytes = fs.readFileSync(input), text = bytes.toString('utf8');
const version = text.match(/^BRIO (\d+)/)?.[1] || '48';
const events = [];
for (const line of text.split(/\r?\n/)) {
  const m = line.match(/^\[([^\]]+)\] (.*?) (?=[{\[])(.*)$/);
  if (!m) continue;
  try { events.push({time:m[1], label:m[2], data:JSON.parse(m[3])}); } catch {}
}
const counts = Object.fromEntries([...new Set(events.map(e=>e.label))].sort().map(label=>[label, events.filter(e=>e.label===label).length]));
const selected = label => events.filter(e=>e.label===label).map(e=>e.data);
const payloads = selected('INCOMING TARGET PAYLOAD').map(s=>s.data||s);
const payloadKinds = {};
for (const p of payloads) {const key=[p.type,p.kind||'unknown',p.subtype||''].join(':');payloadKinds[key]=(payloadKinds[key]||0)+1;}
const chunks = selected('FULL NATIVE SOURCE CHUNK').sort((a,b)=>a.index-b.index);
const source = chunks.map(c=>c.text).join('');
const hash = b=>crypto.createHash('sha256').update(b).digest('hex');
const complete = chunks.length>0 && chunks.length===chunks[0].count && chunks.every((c,i)=>c.index===i&&c.count===chunks.length);
const reference = fs.readFileSync('docs/game-sources/engine.js');
const runs=[]; let run;
for(const e of events){
 if(e.label==='MATCH STATE RESET'){run={epoch:e.data.epoch,reset:e.data,settings:null,coverage:null,payloads:0};runs.push(run);}
 if(!run)continue;
 if(e.label==='TEST SETTINGS AT PLAY')run.settings=e.data;
 if(e.label===`V${version} PROBE COVERAGE`)run.coverage=e.data;
 if(e.label==='INCOMING TARGET PAYLOAD')run.payloads++;
}
const properties={},chestTypes={};
for(const p of payloads){const kind=[p.kind,p.subtype||''].join(':');const set=properties[kind]||(properties[kind]=new Set);for(const k of Object.keys(p.packet||{}))set.add(k);if(p.type==='x'&&p.kind==='chest'){const type=p.packet?.chestType||'unknown';chestTypes[type]=(chestTypes[type]||0)+1;}}
const summary = {input,version,bytes:bytes.length,characters:text.length,sha256:hash(bytes),eventCounts:counts,incomingPayloadKinds:payloadKinds,containerChestTypes:chestTypes,payloadProperties:Object.fromEntries(Object.entries(properties).map(([k,v])=>[k,[...v].sort()])),runs,coverage:selected(`V${version} PROBE COVERAGE`).at(-1),hudStatus:selected('NATIVE HUD CAPTURE STATUS').at(-1),phaseTransitions:selected('BOT PHASE'),sessionTransitions:selected('NATIVE SESSION STATE').map(s=>({epoch:s.epoch,state:s.state})),removedMeteors:selected('OLD MATCH METEORS REMOVED'),runtimeSource:{chunks:chunks.length,complete,characters:source.length,bytes:Buffer.byteLength(source),sha256:hash(source),matchesReference:complete&&Buffer.from(source).equals(reference)},limits:'Counts summarize recorded JSON events only. Group by chronological Play resets: v46 historical rearm coverage reports the next epoch before resetting its probe. User observations are separate. Capped or missing records and unencountered targets cannot establish impossibility.'};
fs.writeFileSync(output,JSON.stringify(summary,null,2)+'\n');
console.log(JSON.stringify({input,bytes:summary.bytes,payloadKinds,records:summary.coverage?.records,runtimeSource:summary.runtimeSource}));
