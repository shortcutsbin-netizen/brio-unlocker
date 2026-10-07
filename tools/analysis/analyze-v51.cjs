// Read-only focused V51 source evidence. Parse supplied engine DATA; never execute it.
const fs=require('fs'),crypto=require('crypto'),{parse}=require('acorn');
const path=process.argv[2]||'docs/game-sources/engine.js',raw=fs.readFileSync(path,'utf8'),ast=parse(raw,{ecmaVersion:'latest'}),nodes=[];
function walk(n){if(!n?.type)return;nodes.push(n);for(const value of Object.values(n))if(Array.isArray(value)){for(const x of value)walk(x);}else if(value?.type)walk(value);}
walk(ast);
const key=n=>n?.computed?n.property?.value:n?.property?.name;
const kinds=['player','object','gun','ammo','bullet','throwable','car','baller'];
const callbacks=nodes.filter(n=>n.type==='CallExpression'&&key(n.callee)==='ÃEÅ'&&kinds.includes(n.arguments[0]?.value)).map(n=>({kind:n.arguments[0].value,phases:n.arguments.slice(1,5).map((f,i)=>({phase:['create','frame','update','remove'][i],start:f.start,end:f.end,fields:[...new Set(nodes.filter(x=>x.start>=f.start&&x.end<=f.end&&x.type==='MemberExpression').map(key).filter(Boolean))]}))}));
const terminal=nodes.filter(n=>n.type==='CallExpression'&&key(n.callee)==='æÊÈ'&&['death','elim','circle','feed'].includes(n.arguments[0]?.value)).map(n=>({event:n.arguments[0].value,start:n.start,end:n.end,source:raw.slice(n.start,Math.min(n.end,n.start+2400)),excerptCapped:n.end-n.start>2400}));
const fields=['ËÂ','Åé','ÈÆ','åÈ','ËÆ','Àä_','Eé_','Æéá','èeÊ','áAæ','Áa','ÁÆ','ÅèÁ','åÃÂ','ÊAÃ','ÅÀå','åÁE','ãéá','eÂå','åá$','AË'];
const references=fields.map(field=>({field,total:nodes.filter(n=>n.type==='MemberExpression'&&key(n)===field).length,examples:nodes.filter(n=>n.type==='MemberExpression'&&key(n)===field).slice(0,8).map(n=>({at:n.start,text:raw.slice(Math.max(0,n.start-100),n.end+200)}))}));
const names=['#deathPass','.statsContainer','.topContainer','mapScene','buildart/timer.png','buildart/storm.png'];
const strings=nodes.filter(n=>n.type==='Literal'&&names.includes(n.value)).map(n=>({value:n.value,start:n.start,end:n.end}));
const result={source:path,bytes:Buffer.byteLength(raw),sha256:crypto.createHash('sha256').update(raw).digest('hex'),parsedNodes:nodes.length,callbacks,terminal,references,strings,
 conclusions:{rarities:{gold:4,red:5},zone:'axis-aligned square; decoded target during movement',damageAttribution:'hLost/sLost routes lack authoritative attacker/victim; per-player rankings unavailable',spread:'client divides spread by100 for reticle scalar; server half-angle units not established',projectiles:'observed history only; no trajectory prediction',trailOwnership:'shared detached trailN resources have no retained owner; projectile hiding silences shared detached trails',endgame:'death event for win/loss; native deathPass panel preserved/reversibly hidden',scope:'solo; simulation, authority and native decoder identity unchanged'}};
const output=process.argv[3]||'docs/analysis/engine/v51-approved-mechanics.json';fs.writeFileSync(output,JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({sha256:result.sha256,callbacks:callbacks.length,events:terminal.map(x=>x.event),strings:strings.length,output}));
