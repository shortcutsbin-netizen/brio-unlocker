// V50 integration checks use the actual console payload and actual Extras controls. Native fixtures preserve
// constructor/child ownership and draw-entry relationships recovered from the supplied engine; no game source runs.
const fs = require('fs'), assert = require('node:assert/strict'), {JSDOM} = require('jsdom');
const code = fs.readFileSync(process.argv[2] || 'src/brio.js','utf8');

async function run({own=false,combinedStart=false}={}) {
  const dom = new JSDOM('<button id="loggedInLocker">Locker</button><button id="loggedInShop">Shop</button><button id="ready">Play</button><input id="nameBox" maxlength="30" value="tester"><canvas id="game"></canvas>',{url:'https://buildroyale.io/',runScripts:'outside-only'});
  const w=dom.window, page=w.document; let clock=0, next=0; const timers=new Map, paints=[];
  const flush=async()=>{for(let i=0;i<20;i++)await Promise.resolve();};
  const tick=async ms=>{
    const end=clock+ms;
    for(let i=0;i<20000;i++){
      const due=[...timers].filter(([,v])=>v.at<=end).sort((a,b)=>a[1].at-b[1].at)[0]; if(!due)break;
      clock=due[1].at; timers.delete(due[0]); if(due[1].period)timers.set(due[0],{...due[1],at:clock+due[1].period});
      due[1].fn(); await flush();
    }
    clock=end; await flush();
  };
  w.setTimeout=(fn,ms=0)=>{timers.set(++next,{fn,at:clock+ms});return next;}; w.clearTimeout=id=>timers.delete(id);
  w.setInterval=(fn,ms)=>{timers.set(++next,{fn,at:clock+ms,period:ms});return next;};w.clearInterval=w.clearTimeout;
  Object.defineProperty(w.performance,'now',{value:()=>clock});w.performance.getEntriesByType=()=>[];
  const canvas=page.querySelector('canvas');canvas.width=1000;canvas.height=800;
  canvas.getBoundingClientRect=()=>({left:0,top:0,right:1000,bottom:800,width:1000,height:800});
  const ctx={canvas,save(){},restore(){},translate(){},rotate(){},scale(){},beginPath(){},closePath(){},moveTo(){},lineTo(){},arc(){},clip(){},rect(){},fill(){},stroke(){},drawImage(){},fillRect(){},fillText(){},strokeText(){},getTransform:()=>({a:1,b:0,c:0,d:1,e:500,f:400}),measureText:t=>({width:String(t).length*5}),strokeRect(){paints.push('outline:'+this.strokeStyle);}};
  w.HTMLCanvasElement.prototype.getContext=function(){return {...ctx,canvas:this};};
  w.HTMLCanvasElement.prototype.toDataURL=()=> 'data:image/png;base64,blank';
  Object.defineProperty(w.HTMLImageElement.prototype,'src',{configurable:true,get(){return this._src||'';},set(v){this._src=v;this.width=this.height=300;Object.defineProperties(this,{naturalWidth:{configurable:true,value:300},naturalHeight:{configurable:true,value:300}});w.queueMicrotask(()=>this.onload?.());}});
  let decodeCalls=0;const nativeDecode=packet=>{decodeCalls++;return packet;};w.msgpack={decode:nativeDecode};
  w.fetch=async()=>({ok:true,text:async()=>fs.readFileSync('docs/game-sources/engine.js','utf8')});w.AbortController=global.AbortController;
  w.indexedDB={open(){const r={result:{objectStoreNames:{contains:()=>true},transaction:()=>({objectStore:()=>({getAll(){const x={result:[]};w.queueMicrotask(()=>x.onsuccess?.());return x;}})}),close(){}}};w.queueMicrotask(()=>r.onsuccess?.());return r;}};
  const preferences={goodFlippinLuck:combinedStart,monochrome:true,flashlightMode:true,transparentRoofs:true,transparentFoliage:true,healthBars:true,numericHealthShield:true,playerNames:true,identifyBots:true,nearestPlayer:true,nearestPlayerName:true,nearestChest:true,nearestAirdrop:true,permanentMeteor:true,allTrailsInvisible:false,allGlidersInvisible:false,inventorySlots:true,inventoryMaterials:true,inventoryAmmo:true,lowHealthWarning:true,lowAmmoWarning:true,lowMatsWarning:true,warningThresholds:{health:55,ammo:[1,2,3,4,5,6],materials:[11,12,13,14]},lootMaskTier:'item',buildMaskTier:'blueprints',cleanLoot:true};
  w.localStorage.setItem('brio_extras_state',JSON.stringify(preferences));w.localStorage.setItem('br_local_visuals','{}');
  const arr=()=>new w.Array;
  class NativeNode {
    constructor(label='group'){
      Object.assign(this,{label,type:'container',ë:{É:0,Ä:0},âè:arr(),ÉE:arr(),A:0,size:1,visible:true,opacity:1});
      if(own)for(const k of ['add','remove','âá','éa'])this[k]=NativeNode.prototype[k];
    }
    add(n){this.âè.push(n);n.parent=this;return n;}
    remove(n){for(const key of ['âè','ÉE']){const i=this[key].indexOf(n);if(i>=0)this[key].splice(i,1);}n.parent=null;}
    âá(n){this.ÉE.unshift(n);n.parent=this;return n;}
    Eââ(){paints.push(this.label);if(this.explode)throw Error('native draw exception');return this.label;}
    éa(context=ctx,scale=1,alpha=1){
      if(this.visible===false||this.opacity<=0||alpha<=0)return;
      const result=this.Eââ(context,scale);for(const key of ['âè','ÉE'])this[key].forEach(n=>n.éa?.(context,scale,alpha));return result;
    }
  }
  const resource=path=>{const image=new w.Image;image.src=path;image['ÀA']=1;return{src:path,ÁÄ:image};};
  const image=(path,label=path)=>Object.assign(new NativeNode(label),{type:'image',À:resource(path),width:100,height:100});
  const rect=(label,color,width,height,x=0,y=0)=>Object.assign(new NativeNode(label),{type:'rectangle',Äe:color,width,height,ë:{É:x,Ä:y}});
  const stage=new NativeNode('stage');w.testNativeStage=stage;
  const player=(id,name,x)=>{
    const r={id,type:'player',Ée:name,â:new NativeNode('player-root'+id),ÄA:new NativeNode('physical'+id),Eâ:new NativeNode('info'+id),Ëå:image('/native-body.png','body'+id),head:image('/native-head.png','head'+id),ä:image('/native-pickaxe.png','held'+id),ÉãÂ:resource('/native-pickaxe.png'),Ëé:'trail0-',åëÅ:3,ÆÃÅ:'nativewrap',Åé:[{type:'pickaxe'},{type:'scar',äã:3}],ÈÆ:1,åÈ:25,Â$:40,ÊÃÄ:[100,100,100,100],åæ:[100,100,100,100,100],ÁãÀ:'scar',èÂ:true};
    r.â.ë.É=x;r.â.add(r.ÄA);r.â.add(r.Eâ);r.ÄA.add(r.Ëå);r.ÄA.add(r.head);r.ÄA.add(r.ä);
    r.ÁÆ=image('/buildart/bluewood.png','preview'+id);r.Eå=image('/buildart/grapple.png','grapple'+id);r.æE=image('/buildart/rope.png','rope'+id);
    r.ÄÊâ=image('/buildart/emote0.png','emote'+id);r.ÂÅ=image('/native-glider.png','glider'+id);r.ÄA.add(r.ÂÅ);r.äÀÊ=r.ÂÅ.À;
    r.ÃÊ=new NativeNode('name'+id);r.ÃÊ.opacity=.2;r.Eâ.add(r.ÃÊ);
    r.æÄ=rect('hp'+id,'#0D0',60,10,0,50);r.AÃå=rect('shield'+id,'#48F',60,4,0,30);
    for(const k of ['áË','ÄÂ','ÄãÀ','èÅ']){r[k]=new NativeNode(k+id);r.ÄA.add(r[k]);}
    for(const n of [r.â,r.ÁÆ,r.Eå,r.æE])stage.add(n);return r;
  };
  const roof=image('/buildart/barnroof.png','roof');stage.add(roof);const roofOriginal=roof.À.ÁÄ;
  const hpHud=new NativeNode('hpHud'),hpIcon=image('/buildart/health.png','hpIcon'),shieldIcon=image('/buildart/shield.png','shieldIcon');hpIcon.ë.Ä=-40;shieldIcon.ë.Ä=-75;
  const hpBar=rect('hpBar','#0C0',300,20,275,-40),shieldBar=rect('shieldBar','#48F',300,20,275,-75),currentAmmo=image('/buildart/empty.png','currentAmmo');currentAmmo.width=currentAmmo.height=40;currentAmmo.ë.Ä=-155;
  for(const n of [hpIcon,shieldIcon,hpBar,shieldBar,currentAmmo])hpHud.add(n);stage.add(hpHud);
  const mapHud=new NativeNode('mapHud'),map=image('/buildart/empty.png','minimap');map.width=map.height=250;
  map.Eââ=function(context){context.drawImage();paints.push('minimap');return 'native map';};
  const waiting=image('/buildart/timer.png','timer');waiting.width=waiting.height=32;waiting.add(Object.assign(new NativeNode('countdown'),{type:'text',text:'0:30'}));mapHud.add(image('/buildart/playersIcon.png','playerCounter'));mapHud.add(map);mapHud.add(waiting);stage.add(mapHud);
  const stormWorld=new NativeNode('stormWorld');stormWorld.Ée='borderScene';stormWorld.add(rect('worldShade','#F00',100,100));stage.add(stormWorld);
  const stormMap=new NativeNode('stormMap');stormMap.Éèå=[];const mapShades=[];
  for(let i=0;i<4;i++){const n=rect('mapShade'+i,'#F00',1,1);mapShades.push(n);stormMap.add(n);}
  const border=rect('stormBorder','#FFF',2000,2000);border.lineWidth=50;stormMap.add(border);stormMap.add(new NativeNode('teammateMapDot'));stage.add(stormMap);
  const crosshair=new NativeNode('crosshair');
  for(const [i,dimensions]of [[0,[4,20,0,40]],[1,[4,20,0,-40]],[2,[20,4,40,0]],[3,[20,4,-40,0]],[4,[4,4,0,0]]])crosshair.add(rect('cross'+i,'#FFF',...dimensions));
  const hit=new NativeNode('hit-marker');for(let i=0;i<4;i++)hit.add(rect(i?'hit'+i:'hit','#F00',4,20));crosshair.add(hit);stage.add(crosshair);
  // A same-color unrelated rectangle must not be mistaken for the validated crosshair or map storm scene.
  const unrelated=rect('unrelated','#FFF',4,20);stage.add(unrelated);
  const inventory=new NativeNode('inventory-root');
  for(let i=0;i<6;i++){
    const holder=new NativeNode('holder'+i);holder.ë.É=i*110;
    const square=image('/buildart/inv0.png','slot'+i);const caption=Object.assign(new NativeNode('caption'+i),{type:'text',text:String(i+1),ë:{É:0,Ä:75},fontSize:20,align:'center'});square.add(caption);holder.add(square);inventory.add(holder);
  }
  for(const path of ['wood','brick','metal','scrap','stack0','stack1','stack2','stack3','stack4']){
    const widget=rect('resource:'+path,'#000',60,80),icon=image('/buildart/'+path+'.png','icon:'+path);icon.width=icon.height=45;
    widget.add(icon);widget.add(Object.assign(new NativeNode('count:'+path),{type:'text',text:'100',fontSize:20,align:'center'}));inventory.add(widget);
  }
  stage.add(inventory);
  const nativeForEach=w.Array.prototype.forEach;
  w.eval(code);await flush();page.querySelector('#ready').click();
  const players=arr(),local=player(1,page.querySelector('#nameBox').value,0),remote=player(2,'other',1000);players.push(local,remote);
  const loot={id:3,type:'gun',â:new NativeNode('lootRoot'),âê:image('/buildart/scar.png','lootArt'),ÀÅ:image('/buildart/rarity3.png','lootGlow')};loot.ÀÅ.opacity=.7;loot.â.add(loot.âê);loot.â.âá(loot.ÀÅ);stage.add(loot.â);players.push(loot);
  const wall={id:4,type:'object',Àâ:'wall',åÈ:100,ËÆ:100,â:new NativeNode('wallRoot'),ÄA:rect('wallBody','#999',100,100)};wall.â.add(wall.ÄA);wall.â.add(image('/buildart/bluewood.png','placedBlue'));wall.â.add(image('/buildart/wood2.png','placedArt'));stage.add(wall.â);players.push(wall);
  const explicitPreview={id:5,type:'object',Àâ:'wall',AÀ:true,â:new NativeNode('explicitPreview')};explicitPreview.â.add(image('/buildart/bluewood.png','explicitBlue'));stage.add(explicitPreview.â);players.push(explicitPreview);
  stage.éa(ctx);await tick(3000);
  const S=w.__brio_unlocker_v52;assert.equal(S.renderer,local);assert(S.hudTemplates?.slots.length===5);
  const extras=Array.from(page.querySelectorAll('.brioModal')).find(n=>n.textContent.includes('BRIO Extras'));
  page.querySelector('.brioTerm [data-a=min]').click();page.querySelector('.brioTerm [data-a=extras]').click();assert.equal(extras.style.display,'flex','live tiers reachable from minimized terminal');
  extras.querySelector('[data-close]').click();assert.equal(extras.style.display,'none');page.querySelector('.brioTerm [data-a=extras]').click();
  const tab=name=>Array.from(extras.querySelectorAll('.brioTabs button')).find(n=>n.textContent===name).click();
  const control=id=>extras.querySelector('[data-extra-id="'+id+'"] input[type=checkbox]');
  const toggle=(id,value)=>{const n=control(id);assert(n,'missing '+id);assert(!n.disabled,'unexpected lock '+id);n.checked=value;n.dispatchEvent(new w.Event('change'));};
  const tier=(key,value)=>{const n=extras.querySelector('[data-challenge-tier="'+key+'"]');assert(!n.disabled);n.querySelector('[data-tier="'+value+'"]').click();};
  const draw=(...nodes)=>{paints.length=0;for(const n of nodes)n.éa(ctx);return [...paints];};
  const raw=()=>JSON.parse(w.localStorage.getItem('brio_extras_state'));
  const checkCombined=()=>{
    assert(S.meteorAutoTimer,'combined-only configuration must keep scoped scene discovery running');
    assert(!S.nearestTimer&&!S.indicatorTimer&&!S.botTimer,'combined disables modifier-owned timers');
    assert.equal(draw(loot.â,wall.â,explicitPreview.â,remote.ÄA,remote.ÁÆ,remote.Eå,remote.æE,remote.Eâ,crosshair,inventory,map,stormWorld,stormMap,hpHud).filter(x=>!['stormMap','teammateMapDot','hpHud','currentAmmo'].includes(x)).length,0);
    assert(draw(local.ÄA).includes('body1'),'native local body retained');
    assert.equal(remote.ÃÊ.opacity,.2,'name assistance disabled');assert(remote.æÄ.parent==null,'BRIO-added remote health bars detached');
    tab('Modifiers');for(const n of extras.querySelectorAll('.brioOpt > label input[type=checkbox]')){assert(n.disabled);assert(!n.checked);}
    for(const n of extras.querySelectorAll('.brioThresholds input,.brioThresholds button'))assert(n.matches(':disabled'));
    tab('Challenges');assert(control('monochrome').checked&&!control('monochrome').disabled);assert(control('flashlightMode').checked&&!control('flashlightMode').disabled);
    for(const id of ['playersInvisible','lootInvisible','buildsInvisible','noMinimap','noCrosshair','noInventoryHud','invisibleStorm','noChestsVisible','noHealthShieldHud']){assert(control(id).checked);assert(control(id).disabled);}
    assert.equal(extras.querySelector('[data-challenge-tier=lootMaskTier] [aria-pressed=true]').dataset.tier,'all');assert.equal(extras.querySelector('[data-challenge-tier=buildMaskTier] [aria-pressed=true]').dataset.tier,'all');
  };
  tab('Challenges');
  if(combinedStart){checkCombined();toggle('goodFlippinLuck',false);assert(S.nearestTimer&&S.indicatorTimer&&S.botTimer,'saved assistance restarts when preset is disabled');}
  // Reset each group independently; disabled groups block both typing and reset. Proven warning decisions are retained elsewhere.
  tab('Modifiers');assert(!extras.textContent.includes('Remove loot glow/effects'));
  for(const [kind,expected]of [['health',20],['ammo',[30,30,10,15,5,5]],['materials',[30,30,30,1]]]){
    const before=raw();extras.querySelector('[data-warning-reset='+kind+']').click();const after=raw();assert.deepEqual(after.warningThresholds[kind],expected);
    for(const other of ['health','ammo','materials'].filter(x=>x!==kind))assert.deepEqual(after.warningThresholds[other],before.warningThresholds[other]);
    assert.equal(after.lowAmmoWarning,before.lowAmmoWarning);
  }
  toggle('lowAmmoWarning',false);const saved=raw();extras.querySelector('[data-warning-reset=ammo]').click();assert.deepEqual(raw(),saved);toggle('lowAmmoWarning',true);
  for(const id of ['lowHealthWarning','lowAmmoWarning','lowMatsWarning','transparentFoliage']){assert(control(id).parentElement.textContent.includes('PROVEN'));assert(!control(id).parentElement.textContent.includes('ON FOR TEST'));}
  assert.equal(extras.querySelectorAll('.brioThresholds').length,3);
  for(const row of extras.querySelectorAll('.brioThresholds')){assert.equal(w.getComputedStyle(row).flexWrap,'nowrap');assert.equal(w.getComputedStyle(row.querySelector('label')).flexDirection,'row');}
  // One-click test setup persists its own reversible backup and preserves thresholds/cosmetics.
  const beforeProfile=raw(),cosmetics=w.localStorage.getItem('br_local_visuals');extras.querySelector('[data-test-setup=normal]').click();assert(raw().showBulletSpread&&raw().objectHealth&&raw().longerBulletTrails);assert(!raw().goodFlippinLuck);assert.deepEqual(raw().warningThresholds,beforeProfile.warningThresholds);assert.equal(w.localStorage.getItem('br_local_visuals'),cosmetics);
  extras.querySelector('[data-test-setup=restore]').click();assert.deepEqual(raw(),beforeProfile);assert.equal(w.localStorage.getItem('brio_test_backup'),null);
  const groups=[...extras.querySelectorAll('.brioGroup')].map(n=>n.textContent);for(const name of ['Indicators','Warnings','Player inventories','Content screening','Player information','World appearance','Miscellaneous'])assert(groups.includes(name));
  tab('Challenges');assert.equal(extras.querySelectorAll('[data-challenge-tier=lootMaskTier] button').length,5);assert.equal(extras.querySelectorAll('[data-challenge-tier=buildMaskTier] button').length,2);assert.equal(extras.querySelectorAll('[data-challenge-tier] select').length,0);toggle('lootInvisible',true);
  const tiers=[['item',false,true,false],['rarity',true,false,false],['popups',false,false,false],['locations',false,false,true],['all',false,false,false]];
  // The popup was created before injection: recover its exact native canvas/sprite relationship, not a screen-region guess.
  const top=new NativeNode('top');top.Ée='top';stage.add(top);const raster=page.createElement('canvas');raster.width=488;raster.height=128;
  const popup=Object.assign(new NativeNode('pickupPopup'),{type:'image',À:{ÁÄ:raster},width:480,height:120});top.add(popup);
  const unrelatedCanvas=page.createElement('canvas');unrelatedCanvas.width=500;unrelatedCanvas.height=128;
  const otherCanvasSprite=Object.assign(new NativeNode('unrelatedCanvasSprite'),{type:'image',À:{ÁÄ:unrelatedCanvas},width:480,height:120});top.add(otherCanvasSprite);
  const nativeAmmo={id:6,type:'ammo',â:new NativeNode('ammoLoot'),âê:image('/buildart/stack0.png','ammoArt'),ÀÅ:image('/buildart/rarity0.png','ammoGlow')};nativeAmmo.â.add(nativeAmmo.âê);nativeAmmo.â.add(nativeAmmo.ÀÅ);stage.add(nativeAmmo.â);players.push(nativeAmmo);
  await tick(1200);
  for(const [value,art,glow,outline]of tiers){
    tier('lootMaskTier',value);let seen=draw(loot.â);assert.equal(seen.includes('lootArt'),art,value);assert.equal(seen.includes('lootGlow'),glow,value);assert.equal(seen.includes('outline:#ffd21c'),outline,value);
    assert.equal(draw(popup).includes('pickupPopup'),!['locations','all'].includes(value),value+' popup');
    assert(draw(otherCanvasSprite).includes('unrelatedCanvasSprite'),'similar canvas dimensions alone cannot hide unrelated art');
    const ammoSeen=draw(nativeAmmo.â);assert.equal(ammoSeen.includes('ammoArt'),art,value+' ammo art');assert.equal(ammoSeen.includes('ammoGlow'),glow,value+' ammo glow');assert.equal(ammoSeen.includes('outline:#ffd21c'),outline,value+' ammo position');
    local.ÁãÀ='chest';assert(draw(popup).includes('pickupPopup'),'container prompt unaffected by loot-only mask');local.ÁãÀ='scar';
    loot.ÀÅ.add(new NativeNode('lateRarityParticle'));seen=draw(loot.â);assert.equal(seen.includes('lateRarityParticle'),glow,'future rarity children gated');
    assert.equal(loot.â.opacity,1);assert.equal(loot.âê.À.src,'/buildart/scar.png');
  }
  toggle('lootInvisible',false);loot.ÀÅ.opacity=.85;assert(draw(loot.â).includes('lootArt'));assert.equal(loot.ÀÅ.opacity,.85);
  // Blueprint mode preserves genuine aiming previews only, including an explicit isPreview entity that transitions to placed.
  toggle('buildsInvisible',true);tier('buildMaskTier','blueprints');assert.deepEqual(draw(wall.â),[]);assert(draw(local.ÁÆ).includes('preview1'));assert(draw(explicitPreview.â).includes('explicitBlue'));
  explicitPreview.AÀ=false;assert.deepEqual(draw(explicitPreview.â),[]);local.èÂ=false;assert.deepEqual(draw(local.ÁÆ),[]);local.èÂ=true;assert(draw(local.ÁÆ).includes('preview1'));
  tier('buildMaskTier','all');assert.deepEqual(draw(local.ÁÆ),[]);explicitPreview.AÀ=true;assert.deepEqual(draw(explicitPreview.â),[]);toggle('buildsInvisible',false);assert(draw(wall.â).includes('placedBlue'));
  // Player root/body gates cover native weapon replacements and future children, plus separately parented held preview/grapple.
  toggle('playersInvisible',true);remote.ä.À=resource('/buildart/topscar.png');remote.ÄA.add(image('/new-native-part.png','lateHeldChild'));
  assert.deepEqual(draw(remote.ÄA,remote.ä,remote.ÁÆ,remote.Eå,remote.æE),[]);assert(draw(local.ÄA).includes('held1'));
  await tick(12000);assert.equal(w.Array.prototype.forEach,nativeForEach);
  const trail=image('/buildart/trail0-0.png','trail'),customTrail=image('/cosmetics/trails/trail91-1.png','customTrail');top.add(trail);top.add(customTrail);trail.add(new NativeNode('lateTrailChild'));await tick(1000);
  assert.deepEqual(draw(trail,customTrail),[],JSON.stringify({scene:S.sceneScan,rootCount:S.sceneRoots?.size,topObserved:S.meteorObservers?.has(top),selected:raw().playersInvisible,branches:S.log.filter(l=>l.includes('NATIVE VISUAL BRANCH')||l.includes('ERROR')).slice(-12)}));assert.equal(trail.opacity,1,'native particle lifetime not changed');trail.opacity=.4;assert.equal(trail.opacity,.4);
  toggle('playersInvisible',false);assert(draw(remote.ÄA).includes('lateHeldChild'));assert(draw(trail,customTrail).includes('lateTrailChild'));
  // V51 reproduced: >4096 historical trail particles must not starve late builds/loot/projectiles/HUD.
  // Remove each native particle wrapper, leaving its child's parent intact, as real particle cleanup does.
  const retired=[];for(let i=0;i<4300;i++){const particle=new NativeNode('particle'+i),n=Object.assign(new NativeNode('stressTrail'),{type:'image',À:trail.À,width:40,height:40});particle.add(n);top.add(particle);n.éa(ctx);top.remove(particle);if(i%512===0)retired.push(n);}
  await tick(16000);const branchReport=JSON.parse(S.log.filter(l=>l.includes('CHALLENGE BRANCH COVERAGE')).at(-1).split('CHALLENGE BRANCH COVERAGE ')[1]);assert(!branchReport.automaticAudit.capHit,'historical particles exhausted active budget');assert(branchReport.automaticAudit.retiredAdapters>=4096,JSON.stringify(branchReport.automaticAudit));assert(branchReport.installed.trailParticles>=4302);assert(branchReport.adapterInstances<1000);for(const n of retired)assert.equal(n.éa,NativeNode.prototype.éa,'detached child wrapper not restored');
  const lateWall={id:82,type:'object',Àâ:'wall',â:new NativeNode('lateWallRoot'),ÄA:rect('lateWallBody','#999',80,150)};lateWall.â.add(lateWall.ÄA);lateWall.ÄA.add(image('/buildart/wood0.png','lateWallArt'));lateWall.ÄA.âá(image('/buildart/bluewood.png','latePlacedBlue'));stage.add(lateWall.â);players.push(lateWall);
  const lateBullet={id:83,type:'bullet',â:new NativeNode('lateBulletRoot')};lateBullet.â.add(new NativeNode('lateBulletArt'));stage.add(lateBullet.â);players.push(lateBullet);
  const lateLoot={id:84,type:'gun',â:new NativeNode('lateLootRoot'),âê:image('/buildart/vector.png','lateLootArt'),ÀÅ:image('/buildart/rarity5.png','lateLootGlow')};lateLoot.â.add(lateLoot.âê);lateLoot.â.âá(lateLoot.ÀÅ);stage.add(lateLoot.â);players.push(lateLoot);await tick(1200);
  toggle('goodFlippinLuck',true);assert.deepEqual(draw(lateWall.â,lateBullet.â,lateLoot.â),[]);toggle('goodFlippinLuck',false);for(const n of [lateWall.â,lateBullet.â,lateLoot.â])assert(draw(n).length>0);
  // Actual constructor-shaped empty inventory: no invN art yet, pickaxe and selected/build widgets are siblings.
  const emptyInventory=new NativeNode('native-empty-inventory');for(let i=0;i<6;i++){const h=new NativeNode('emptyHolder'+i);h.add(rect('emptySlot'+i,'#000',100,100));emptyInventory.add(h);}for(const type of ['wood','brick','metal','scrap']){const h=new NativeNode('emptyMatHolder');h.add(image('/buildart/'+type+'.png'));emptyInventory.add(h);}const lift=rect('selectedEmptySlot','#FFF',105,105);emptyInventory.add(lift);emptyInventory.add(image('/buildart/pickaxe.png','nativePickaxeSlot'));emptyInventory.add(image('/buildart/bluewood.png','buildSelector'));stage.add(emptyInventory);await tick(1200);
  toggle('noInventoryHud',true);assert.deepEqual(draw(emptyInventory),[]);emptyInventory.add(new NativeNode('lateBuildBinding'));assert.deepEqual(draw(emptyInventory),[]);toggle('noInventoryHud',false);assert(draw(emptyInventory).includes('selectedEmptySlot'));
  // Independent info challenge retains map/game controls while hiding source-shaped announcements and feed.
  const announcement=new NativeNode('announcement');announcement.âáE=200;announcement.add(Object.assign(new NativeNode('nativeAnnouncement'),{type:'text',fillStyle:'#E9B116',text:'Storm is closing',fontSize:40}));announcement.add(rect('announcementBackground','#000',600,80));stage.add(announcement);
  const feed=new NativeNode('feed');stage.add(feed);const feedRow=new NativeNode('feedRow');feedRow.add(rect('feedBackground','#000',300,50));for(const text of ['Player1','Eliminated','Player2'])feedRow.add(Object.assign(new NativeNode('feed:'+text),{type:'text',text,fontSize:26,align:'left'}));feed.add(feedRow);const prompt=Object.assign(new NativeNode('nativePrompt'),{type:'text',text:'Press Space to Pick Up'});top.add(prompt);await tick(1200);
  toggle('noInfoPopups',true);assert.deepEqual(draw(announcement,feed,prompt,popup),[]);assert(draw(mapHud).includes('playerCounter'));toggle('noInfoPopups',false);assert(draw(feed).includes('feed:Player1'));assert(draw(announcement).includes('nativeAnnouncement'));assert(draw(prompt).includes('nativePrompt'));
  // Independent HUD challenges hide the intended widgets and keep unrelated counters/art visible.
  for(const [id,node,hidden,retained]of [
    ['noMinimap',mapHud,['minimap','timer','playerCounter'],[]],['noCrosshair',crosshair,['cross0','hit'],[]],['noInventoryHud',inventory,['slot1','icon:wood','icon:stack0'],[]],
    ['noHealthShieldHud',hpHud,['hpIcon','shieldIcon','hpBar','shieldBar'],['currentAmmo']],['invisibleStorm',stormMap,['mapShade0','stormBorder'],['teammateMapDot']]
  ]){
    toggle(id,true);if(id==='noInventoryHud')assert(!draw(hpHud).includes('currentAmmo'),'No inventory leaked own ammo HUD');const seen=draw(node);for(const label of hidden)assert(!seen.includes(label),id+' leaked '+label);for(const label of retained)assert(seen.includes(label),id+' hid '+label);
    if(id==='invisibleStorm')assert.deepEqual(draw(stormWorld),[]);assert(draw(unrelated).includes('unrelated'));
    toggle(id,false);for(const label of hidden)assert(draw(node).includes(label),id+' failed restoration');
  }
  // The preset cannot silently erase saved modifiers/tier choices, and restoring assistance works without a new Play.
  toggle('lootInvisible',true);tier('lootMaskTier','rarity');toggle('lootInvisible',false);toggle('buildsInvisible',true);tier('buildMaskTier','blueprints');toggle('buildsInvisible',false);
  assert.equal(remote.ÃÊ.opacity,1);assert.equal(remote.æÄ.parent,remote.Eâ);
  const beforeCombined=raw();toggle('goodFlippinLuck',true);checkCombined();assert.equal(roof.À.ÁÄ,roofOriginal,'roof modifier restored immediately');
  const during=raw();for(const key of Object.keys(beforeCombined))if(key!=='goodFlippinLuck')assert.deepEqual(during[key],beforeCombined[key],key+' preference erased');
  local.ÁãÀ='chest';assert.deepEqual(draw(popup),[],'combined masks container proximity hints too');local.ÁãÀ='scar';
  toggle('goodFlippinLuck',false);assert.equal(remote.ÃÊ.opacity,1);assert.equal(remote.æÄ.parent,remote.Eâ);assert(draw(crosshair,inventory,map,stormMap,hpHud,wall.â).includes('slot1'));assert(draw(popup).includes('pickupPopup'));
  assert(S.nearestTimer&&S.indicatorTimer&&S.botTimer,'modifier timers restart after a live preset toggle');
  assert.equal(raw().lootMaskTier,'rarity');assert.equal(raw().buildMaskTier,'blueprints');
  // Preserve the native return value/error with gates disabled; native resources and descriptors remain original.
  const nativeMethod=NativeNode.prototype.éa;assert.equal(loot.âê.éa(ctx),'lootArt');loot.âê.explode=true;assert.throws(()=>loot.âê.éa(ctx),/native draw exception/);delete loot.âê.explode;
  // V52: real UI toggles plus constructor-shaped nodes cover additive render paths, boundaries and cleanup.
  assert(control('goodFlippinLuck').parentElement.textContent.includes('Hell'));
  assert(control('noMinimap').parentElement.textContent.includes('No map'));
  tab('Modifiers');
  const colorIds=['nearestPlayer','nearestChest','nearestAirdrop','safeZoneIndicator','lootIndicator'];
  for(const id of colorIds){assert(extras.querySelector('[data-indicator-color='+id+']'),'missing swatch '+id);}
  toggle('safeZoneIndicator',true);const swatch=extras.querySelector('[data-indicator-color=safeZoneIndicator]');assert.equal(swatch.value,'#168cff');swatch.value='#abcdef';swatch.dispatchEvent(new w.Event('input'));assert.equal(raw().indicatorColors.safeZoneIndicator,'#abcdef');
  toggle('buildHealth',true);
  for(const [hp,color]of [[100,'#20da50'],[76,'#20da50'],[75,'#ffd21c'],[51,'#ffd21c'],[50,'#ff851b'],[26,'#ff851b'],[25,'#ff3030'],[0,'#ff3030']]){wall.åÈ=hp;assert(draw(wall.â).includes('outline:'+color),'build health boundary '+hp);}
  wall.ËÆ=undefined;assert(!draw(wall.â).some(x=>x.startsWith('outline:')),'missing max does not imply red');wall.ËÆ=100;toggle('buildHealth',false);assert(!draw(wall.â).some(x=>x.startsWith('outline:')));
  const car={id:21,type:'car',åÈ:50,ËÆ:100,â:new NativeNode('carRoot'),ÄÀè:rect('carBody','#888',130,220)};car.â.add(car.ÄÀè);stage.add(car.â);players.push(car);
  const tree={id:22,type:'object',Àâ:'tree',åÈ:25,ËÆ:100,â:new NativeNode('treeRoot'),ÄA:rect('treeBody','#888',300,300)};tree.â.add(tree.ÄA);stage.add(tree.â);players.push(tree);await tick(2200);
  toggle('objectHealth',true);assert(draw(car.â).includes('outline:#ff851b'));assert(draw(tree.â).includes('outline:#ff3030'));toggle('objectHealth',false);
  // Alpha contour experiment: synthetic non-rectangular artwork must produce an edge mask once per image,
  // preserve transparent corners/interior, reuse tinted output on subsequent frames, and retain box fallback.
  const previousContext=w.HTMLCanvasElement.prototype.getContext;let reads=0,edgeMask=null,tints=0;
  w.HTMLCanvasElement.prototype.getContext=function(){const c=previousContext.call(this);c.getImageData=()=>{reads++;const data=new Uint8ClampedArray(128*128*4);for(let y=20;y<108;y++)for(let x=54;x<74;x++)data[(y*128+x)*4+3]=255;return{data};};c.createImageData=()=>({data:new Uint8ClampedArray(128*128*4)});c.putImageData=mask=>edgeMask=mask.data;return c;};
  const contour={id:87,type:'object',Àâ:'rock',åÈ:76,ËÆ:100,â:new NativeNode('contourRoot'),ÄA:image('/buildart/rock.png','contourArt')};contour.â.add(contour.ÄA);stage.add(contour.â);players.push(contour);await tick(1200);toggle('objectHealth',true);const oldDrawImage=ctx.drawImage;ctx.drawImage=function(im){if(this===ctx&&im?.tagName==='CANVAS'&&im.width===128)tints++;};draw(contour.â);assert(reads===1&&tints===1,JSON.stringify({reads,tints,last:S.log.slice(-3)}));assert(edgeMask[(64*128+52)*4+3]>0,'contour missing along actual artwork edge');assert.equal(edgeMask[(10*128+10)*4+3],0,'bounding rectangle corner incorrectly outlined');assert.equal(edgeMask[(64*128+64)*4+3],0,'opaque interior incorrectly outlined');draw(contour.â);assert.equal(reads,1,'alpha was read again per frame');assert.equal(tints,2);toggle('objectHealth',false);ctx.drawImage=oldDrawImage;w.HTMLCanvasElement.prototype.getContext=previousContext;
  toggle('highlightOwnedAmmo',true);nativeAmmo.âê.À=resource('/buildart/stack1.png');assert(draw(nativeAmmo.â).includes('outline:#34ff75'),'scar owns ammo index1');nativeAmmo.âê.À=resource('/buildart/stack4.png');assert(!draw(nativeAmmo.â).includes('outline:#34ff75'),'unowned ammo skipped');toggle('highlightOwnedAmmo',false);
  toggle('showBulletSpread',true);local.èÂ=false;local.ËÂ=4;const arcs=[];ctx.arc=(...args)=>arcs.push(args);draw(local.â);assert(arcs.some(a=>a[2]===600&&a[3]<0&&a[4]>0&&Math.abs(a[3]+a[4])<1e-10),'cone centers on native positive-X aim');arcs.length=0;local.Åé[1].type='pickaxe';draw(local.â);assert(!arcs.some(a=>a[2]===600),'pickaxe has no gun cone');local.Åé[1].type='scar';toggle('showBulletSpread',false);
  toggle('lootIndicator',true);const choice=extras.querySelector('[data-loot-choice="scar:4"]');assert(choice&&!choice.matches(':disabled'));choice.click();assert.equal(choice.getAttribute('aria-pressed'),'true');assert(raw().lootChoices.includes('scar:4'));
  loot.äã=4;loot.â.ë.É=3000;draw(local.â);await tick(500);let lootArrows=[...page.querySelectorAll('.brioArrow')].filter(n=>n.querySelector('img'));assert.equal(lootArrows.length,1,'selected offscreen pickup has one arrow '+JSON.stringify({clock,settings:raw().lootChoices,track:S.localTrack?.state,root:{position:loot.â.ë,visible:loot.â.visible,opacity:loot.â.opacity},last:S.log.slice(-4),errors:S.errors}));assert([...lootArrows[0].querySelectorAll('img')].some(n=>n.src.endsWith('inv4.png')));assert([...lootArrows[0].querySelectorAll('img')].some(n=>n.src.endsWith('scar.png')));
  loot.â.ë.É=0;draw(local.â);await tick(500);assert.equal([...page.querySelectorAll('.brioArrow')].filter(n=>n.querySelector('img')).length,0,'onscreen loot hides arrow');loot.â.ë.É=3000;loot.Äã=true;await tick(500);assert.equal([...page.querySelectorAll('.brioArrow')].filter(n=>n.querySelector('img')).length,0,'removed loot cannot leave arrow');loot.Äã=false;toggle('lootIndicator',false);
  tab('Challenges');
  const fullMap=new NativeNode('fullMap');fullMap.Ée='mapScene';fullMap.add(new NativeNode('mapTerrain'));stage.add(fullMap);
  const reload=new NativeNode('reload'),arc=Object.assign(new NativeNode('reloadArc'),{type:'arc',éã:33,Äe:'#FFF'}),reloadText=Object.assign(new NativeNode('reloadText'),{type:'text',fontSize:22}),reloadBack=Object.assign(new NativeNode('reloadBack'),{type:'circle',éã:40,Äe:'#000'});for(const n of [arc,reloadText,reloadBack])reload.add(n);stage.add(reload);
  const charge=new NativeNode('charge');charge.Àä_=Array.from({length:8},()=>rect('chargeCell','#0D0',10,18));charge.Eé_=3;charge.Æéá=8;charge.èeÊ=rect('chargeProgress','#1ADAE0',70,6);charge.add(charge.èeÊ);for(const n of charge.Àä_)charge.add(n);stage.add(charge);
  local.Áa=arr();const damageText=new NativeNode('damageText');local.Áa.push(damageText);stage.add(damageText);
  const bullet={id:23,type:'bullet',â:new NativeNode('bulletRoot')};bullet.â.add(new NativeNode('bulletArt'));stage.add(bullet.â);players.push(bullet);
  const throwable={id:24,type:'throwable',â:new NativeNode('throwableRoot')};throwable.â.add(new NativeNode('throwableArt'));stage.add(throwable.â);players.push(throwable);await tick(2200);draw(stage);
  for(const [id,nodes,hidden,kept]of [['noMinimap',[fullMap],['mapTerrain'],[]],['noHitMarker',[crosshair],['hit','hit1','hit2','hit3'],['cross0']],['noWeaponProgress',[reload,charge],['reloadText','chargeProgress','chargeCell'],[]],['noDamageNumbers',[damageText],['damageText'],[]],['noStormTimer',[mapHud],['timer','countdown'],['minimap','playerCounter']],['invisibleProjectiles',[bullet.â,throwable.â,trail],['bulletArt','throwableArt','trail'],[]],['hideWeapons',[local.ÄA,remote.ÄA,local.ÁÆ],['held1','held2','preview1'],['body1','body2']]]){
    toggle(id,true);const seen=draw(...nodes);for(const label of hidden)assert(!seen.includes(label),id+' leaked '+label);for(const label of kept)assert(seen.includes(label),id+' hid '+label);toggle(id,false);for(const label of hidden)assert(draw(...nodes).includes(label),id+' did not restore '+label);
  }
  // New damage children must be silenced on their first player draw, rather than waiting for a scan tick.
  toggle('noDamageNumbers',true);const lateDamage=new NativeNode('lateDamage');local.Áa.push(lateDamage);stage.add(lateDamage);draw(local.â);assert.deepEqual(draw(lateDamage),[]);toggle('noDamageNumbers',false);
  tab('Modifiers');toggle('longerBulletTrails',true);bullet.â.ë.É=10;draw(bullet.â);await tick(40);bullet.â.ë.É=50;draw(bullet.â);let lines=0;ctx.lineTo=()=>lines++;draw(local.â);assert(lines>0,'observed projectile history rendered');bullet.Äã=true;await tick(1300);lines=0;draw(local.â);assert.equal(lines,0,'history expires without more projectile draws');toggle('longerBulletTrails',false);
  // Observe unchanged native decode identity; native terminal totals plus bounded local events drive both win/loss sheets.
  const packet={t:'circle',circle:{position:[100,200],radius:2000},state:'waiting'};assert.equal(w.msgpack.decode(packet),packet);draw(local.â);await tick(500);assert(S.safeZoneUi&&S.safeZoneUi.querySelector('.d').textContent.includes('m'));
  w.msgpack.decode({t:'circle',state:'moving'});w.msgpack.decode({t:'circle',circle:{position:[0,0],radius:8950},state:'moving'});await tick(16000);let zoneReport=JSON.parse(S.log.filter(l=>l.includes('CHALLENGE BRANCH COVERAGE')).at(-1).split('CHALLENGE BRANCH COVERAGE ')[1]);assert.equal(zoneReport.v52.zone.x,100);assert.equal(zoneReport.v52.zone.radius,2000);
  w.msgpack.decode({t:'circle',circle:{position:[300,400],radius:1000},state:'waiting'});w.msgpack.decode({t:'circle',circle:{position:[100,200],radius:1800},state:'moving'});await tick(16000);zoneReport=JSON.parse(S.log.filter(l=>l.includes('CHALLENGE BRANCH COVERAGE')).at(-1).split('CHALLENGE BRANCH COVERAGE ')[1]);assert.equal(zoneReport.v52.zone.x,300);assert.equal(zoneReport.v52.zone.radius,1000);
  w.msgpack.decode({t:'setID',i:1});w.msgpack.decode({t:'elim',name:'<b>opponent</b>',knock:false});w.msgpack.decode({t:'y',a:[1],hLost:13,sLost:20});w.msgpack.decode({t:'y',a:[1,0,0,0],spread:400});w.msgpack.decode({t:'x',p:[90,'bullet',0,0,3,true],pi:1,bulletType:'scar'});
  const end=page.createElement('div');end.id='deathscreen';end.innerHTML='<h1>Native heading</h1><div class="statsContainer"></div><div class="topContainer"></div><div id="deathPass"><div class="passHolder" style="display:grid">Battle pass</div></div><button>Play again</button>';page.body.appendChild(end);
  for(const place of [2,1]){
    if(place===1){page.querySelector('#ready').click();await tick(3000);assert.equal(page.querySelector('[data-brio-postgame]'),null,'Play restores the original panel');assert.equal(end.querySelector('.passHolder').style.display,'grid');}
    const terminal={t:'death',place,eliminations:2,damageToEnemies:230,wallsBuilt:7,timeAlive:60,name:'killer'};assert.equal(w.msgpack.decode(terminal),terminal);await tick(500);const sheet=page.querySelector('[data-brio-postgame]');assert(sheet,'postgame sheet missing');assert(sheet.querySelector('[data-stat-grid]'));if(place===2){const audit=JSON.parse(S.log.filter(l=>l.includes('V52 AUTOMATIC AUDIT')).at(-1).split('V52 AUTOMATIC AUDIT ')[1]);assert(audit.shotComparisons.some(x=>x.weapon==='scar'&&x.serverSamples===1&&x.examples[0].serverHalfDegrees===4));}assert(sheet.querySelectorAll('[data-stat-grid] article').length>=10);for(const n of sheet.querySelectorAll('[data-stat-grid] article div'))assert.notEqual(n.style.color,'rgb(0, 0, 0)');assert(sheet.textContent.includes('#'+place));assert(sheet.textContent.includes('230'));assert(sheet.textContent.includes('unavailable'));assert.equal(sheet.querySelector('b'),null,'player names remain text');assert.equal(end.querySelector('.passHolder').style.display,'none');assert.equal(end.querySelector('h1').textContent,'Native heading');
    end.querySelector('.statsContainer').style.display='none';await tick(500);assert.equal(sheet.style.display,'none','dedicated Battle Pass browse preserves native view');assert.equal(end.querySelector('.passHolder').style.display,'grid');end.querySelector('.statsContainer').style.display='';await tick(500);assert.equal(sheet.style.display,'');
  }
  assert(decodeCalls>5);tab('Challenges');toggle('goodFlippinLuck',true);for(const id of ['noPickupLabels','noHitMarker','noDamageNumbers','noWeaponProgress','invisibleProjectiles','hideWeapons','noStormTimer'])assert(control(id).checked&&control(id).disabled);toggle('goodFlippinLuck',false);
  const logCount=S.log.length;page.querySelector('#ready').click();await tick(14000);assert(S.log.length>logCount);assert.equal(S.renderer,null);assert.equal(loot.âê.éa,nativeMethod);assert.equal(trail.éa,nativeMethod);assert.equal(remote.ÃÊ.opacity,.2);assert.equal(remote.æÄ.parent,null);
  assert.equal(w.Array.prototype.forEach,nativeForEach);S.destroy();assert.equal(page.querySelectorAll('.brioModal').length,0);assert.deepEqual([...S.errors],[]);
  dom.window.close();console.log('V50 carry-forward challenges passed (V52)',JSON.stringify({own,combinedStart}));
}
(async()=>{for(const settings of [{own:false},{own:true},{own:false,combinedStart:true}])await run(settings);})().catch(e=>{console.error(e);process.exitCode=1;});
