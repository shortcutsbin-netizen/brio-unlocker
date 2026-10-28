// One-time, reproducible V68 -> production integration. Never reads a mutable runtime baseline.
const fs=require('fs'),acorn=require('acorn');
let s=fs.readFileSync('versions/v68/brio.js','utf8');
function walk(n,fn,parent){if(!n?.type)return;fn(n,parent);for(const [k,v]of Object.entries(n)){if(['start','end'].includes(k))continue;if(Array.isArray(v))v.forEach(x=>walk(x,fn,n));else if(v?.type)walk(v,fn,n);}}
function inits(replacements){const edits=[];walk(acorn.parse(s,{ecmaVersion:'latest'}),(n)=>{if(n.type==='VariableDeclarator'&&replacements[n.id?.name]!==undefined)edits.push([n.init.start,n.init.end,replacements[n.id.name]]);});for(const [a,b,t]of edits.sort((a,b)=>b[0]-a[0]))s=s.slice(0,a)+t+s.slice(b);}
function span(a,b,t){const i=s.indexOf(a),j=s.indexOf(b,i);if(i<0||j<0)throw Error('Missing span '+a);s=s.slice(0,i)+t+s.slice(j);}
s=s.replace('const RELEASE = "68"','const RELEASE = "69"').replace('[ K, "__brio_unlocker_v67"','[ K, "__brio_unlocker_v68", "__brio_unlocker_v67"');
span('    const term = D.createElement("div");','    /* BRIO: destroy',`    for(const event of ['mousemove','blur','pagehide'])W.addEventListener(event,v66Pointer,{capture:true,passive:true});D.addEventListener('visibilitychange',v66Pointer,{passive:true});\n`);
s=s.replace('        term.remove();','        productionDestroy();');
span('    locker.innerHTML =','    let tab =',`    locker.dataset.brioMenu='locker';extras.dataset.brioMenu='extras';locker.classList.add('brio-product');extras.classList.add('brio-product');\n    D.documentElement.append(locker,extras);\n`);
span('    locker.querySelector("[data-close]").onclick','    const LOOT_TIERS', '    const LOOT_TIERS'); // remove old upload/events; restore marker consumed below
s=s.replace('const LOOT_TIERS    const LOOT_TIERS','const LOOT_TIERS');
span('    extras.querySelector("[data-close]").onclick','    const /* BRIO: intercept','    const /* BRIO: intercept');
s=s.replace('const /* BRIO: intercept    const /* BRIO: intercept','const /* BRIO: intercept');
// All diagnostic history, probes and test presets are removed at their call sites. Keep functional bindings.
const retiredCalls=new Set(['log','v55PerfBegin','v55PerfEnd','v55PerfAdvance','v55PerfReset','v55PerfFinish','v55Frame','v68DesignCapture','v66Report','v66Mark','deepReport','reconDom','botAuditReset','botAuditTick','replicaStateAudit','passiveTick','passiveAdded','botSample','reconContainers','registrationAudit','botSourceAudit','v62NativeProvenance','reconRuntime','reconAdded','botStart','botStop','indicatorReport','restoreRandom','restoreInvTrace','stopMeteorPersist','restoreMeteor']);
inits({
 log:'()=>{}',STATUS:'null',v55PerfReset:'()=>{}',botStart:'()=>{}',renderGrid:'()=>productionLocker()',renderLocker:'()=>productionLocker()',renderExtras:'()=>productionExtras()',
 v68Advantages:`()=>{const z=storedExtras(),included=new Set(GENERAL_ADVANTAGES);for(const [id]of EXTRA.modifiers)if(id&&id!=='inventorySize')z[id]=included.has(id);z.inventorySize='large';z.warningThresholds=normalizeWarningThresholds(null);z.goodFlippinLuck=false;saveExtras(z);featureEx.at=-Infinity;syncFeatureSettings();renderExtras();}`,
 deep:'{timer:0,restore:null,circleState:null}',
 deepStart:`()=>{deepStop();const tick=()=>{if(S.destroyed)return;let codec;try{codec=typeof msgpack!=='undefined'?msgpack:W.msgpack;}catch(_){}const d=codec&&Object.getOwnPropertyDescriptor(codec,'decode');if(!deep.restore&&typeof d?.value==='function'&&(d.configurable||d.writable)){const original=d.value,wrapper=function(...args){const result=Reflect.apply(original,this,args);try{v55StatsObserve(result);}catch(error){productionError('Match statistics',error);}return result;};Object.defineProperty(codec,'decode',{...d,value:wrapper});deep.restore=()=>{if(codec.decode===wrapper)Object.defineProperty(codec,'decode',d);};}};tick();deep.timer=setInterval(tick,1000);}`,
 deepStop:`()=>{clearInterval(deep.timer);deep.timer=0;deep.restore?.();deep.restore=null;}`,
 completeSourceAudit:fs.readFileSync('src/production/bindings.js','utf8'),
 reconSource:`async()=>{const controller=new AbortController;productionSourceController=controller;const timeout=setTimeout(()=>controller.abort(),15000);try{const urls=[...D.scripts].map(x=>x.src).filter(x=>{try{const u=new URL(x);return u.origin===location.origin&&/\\/js\\/[^/]+\\.js$/.test(u.pathname);}catch(_){return false;}}),url=urls.find(x=>/uOfrVi\\.js/.test(x))||urls.at(-1)||new URL('/js/uOfrVi.js',location.href).href;const r=await fetch(url,{credentials:'same-origin',signal:controller.signal});if(!r.ok)throw Error('HTTP '+r.status);const raw=await r.text();if(!S.destroyed)await completeSourceAudit(raw); }catch(error){if(!S.destroyed)productionError('Game compatibility',error);}finally{clearTimeout(timeout);if(productionSourceController===controller)productionSourceController=null;}}`,
 exFast:`()=>{const n=performance.now();if(n-featureEx.at>500){featureEx.value=extrasState();featureEx.at=n;}return featureEx.value;}`,
 v55PostGame:'()=>productionPostGame()',
 featureTick:`()=>{try{if(S.renderer&&!S.meteorAutoTimer&&nativeScanNeeded(exFast()))meteorAutoStart('feature watchdog');featureEx.value=extrasState();featureEx.at=performance.now();automaticPhase();ownMaterialWarnings();reclaimNativeGates();if(!featureEx.value.flashlightMode)v63FlashlightHide();nativeInventoryChallenge();const e=exFast(),players=collectPlayers(),world=collectWorld(),live=new Set([...players,...world]);for(const r of players)featurePlayer(r);for(const [r,c]of S.nativeInvClones||[])if(!live.has(r)){for(const row of c.rows)for(const u of row.units)u.root['ÊÈA']?.();S.nativeInvClones.delete(r);}for(const o of world)featureWorld(o);for(const [o,m]of featureNodes)if(!live.has(o)){for(const n of m.values())n.parent?.remove?.(n);featureNodes.delete(o);}syncMonochrome(!!e.monochrome);}catch(error){productionError('Feature maintenance',error);}}`,
 ensureArrow:'(key,color)=>productionArrow(key,color)',
 placeArrow:'(u,dx,dy,dist,label,m=76,rect={left:0,top:0,width:innerWidth,height:innerHeight})=>productionPlaceArrow(u,dx,dy,dist,label,m,rect)',
 loadRes:fs.readFileSync('src/production/resources.js','utf8'),
});
// Avoid retaining any diagnostic arguments: replacing log with a noop alone would still serialize them.
let edits=[];walk(acorn.parse(s,{ecmaVersion:'latest'}),(n)=>{if(n.type==='CallExpression'&&n.callee.type==='Identifier'&&n.callee.name==='v55Quiet')edits.push([n.start,n.end,'false']);else if(n.type==='CallExpression'&&n.callee.type==='Identifier'&&retiredCalls.has(n.callee.name))edits.push([n.start,n.end,'void 0']);});
walk(acorn.parse(s,{ecmaVersion:'latest'}),(n)=>{if(n.type==='CallExpression'&&n.callee.name==='setTimeout'&&n.arguments[0]&&/replicaStateAudit\(/.test(s.slice(n.arguments[0].start,n.arguments[0].end)))edits.push([n.start,n.end,'void 0']);});
// Keep only outermost ranges.
edits=edits.filter(x=>!edits.some(y=>y!==x&&y[0]<=x[0]&&y[1]>=x[1]));for(const [a,b,t]of edits.sort((a,b)=>b[0]-a[0]))s=s.slice(0,a)+t+s.slice(b);
// Extend original-set category resolution without changing native/random/invisible semantics.
s=s.replace('pickaxe: []\n        }','pickaxe: [],\n            glider: []\n        }');
s=s.replaceAll('[ "body", "head", "pickaxe" ].includes(k)','[ "body", "head", "pickaxe", "glider" ].includes(k)');
s=s.replace('const c = S.custom[k].find(', 'const c = [...S.custom[k],...productionOriginals(k)].find(');
s=s.replace('locker.style.display = \"flex\";', 'productionShow(locker);').replace('extras.style.display = \"flex\";', 'productionShow(extras);');
// Every indicator retains the same approved silhouette; loot keeps its item icon below it.
s=s.replace('u.querySelector(".shape").style.background = indicatorColor(e,"lootIndicator");', 'u.style.color=indicatorColor(e,"lootIndicator");');
s=s.replace('u.style.width="112px";u.style.height="56px";', '');
s=s.replace('u.querySelector(".shape").style.clipPath="polygon(10% 40%,75% 40%,75% 20%,100% 50%,75% 80%,75% 60%,10% 60%)";', '');
s=s.replace(/u\.style\.width\s*=\s*\"112px\";\s*u\.style\.height\s*=\s*\"56px\";/g,'');
s=s.replace(/u\.querySelector\(\"\.shape\"\)\.style\.clipPath\s*=\s*\"polygon\(10%[^\"]+\";/g,'');
// Resource boundaries: old native locks restored before dropping exclusively owned decoded resources.
s=s.replace('        S.playVisuals = state();','        productionReleaseResources();\n        S.matchEpoch=(S.matchEpoch||0)+1;\n        S.playVisuals = state();');
s=s.replace('            }finally{', '            }finally{');
s=s.replace('stats.finished=true;v63FlashlightHide(true);','stats.finished=true;productionFinish(stats);v63FlashlightHide(true);');
s=s.replace("if(p.state){", "if(p.state){if(['waiting','moving'].includes(p.state))botPhase('native circle state');");
// Reach standalone full-map scene via the shared native scene draw method. Not dependent on finding its child arrays.
s=s.replace('sceneObserve = node => {','sceneObserve = node => {\n        productionMapPrototype(node);');
s=s.replace("value.reticleStyle=['dot','cross','ring','image'].includes(value.reticleStyle)?value.reticleStyle:'cross';","value.reticleStyle=['dot','cross','ring','image',...productionReticles.map((_,i)=>'shape'+i)].includes(value.reticleStyle)?value.reticleStyle:'cross';");
s=s.replace("else if(e.reticleStyle==='dot')", "else if(/^shape\\d+$/.test(e.reticleStyle)){productionPaintReticle(ctx,Number(e.reticleStyle.slice(5)),e.reticleColor,e.reticleSize);}\n            else if(e.reticleStyle==='dot')");
// Strip presentation/telemetry-only state resets whose definitions can then be pruned.
s=s.replace('        S.logFlush = 0;','        S.logFlush = 0;');
s=s.replace('    W[K] = S;', '    W[K] = S;\n'+fs.readFileSync('/tmp/brio-production-ui.js','utf8'));
s=s.replace('    patchButtons();\n    renderExtras();','    productionInit();\n    patchButtons();\n    renderExtras();');
s=s.replace('        renderLocker();\n        bindPlay();','        if(S.destroyed)return;\n        renderLocker();\n        bindPlay();');
// Drop old audit/terminal style sheets while retaining native button overlay and monochrome presentation.
const styleStart=s.indexOf('    style.textContent = `'),styleEnd=s.indexOf('    D.documentElement.appendChild(style);',styleStart);
const old=s.slice(styleStart,styleEnd),css=old.match(/style.textContent = `([^`]+)`/)[1];
const retained=css.slice(0,css.indexOf('.brioModal')).replace(/#ad,#preroll,.*?\{display:none!important;[^}]+\}/,'');
s=s.slice(0,styleStart)+'    style.textContent = '+JSON.stringify(retained)+';\n'+s.slice(styleEnd);
// Keep errors bounded; diagnostic-only resets do not keep abandoned probes alive.
let cleanEdits=[];walk(acorn.parse(s,{ecmaVersion:'latest'}),(n)=>{
 if(n.type==='CallExpression'&&n.callee.type==='MemberExpression'&&n.callee.object?.type==='MemberExpression'&&n.callee.object.object?.name==='S'&&n.callee.object.property?.name==='errors'&&n.callee.property.name==='push')cleanEdits.push([n.start,n.end,"productionError('Runtime',"+n.arguments.map(x=>s.slice(x.start,x.end)).join(',')+")"]);
});for(const [a,b,t]of cleanEdits.sort((a,b)=>b[0]-a[0]))s=s.slice(0,a)+t+s.slice(b);
s=s.replace('botStart = () => {', 'botStart = () => {');

s=s.replace(/if \(\!S\.passiveTimer\) \{[\s\S]*?S\.featureTimer = setInterval\(featureTick, 2e3\);\n        \}/,'if(!S.featureTimer)S.featureTimer=setInterval(featureTick,2000);');
// Discard diagnostic state (not operational marker holds, native binding maps or match counters).
const retiredFields=new Set(['log','logFlush','manualCopy','out','botTimer','botWatch','botLogged','contentBase','contentSeq','contentCapture','randomHook','autoContents','autoSeen','autoContentTimer','autoEvents','sourceSeen','sourceText','passiveTimer','passiveAssets','passiveBuilds','passiveLocal','replicaAuditCount','meteorHook','meteorTrace','meteorPersist','invTraceHook','meteorSource']);
const retiredLocals=new Set(['botAuditSeen','botAuditUntil','replicaAuditSeen','reconCoverage','reconObjects','reconContainersSeen','reconRemoved','nativeVisualCoverage','nativeVisualSuppressed','indicatorStats','humanLabels']);
// Remove complete expression statements/if blocks that only service retired fields, plus empty delayed audit callbacks.
let retire=[];const retirementAst=acorn.parse(s,{ecmaVersion:'latest'});walk(retirementAst,(n,p)=>{
 if(n.type==='Property'&&p?.type==='ObjectExpression'&&retiredFields.has(n.key?.name)&&p.properties.some(x=>x.key?.name==='renderer')){
  const i=p.properties.indexOf(n);retire.push([n.start,i<p.properties.length-1?p.properties[i+1].start:n.end,'']);
 }
 if(n.type==='ExpressionStatement'||n.type==='IfStatement'){
  const root=n.type==='ExpressionStatement'?n.expression:n.test;
  let bad=false;const scan=(x,fn)=>{if(!x?.type||/Function/.test(x.type))return;fn(x);for(const v of Object.values(x))if(Array.isArray(v))v.forEach(y=>scan(y,fn));else if(v?.type)scan(v,fn);};scan(root,x=>{if(x.type==='MemberExpression'&&x.object?.name==='S'&&retiredFields.has(x.property?.name))bad=true;if(x.type==='Identifier'&&retiredLocals.has(x.name))bad=true;if(x.type==='MemberExpression'&&x.object?.name==='reconNow')bad=true;});
  if(bad)retire.push([n.start,n.end,';']);
 }
});retire=retire.filter(x=>!retire.some(y=>x!==y&&y[0]<=x[0]&&y[1]>=x[1]));for(const [a,b,t]of retire.sort((a,b)=>b[0]-a[0]))s=s.slice(0,a)+t+s.slice(b);
// Performance sampling is diagnostic-only. Explicitly remove its conditional state, retaining all draw/feature limits.
s=s.replaceAll('v55.perf','null').replace('v55.shotChecks=new Map;','');
// Local scheduler owns every BRIO timeout/interval/frame, including late retry callbacks. It never patches the game's scheduler.
const scheduler=`
    const ownedTimeouts=new Set,ownedIntervals=new Set,ownedFrames=new Set;
    const setTimeout=(fn,ms,...args)=>{const id=W.setTimeout(()=>{ownedTimeouts.delete(id);if(!S.destroyed)fn(...args);},ms);ownedTimeouts.add(id);return id;};
    const clearTimeout=id=>{ownedTimeouts.delete(id);W.clearTimeout(id);};
    const setInterval=(fn,ms,...args)=>{const id=W.setInterval(()=>{if(!S.destroyed)fn(...args);},ms);ownedIntervals.add(id);return id;};
    const clearInterval=id=>{ownedIntervals.delete(id);W.clearInterval(id);};
    const requestAnimationFrame=fn=>{const id=W.requestAnimationFrame(t=>{ownedFrames.delete(id);if(!S.destroyed)fn(t);});ownedFrames.add(id);return id;};
    const cancelAnimationFrame=id=>{ownedFrames.delete(id);W.cancelAnimationFrame(id);};
`;
s=s.replace('    W[K] = S;','    W[K] = S;'+scheduler);
s=s.replace('function productionDestroy(){','function productionDestroy(){for(const id of ownedTimeouts)W.clearTimeout(id);ownedTimeouts.clear();for(const id of ownedIntervals)W.clearInterval(id);ownedIntervals.clear();for(const id of ownedFrames)W.cancelAnimationFrame(id);ownedFrames.clear();');
s=s.replaceAll('S.botPhaseAt','S.matchPhaseAt').replaceAll('S.botPhase','S.matchPhase').replaceAll('botPhase(', 'setMatchPhase(').replace('botPhase =','setMatchPhase =');
s=s.replaceAll('reconSource','loadGameBindings').replaceAll('deepStart','startPacketObserver').replaceAll('deepStop','stopPacketObserver').replace(/\bdeep\b/g,'packetObserver').replaceAll('reconMarkers','meteorMarkers').replaceAll('reconRestore','meteorRestores');

// Removed diagnostics are unreachable after explicit callsite removal; deterministic local DCE below removes their definitions.
fs.writeFileSync('/tmp/brio-v69-integrated.js',s);
(async()=>{const {minify}=require('terser');const out=await minify(s,{compress:{defaults:false,unused:true,dead_code:true,evaluate:true,side_effects:true,conditionals:true,passes:3},mangle:false,format:{beautify:true,comments:false}});if(out.code.length<100000)throw Error('Unexpectedly empty production build');new(require('vm').Script)(out.code);fs.writeFileSync('src/brio.js',out.code.replace(/^    new (Map|Set);$/gm,'').replace(/[ \t]+$/gm,'')+'\n');console.log('Integrated production source',Buffer.byteLength(out.code));})().catch(e=>{console.error(e);process.exitCode=1;});
