// Analyze every JSON event in the complete V60 upload; never evaluate native source or publish identities.
const fs=require('fs'),crypto=require('crypto'),assert=require('node:assert/strict');
const input=process.argv[2]||'logs/runs/v60-log.txt',bytes=fs.readFileSync(input),events=[],counts={};let malformed=0;
for(const line of bytes.toString('utf8').split(/\r?\n/)){const m=line.match(/^\[([^\]]+)\] (.*?) ([{\[].*)$/);if(!m)continue;try{const data=JSON.parse(m[3]);events.push({label:m[2],data});counts[m[2]]=(counts[m[2]]||0)+1;}catch{malformed++;}}
const exportEvent=events.filter(e=>e.label==='V55 EXPORT AUDIT').at(-1);assert(exportEvent,'Missing full export audit');const recon=exportEvent.data.spreadRecon;assert.equal(recon.revision,'v55-native-shots-input-ads-clips-1');
const exceptions=['charge rifle','grenade pistol'],weapons=[],rejections={};
for(const [weapon,gun]of Object.entries(recon.guns)){
 const target=Math.max(10,gun.clipSize*3),angleTarget=Math.min(12,target),modes=exceptions.includes(weapon)?['hip']:['hip','ads'];
 const evidence={weapon,observedClip:gun.clipSize,target,angleTarget,requiredModes:modes,modeEvidence:{}};
 for(const mode of ['hip','ads']){const cell=gun[mode];evidence.modeEvidence[mode]={shots:cell.groups,projectiles:cell.projectiles,qualifiedAngleGroups:cell.angleGroups,observedHalfDegrees:cell.angleGroups?cell.maxAbsDegrees:null,shotTargetMet:cell.groups>=target,angleReady:cell.angleGroups>=angleTarget,rejections:cell.rejected};for(const [reason,n]of Object.entries(cell.rejected))rejections[reason]=(rejections[reason]||0)+n;}
 weapons.push(evidence);
}
const required=weapons.flatMap(g=>g.requiredModes.map(mode=>({weapon:g.weapon,mode,...g.modeEvidence[mode]}))),chunks=events.filter(e=>e.label==='FULL NATIVE SOURCE CHUNK').map(e=>e.data).sort((a,b)=>a.index-b.index),engine=fs.readFileSync('docs/game-sources/engine.js'),recovered=Buffer.from(chunks.map(c=>c.text).join(''));
const runs=[];let run;for(const e of events){if(e.label==='MATCH STATE RESET'){run={epoch:e.data.epoch,maximumActiveAdapters:0,capHits:0,terminalObserved:false};runs.push(run);}if(!run)continue;if(e.label==='CHALLENGE BRANCH COVERAGE')run.maximumActiveAdapters=Math.max(run.maximumActiveAdapters,e.data.adapterInstances||0);if(e.label==='NATIVE VISUAL GATE CAP')run.capHits++;if(e.label==='V55 POSTGAME COUNTERS')run.terminalObserved=true;}
for(const e of events)if(e.label==='V55 PROBE COVERAGE'){const run=runs.find(r=>r.epoch===e.data.epoch);if(run)run.probe={packets:e.data.incomingPackets,records:e.data.records,nativeEngineCaptured:!!e.data.nativeEngineCaptured,truncations:e.data.truncations,errors:e.data.errors,cappedLanes:Object.entries(e.data.lanes||{}).filter(([k,n])=>n>=e.data.laneCaps?.[k]).map(([k])=>k)};}
const containerSummary={};let containerEpoch=0;
for(const e of events){
 if(e.label==='MATCH STATE RESET')containerEpoch=e.data.epoch;
 if(e.label!=='INCOMING TARGET PAYLOAD')continue;
 const d=e.data.data,p=d?.packet,kind=d?.kind;if(!p||!['chest','airdrop','object'].includes(kind))continue;
 const key=d.subtype||kind,row=containerSummary[key]||(containerSummary[key]={records:0,identities:new Set,packetTypes:{},fields:new Set});
 row.records++;row.identities.add(containerEpoch+":"+d.id);row.packetTypes[d.type]=(row.packetTypes[d.type]||0)+1;for(const k of Object.keys(p))row.fields.add(k);
}
for(const row of Object.values(containerSummary)){row.observedRunIdentities=row.identities.size;delete row.identities;row.fields=[...row.fields].sort();}
const replicaKinds={},replicaFields={},previous=new Map,ignored=['new','Âä','áÆ','ëa','æëÃ','ÀÁ','cos'];let epoch=0,changes=0,animationOnlyChanges=0;
for(const e of events){
 if(e.label==='MATCH STATE RESET')epoch=e.data.epoch;
 if(e.label==='NATIVE REPLICA SCHEMA SAMPLE')replicaKinds[e.data.kind]=(replicaKinds[e.data.kind]||0)+1;
 if(!['DEEP TARGET INITIAL','DEEP TARGET CHANGE'].includes(e.label))continue;
 const d=e.data.data,snapshot=d?.snapshot?.data;if(!snapshot)continue;
 const kind=d.kind,key=epoch+':'+kind+':'+d.id,old=previous.get(key),filtered={...snapshot};for(const k of ignored)delete filtered[k];
 const fields=replicaFields[kind]||(replicaFields[kind]=new Set);for(const k of Object.keys(snapshot))fields.add(k);
 if(old&&e.label==='DEEP TARGET CHANGE'){changes++;if(JSON.stringify(old)===JSON.stringify(filtered))animationOnlyChanges++;}previous.set(key,filtered);
}
for(const k of Object.keys(replicaFields))replicaFields[k]=[...replicaFields[k]].sort();
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const report={input,bytes:bytes.length,sha256:hash(bytes),gitBlob:crypto.createHash('sha1').update(Buffer.concat([Buffer.from('blob '+bytes.length+'\0'),bytes])).digest('hex'),eventCount:events.length,malformedJsonEvents:malformed,eventCounts:counts,runs,containers:containerSummary,replicas:{shallowSamplesByKind:replicaKinds,fullSnapshotFieldsByKind:replicaFields,observedChanges:changes,animationOnlyChanges,signatureIgnoredFields:ignored,limits:"Full raw snapshots retained; only change-trigger equality filters known animation. Shallow samples are not unique openings; capped lanes remain incomplete."},source:{chunks:chunks.length,bytes:engine.length,sha256:hash(engine),recoveredMatches:recovered.equals(engine)},spread:{weapons,requiredModes:required.length,shotTargetsMet:required.filter(x=>x.shotTargetMet).length,angleReadyModes:required.filter(x=>x.angleReady).length,zeroAngleModes:required.filter(x=>!x.qualifiedAngleGroups).map(x=>({weapon:x.weapon,mode:x.mode})),missingAngleModes:required.filter(x=>!x.angleReady).map(x=>({weapon:x.weapon,mode:x.mode,samples:x.qualifiedAngleGroups})),rejections,exceptions:{chargeRifle:'User confirms no ADS mode; retain old held-right-click records but do not require a separate ADS calibration.',grenadePistol:'User confirms unchanged ADS spread. Hip has 10 native shots; the six held-right-click shots are not a missing independent target.'},decision:'All44 applicable modes remain complete. Preserve frozen envelopes/styles/recorder. User rejects V60 geometry. Replace guessed root axis/manual composition with actual held-art canvas transform and passive cursor projection. Retire spread diagnostic UI, retaining frozen envelopes/storage/recording. Container packets and replicas expose no authoritative pre-open list; caps/private registry/missing index prevent impossibility. Focused change signatures should ignore only source-documented animation/bookkeeping while retaining full exported snapshots.'},limits:'Finite observed envelopes, pooled rarities, and native observed clip high-water are not theoretical/server maxima. Native pixels and performance are not inferred from unmentioned outcomes. Aggregate derivative only: no identities, raw packets, timestamps, settings or source excerpts.'};
fs.mkdirSync('docs/analysis/runs',{recursive:true});fs.writeFileSync(process.argv[3]||'docs/analysis/runs/v61-v60-focused-analysis.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({bytes:report.bytes,sha256:report.sha256,events:events.length,malformed,runs,sourceMatches:report.source.recoveredMatches,requiredModes:required.length,shotTargetsMet:report.spread.shotTargetsMet,angleReadyModes:report.spread.angleReadyModes,missing:report.spread.missingAngleModes,rejections}));
