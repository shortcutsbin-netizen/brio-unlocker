// V50 integration checks use the actual console payload and actual Extras controls. Native fixtures preserve
// constructor/child ownership and draw-entry relationships recovered from the supplied engine; no game source runs.
const fs = require('fs'), assert = require('node:assert/strict'), {JSDOM} = require('jsdom');
const code = fs.readFileSync(process.argv[2] || 'src/brio.js','utf8');

async function run({own=false,combinedStart=false}={}) {
  const dom = new JSDOM('<button id="loggedInLocker">Locker</button><button id="loggedInShop">Shop</button><button id="ready">Play</button><input id="nameBox" maxlength="30" value="tester"><canvas id="game"></canvas>',{url:'https://buildroyale.io/',runScripts:'outside-only'});
  const w=dom.window, page=w.document;Object.defineProperty(page,'hidden',{configurable:true,value:false}); let clock=0, next=0; const timers=new Map, paints=[];
  // Track only sidebar-owned global listeners, to verify active drag cancellation/teardown.
  const sidebarListeners=new Map(['pointermove','pointerup','pointercancel','resize'].map(k=>[k,new Set])),addListener=w.addEventListener,removeListener=w.removeEventListener;
  w.addEventListener=function(type,fn,...rest){sidebarListeners.get(type)?.add(fn);return addListener.call(this,type,fn,...rest);};
  w.removeEventListener=function(type,fn,...rest){sidebarListeners.get(type)?.delete(fn);return removeListener.call(this,type,fn,...rest);};

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
  const ctx={canvas,setTransform(){},save(){},restore(){},translate(){},rotate(){},scale(){},beginPath(){},closePath(){},moveTo(){},lineTo(){},arc(){},clip(){},rect(){},fill(){},stroke(){},drawImage(){},createRadialGradient(...args){return {args,addColorStop(){}};},fillRect(){if(this.fillStyle?.args)paints.push('mask:'+JSON.stringify({args:this.fillStyle.args,alpha:this.globalAlpha}));},fillText(){},strokeText(){},getTransform:()=>({a:1,b:0,c:0,d:1,e:500,f:400}),measureText:t=>({width:String(t).length*5}),strokeRect(){paints.push('outline:'+this.strokeStyle);}};
  w.HTMLCanvasElement.prototype.getContext=function(){return {...ctx,canvas:this};};
  w.HTMLCanvasElement.prototype.toDataURL=()=> 'data:image/png;base64,blank';
  Object.defineProperty(w.HTMLImageElement.prototype,'src',{configurable:true,get(){return this._src||'';},set(v){this._src=v;this.width=this.height=300;Object.defineProperties(this,{naturalWidth:{configurable:true,value:300},naturalHeight:{configurable:true,value:300}});w.queueMicrotask(()=>this.onload?.());}});
  let decodeCalls=0;const nativeDecode=packet=>{decodeCalls++;return packet;};w.msgpack={decode:nativeDecode};
  w.fetch=async()=>({ok:true,text:async()=>fs.readFileSync('docs/game-sources/engine.js','utf8')});w.AbortController=global.AbortController;
  w.indexedDB={open(){const r={result:{objectStoreNames:{contains:()=>true},transaction:()=>({objectStore:()=>({getAll(){const x={result:[]};w.queueMicrotask(()=>x.onsuccess?.());return x;}})}),close(){}}};w.queueMicrotask(()=>r.onsuccess?.());return r;}};
  const preferences={showBulletSpread:true,spreadColor:'#ff0000',spreadSize:'xl',stormDistance:true,noStormTimer:true,screenChests:true,screenAirdrops:true,screenFishing:true,contentsReconFocus:true,goodFlippinLuck:combinedStart,monochrome:true,flashlightMode:true,transparentRoofs:true,transparentFoliage:true,healthBars:true,numericHealthShield:true,playerNames:true,identifyBots:true,nearestPlayer:true,nearestPlayerName:true,nearestChest:true,nearestAirdrop:true,permanentMeteor:true,allTrailsInvisible:false,allGlidersInvisible:false,inventorySlots:true,inventoryMaterials:true,inventoryAmmo:true,lowHealthWarning:true,lowAmmoWarning:true,lowMatsWarning:true,warningThresholds:{health:55,ammo:[1,2,3,4,5,6],materials:[11,12,13,14]},lootMaskTier:'item',buildMaskTier:'blueprints',cleanLoot:true};
  w.localStorage.setItem('brio_spread_recon_v55','{"historical":"preserve exact bytes"}');w.localStorage.setItem('brio_extras_state',JSON.stringify(preferences));w.localStorage.setItem('br_local_visuals','{}');
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
      if(this.A)context.rotate(this.A);const result=this.Eââ(context,scale/this.size);for(const key of ['âè','ÉE'])this[key].forEach(n=>n.éa?.(context,scale,alpha));if(this.A)context.rotate(-this.A);return result;
    }
  }
  const resource=path=>{const image=new w.Image;image.src=path;image['ÀA']=1;return{src:path,ÁÄ:image};};
  const image=(path,label=path)=>Object.assign(new NativeNode(label),{type:'image',À:resource(path),width:100,height:100});
  const rect=(label,color,width,height,x=0,y=0)=>Object.assign(new NativeNode(label),{type:'rectangle',Äe:color,width,height,ë:{É:x,Ä:y}});
  const stage=new NativeNode('stage');w.testNativeStage=stage;const hudScene=new NativeNode('native-own-HUD');stage.add(hudScene);const top=new NativeNode('top');top.Ée='top';stage.add(top);
  const player=(id,name,x)=>{
    const r={id,type:'player',Ée:name,â:new NativeNode('player-root'+id),ÄA:new NativeNode('physical'+id),Eâ:new NativeNode('info'+id),Ëå:image('/native-body.png','body'+id),head:image('/native-head.png','head'+id),ä:image('/native-pickaxe.png','held'+id),ÉãÂ:resource('/native-pickaxe.png'),Ëé:'trail0-',åëÅ:3,ÆÃÅ:'nativewrap',Åé:[{type:'pickaxe'},{type:'scar',äã:3}],áAæ:[30],ÈÆ:1,åÈ:25,Â$:40,ÊÃÄ:[100,100,100,100],åæ:[100,100,100,100,100],ÁãÀ:'scar',èÂ:true,ée:false};
    r.Êáe=new NativeNode('native-muzzle');r.Êáe.ë={É:-61,Ä:0};r.ä.add(r.Êáe);r.ä.A=Math.PI/2+.01;r.â.ë.É=x;r.â.add(r.ÄA);r.â.add(r.Eâ);r.ÄA.add(r.Ëå);r.ÄA.add(r.head);r.ÄA.add(r.ä);
    r.ÁÆ=image('/buildart/bluewood.png','preview'+id);r.Eå=image('/buildart/grapple.png','grapple'+id);r.æE=image('/buildart/rope.png','rope'+id);
    r.ÄÊâ=image('/buildart/emote0.png','emote'+id);r.ÂÅ=image('/native-glider.png','glider'+id);r.ÄA.add(r.ÂÅ);r.äÀÊ=r.ÂÅ.À;
    r.ÃÊ=new NativeNode('name'+id);r.ÃÊ.opacity=.2;r.Eâ.add(r.ÃÊ);r.ÁÄå=new NativeNode('damage-direction'+id);r.Èâã=image('/buildart/redarrow.png','red-damage-arrow'+id);r.ÁÄå.add(r.Èâã);r.ÁÄå.opacity=.5;r.Eâ.add(r.ÁÄå);
    r.æÄ=rect('hp'+id,'#0D0',60,10,0,50);r.AÃå=rect('shield'+id,'#48F',60,4,0,30);
    for(const k of ['áË','ÄÂ','ÄãÀ','èÅ']){r[k]=new NativeNode(k+id);r.ÄA.add(r[k]);}
    for(const n of [r.â,r.ÁÆ,r.Eå,r.æE])stage.add(n);return r;
  };
  const roof=image('/buildart/barnroof.png','roof');stage.add(roof);const roofOriginal=roof.À.ÁÄ;
  const hpHud=new NativeNode('hpHud'),hpIcon=image('/buildart/health.png','hpIcon'),shieldIcon=image('/buildart/shield.png','shieldIcon');hpIcon.ë.Ä=-40;shieldIcon.ë.Ä=-75;
  const hpBar=rect('hpBar','#0C0',300,20,275,-40),shieldBar=rect('shieldBar','#48F',300,20,275,-75),currentAmmo=image('/buildart/empty.png','currentAmmo');currentAmmo.width=currentAmmo.height=40;currentAmmo.ë.Ä=-155;
  for(const n of [hpIcon,shieldIcon,hpBar,shieldBar,currentAmmo])hpHud.add(n);const ownHudName=Object.assign(new NativeNode('ownHudName'),{type:'text',text:'uL#tester',fontSize:26,align:'left',ë:{É:0,Ä:-110}});hpHud.add(ownHudName);const unrelatedHudText=Object.assign(new NativeNode('unrelatedHudText'),{type:'text',text:'Other status',fontSize:26,align:'left',ë:{É:0,Ä:25}});hudScene.add(unrelatedHudText);hudScene.add(hpHud);
  const mapHud=new NativeNode('mapHud'),map=image('/buildart/empty.png','minimap');map.width=map.height=250;
  map.Eââ=function(context){context.drawImage();paints.push('minimap');return 'native map';};
  const waiting=image('/buildart/timer.png','timer');waiting.width=waiting.height=32;waiting.add(Object.assign(new NativeNode('countdown'),{type:'text',text:'0:30'}));mapHud.add(image('/buildart/playersIcon.png','playerCounter'));mapHud.add(map);mapHud.add(waiting);hudScene.add(mapHud);
  const stormWorld=new NativeNode('stormWorld');stormWorld.Ée='borderScene';stormWorld.add(rect('worldShade','#F00',100,400,-250,0));stormWorld.add(rect('worldRight','#F00',100,400,250,0));stormWorld.add(rect('worldTop','#F00',600,100,0,-250));stormWorld.add(rect('worldBottom','#F00',600,100,0,250));stage.add(stormWorld);
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
    widget.add(icon);widget.add(Object.assign(new NativeNode('count:'+path),{type:'text',text:'100',fontSize:20,align:'center'}));if(['wood','brick','metal','scrap'].includes(path)){const wrapper=new NativeNode('material-wrapper:'+path);wrapper.add(widget);inventory.add(wrapper);}else inventory.add(widget);
  }
  const selection=rect('selected-inventory','#FFF',105,105);selection.lineWidth=5;inventory.add(selection);const switchSlot=image('/buildart/switch.png','switch-inventory');inventory.add(switchSlot);inventory['âè'][0]['âè'][0].add(image('/native-pickaxe.png','inventory-pickaxe'));
  hudScene.add(inventory);
  const startupInventory=new NativeNode('initial-empty-inventory');
  for(let i=0;i<6;i++){const holder=new NativeNode('initial-holder'+i);holder.add(rect('initial-empty-slot'+i,'#000',100,100));startupInventory.add(holder);}
  for(const path of ['wood','brick','metal','scrap']){const wrapper=new NativeNode('initial-mat-wrapper'),square=rect('initial-mat-square','#000',60,80);square.add(image('/buildart/'+path+'.png','initial-mat-'+path));wrapper.add(square);startupInventory.add(wrapper);}
  const emptySelected=rect('initial-selection','#FFF',105,105);emptySelected.lineWidth=5;startupInventory.add(emptySelected);
  startupInventory.add(Object.assign(new NativeNode('source-Q'),{type:'text',text:'Press Q to Build'}));startupInventory.add(Object.assign(new NativeNode('source-Tab'),{type:'text',text:'Press Tab to Manage Inventory'}));
  for(let i=0;i<40;i++)startupInventory.add(Object.assign(new NativeNode('extra-native-build-label'+i),{type:'text',text:'binding'+i}));stage.add(startupInventory);
  top.add(Object.assign(new NativeNode('waitingStatus'),{type:'text',text:'Storm closing in'}));top.add(Object.assign(new NativeNode('killFeed'),{type:'text',text:'Native kill feed'}));w['Åèa']={};
  const nativeForEach=w.Array.prototype.forEach,nativePush=w.Array.prototype.push,nativeUnshift=w.Array.prototype.unshift;
  w.requestAnimationFrame=fn=>w.setTimeout(()=>fn(clock),16);w.cancelAnimationFrame=w.clearTimeout;Object.assign(ctx,{ellipse(){},clearRect(){}});
  page.body.insertAdjacentHTML('beforeend',`<img id=logobr src=/buildart/logo5.png><div id=buildroyale-io_970x250><iframe title=ad></iframe></div><div id=buildroyale-io_300x250><div class=ad>Native ad</div></div>`);
  w.eval(code);await flush();page.querySelector('#ready').click();
  const players=arr(),local=player(1,page.querySelector('#nameBox').value,0),remote=player(2,'other',1000);players.push(local,remote);const dormantChest={id:99001,type:'chest',â:new NativeNode('retired-chest'),new:{ë:{É:300,Ä:400}}};stage.add(dormantChest.â);players.push(dormantChest);
  const loot={id:3,type:'gun',â:new NativeNode('lootRoot'),âê:image('/buildart/scar.png','lootArt'),ÀÅ:image('/buildart/rarity3.png','lootGlow')};loot.ÀÅ.opacity=.7;loot.â.add(loot.âê);loot.â.âá(loot.ÀÅ);stage.add(loot.â);players.push(loot);
  const wall={id:4,type:'object',Àâ:'wall',åÈ:100,ËÆ:100,â:new NativeNode('wallRoot'),ÄA:rect('wallBody','#999',100,100)};wall.â.add(wall.ÄA);wall.â.add(image('/buildart/bluewood.png','placedBlue'));wall.â.add(image('/buildart/wood2.png','placedArt'));stage.add(wall.â);players.push(wall);
  const explicitPreview={id:5,type:'object',Àâ:'wall',AÀ:true,â:new NativeNode('explicitPreview')};explicitPreview.â.add(image('/buildart/bluewood.png','explicitBlue'));stage.add(explicitPreview.â);players.push(explicitPreview);
  stage.éa(ctx);await tick(3000);
  const S=w.__brio_unlocker_v69;assert.equal(S.v,'69');assert.equal(S.renderer,local);assert(S.hudTemplates?.slots.length===5);assert.equal(page.querySelector('.brioTerm'),null);
  assert.equal(page.querySelectorAll('[data-brio-home=social]').length,1);assert.equal(page.querySelectorAll('[data-brio-home=session]').length,1);assert(page.querySelector('#logobr').src.includes('logo-review.webp'));assert.equal(page.querySelector('.bu-discord-badge').tagName,'SPAN');assert(!page.querySelector('.bu-discord-badge').closest('a'));
  const extras=page.querySelector('[data-brio-menu=extras]'),locker=page.querySelector('[data-brio-menu=locker]');page.querySelector('.brioSettings').click();assert.equal(extras.style.display,'flex');assert(extras.textContent.includes('v69'));
  const raw=()=>JSON.parse(w.localStorage.getItem('brio_extras_state'));
  const openTab=kind=>extras.querySelector('[data-extra-tab='+kind+']').click();
  const groups={modifiers:[['Indicators',['nearestPlayer','nearestPlayerName','nearestChest','nearestAirdrop','safeZoneIndicator','stormCenter','lootIndicator']],['Warnings',['lowHealthWarning','lowAmmoWarning','lowMatsWarning']],['Inventories',['inventorySlots','inventoryMaterials','inventoryAmmo','inventorySize']],['Players',['healthBars','numericHealthShield','playerNames','highContrastPlayers']],['World',['transparentRoofs','transparentFoliage','buildHealth','objectHealth','stormEdge','allGlidersInvisible','allTrailsInvisible','permanentMeteor']],['Aim & trails',['customCrosshair','highlightOwnedAmmo','longerBulletTrails']]],challenges:[['Visibility',['playersInvisible','lootInvisible','buildsInvisible','invisibleStorm','noChestsVisible','invisibleProjectiles','hideWeapons']],['HUD & feedback',['noMinimap','noCrosshair','noInventoryHud','noHealthShieldHud','noInfoPopups','noPickupLabels','noHitMarker','noDamageDirection','noDamageNumbers','noWeaponProgress']],['Visual modes',['monochrome','flashlightMode']]]};
  function control(id){if(id==='goodFlippinLuck'){openTab('challenges');return extras.querySelector('[data-toggle='+id+']');}for(const [kind,list]of Object.entries(groups))for(const [name,ids]of list)if(ids.includes(id)){openTab(kind);[...extras.querySelectorAll('[data-group]')].find(n=>n.dataset.group===name).click();return extras.querySelector('[data-toggle='+id+']');}throw Error('Unknown control '+id);}
  function toggle(id,value){const n=control(id);assert(n&&!n.disabled,id+' unavailable');if(n.checked!==value)n.click();assert.equal(!!raw()[id],value);}
  const draw=(...nodes)=>{paints.length=0;for(const n of nodes)n.éa(ctx,1,1);return [...paints];};
  toggle('goodFlippinLuck',false);
  const seen=new Set;for(const kind of Object.keys(groups)){openTab(kind);for(const [name]of groups[kind]){[...extras.querySelectorAll('[data-group]')].find(n=>n.dataset.group===name).click();for(const n of extras.querySelectorAll('[data-extra-id]'))seen.add(n.dataset.extraId);}}seen.add('goodFlippinLuck');assert.equal(seen.size,49);
  const desc=JSON.parse(fs.readFileSync('docs/design/d4/descriptions.json'));openTab('challenges');assert.equal(extras.querySelector('.bu-hell-description').textContent,desc.hell);openTab('modifiers');assert.equal(extras.querySelector('.bu-preset-description').textContent,desc.advantages);
  // Every excluded modifier is cleared, individual challenge/tier/colors/cosmetics preserved, later edits persist.
  for(const id of groups.modifiers.flatMap(x=>x[1]).filter(x=>x!=='inventorySize'))toggle(id,true);
  toggle('noMinimap',true);const before=raw(),savedCosmetics=w.localStorage.getItem('br_local_visuals');openTab('modifiers');extras.querySelector('[data-advantages]').click();
  const included=require('../src/production/preset').included;for(const id of groups.modifiers.flatMap(x=>x[1]).filter(x=>x!=='inventorySize'))assert.equal(raw()[id],included.includes(id),id);assert.equal(raw().inventorySize,'large');assert.deepEqual(raw().warningThresholds,{health:20,ammo:[30,30,10,15,5,5],materials:[30,30,30,1]});assert(raw().noMinimap);assert.deepEqual(raw().indicatorColors,before.indicatorColors);assert.equal(w.localStorage.getItem('br_local_visuals'),savedCosmetics);toggle('nearestPlayer',false);await tick(1500);assert(!raw().nearestPlayer);toggle('nearestPlayer',true);
  // Source-backed standalone scene with OWN draw, never attached to stage/discovery. Both front/back arrays suppressed; unrelated status untouched.
  const standalone=new NativeNode('standalone');standalone.Ée='mapScene';standalone.éa=function(context=ctx,scale=1,alpha=1){this.ÉE.forEach(n=>n.éa(context,scale,alpha));this.âè.forEach(n=>n.éa(context,scale,alpha));};standalone.add(new NativeNode('full-map-front'));standalone.âá(new NativeNode('full-map-back'));
  let getterReads=0,callbackCalls=0;const indexed=new w.Array(1);Object.defineProperty(indexed,'0',{get(){getterReads++;return 3;}});w.Array.prototype.forEach.call(indexed,value=>{assert.equal(value,3);callbackCalls++;});assert.equal(getterReads,1,'map guard must preserve indexed accessor count');assert.equal(callbackCalls,1);const borrowed={length:0,get 0(){getterReads++;return 7;}};w.Array.prototype.forEach.call(borrowed,()=>{throw Error('unexpected callback');});assert.equal(getterReads,1,'borrowed zero-length forEach must not read index0');
  assert.deepEqual(draw(standalone),[]);assert(draw(unrelatedHudText).includes('unrelatedHudText'));toggle('noMinimap',false);assert.deepEqual(draw(standalone),['full-map-back','full-map-front']);toggle('noMinimap',true);assert.deepEqual(draw(standalone),[]);toggle('noMinimap',false);
  // Actual native challenge behavior, paired with production controls.
  for(const id of groups.challenges.flatMap(x=>x[1]))toggle(id,false);
  const wallOriginal=wall.ÄA.éa,lootOriginal=loot.âê.éa;
  toggle('playersInvisible',true);assert(!draw(remote.ÄA).includes('body2'));assert(draw(local.ÄA).includes('body1'));toggle('playersInvisible',false);assert(draw(remote.ÄA).includes('body2'));
  toggle('lootInvisible',true);function tier(key,value){const id=key==='lootMaskTier'?'lootInvisible':'buildsInvisible';control(id);extras.querySelector('[data-tier="'+key+':'+value+'"]').click();}
  for(const [value,art,glow]of [['item',false,true],['rarity',true,false],['popups',false,false],['locations',false,false],['all',false,false]]){tier('lootMaskTier',value);const result=draw(loot.â);assert.equal(result.includes('lootArt'),art,value+' art');assert.equal(result.includes('lootGlow'),glow,value+' glow');}toggle('lootInvisible',false);assert(draw(loot.â).includes('lootArt'));
  toggle('buildsInvisible',true);tier('buildMaskTier','all');assert(!draw(wall.â).includes('wallBody'));assert(!draw(explicitPreview.â).includes('explicitBlue'));tier('buildMaskTier','blueprints');assert(draw(explicitPreview.â).includes('explicitBlue'));toggle('buildsInvisible',false);assert(draw(wall.â).includes('wallBody'));
  toggle('noInventoryHud',true);assert(!draw(inventory,hpHud).includes('ownHudName'));assert(!draw(inventory).includes('slot0'));toggle('noInventoryHud',false);assert(draw(hpHud).includes('ownHudName'));
  toggle('noMinimap',true);assert(!draw(map).includes('minimap'));assert(!draw(map).includes('mapCountdown'));assert(draw(top).includes('waitingStatus'));toggle('noMinimap',false);
  toggle('noHealthShieldHud',true);assert(!draw(hpHud).includes('hpBar'));assert(draw(hpHud).includes('currentAmmo'));toggle('noHealthShieldHud',false);
  toggle('noDamageDirection',true);assert(!draw(local.Eâ).includes('red-damage-arrow1'));toggle('noDamageDirection',false);assert(draw(local.Eâ).includes('red-damage-arrow1'));
  // All 36 approved crosshairs are inline and actual persisted glyph selections; colors/thresholds/tiers have production controls.
  toggle('customCrosshair',true);assert.equal(extras.querySelectorAll('[data-shape]').length,36);extras.querySelector('[data-reticle=shape35]').click();assert.equal(raw().reticleStyle,'shape35');extras.querySelector('[data-color="reticle:#25d4da"]').click();assert.equal(raw().reticleColor,'#25d4da');const seenColors=[],oldStroke=ctx.stroke;ctx.stroke=function(){seenColors.push(this.strokeStyle);};draw(crosshair);ctx.stroke=oldStroke;assert(seenColors.includes('#25d4da'),'native custom crosshair must paint selected color');
  toggle('lowAmmoWarning',true);let n=extras.querySelector('[data-threshold="ammo:5"]');n.value='8';n.dispatchEvent(new w.Event('change'));assert.equal(raw().warningThresholds.ammo[5],8);extras.querySelector('[data-reset-warning=ammo]').click();assert.equal(raw().warningThresholds.ammo[5],5);
  toggle('goodFlippinLuck',true);for(const id of groups.modifiers.flatMap(x=>x[1]).filter(x=>x!=='inventorySize')){const n=control(id);assert(n.disabled&&!n.checked,id);}for(const id of groups.challenges.flatMap(x=>x[1]).filter(x=>!['monochrome','flashlightMode'].includes(x))){const n=control(id);assert(n.disabled&&n.checked,id);}assert.deepEqual(draw(standalone),[]);assert(draw(top).includes('waitingStatus'));assert(draw(top).includes('killFeed'));toggle('goodFlippinLuck',false);assert.deepEqual(draw(standalone),['full-map-back','full-map-front']);
  // Dynamic catalogue and all original categories. New native cosmetics appear without rebuilding payload.
  extras.querySelector('[data-close]').click();page.querySelector('#loggedInLocker').click();assert.equal(locker.style.display,'flex');assert.equal(locker.querySelectorAll('[data-category]').length,6);
  for(const category of ['skin','pickaxe','glider']){locker.querySelector('[data-category='+category+']').click();assert.equal(locker.querySelectorAll('.bu-item[data-mode=custom]').length,16);const first=locker.querySelector('.bu-item[data-mode=custom]');first.click();assert(JSON.parse(w.localStorage.getItem('br_local_visuals'))[category==='skin'?'body':category].id.startsWith('brio-'));}
  w['Åèa'].newnative={name:'New native item',type:'glider'};page.querySelector('#loggedInLocker').click();assert(locker.querySelector('[data-id=newnative]'));assert(!locker.querySelector('[data-extra-tab]'),'no menu-to-menu navigation');
  locker.querySelector('[data-category=emote]').click();assert.equal(locker.querySelectorAll('[data-slot]').length,4);assert.equal(locker.querySelectorAll('.bu-emote-preview>div').length,4);locker.querySelector('[data-close]').click();
  // A new match resolves original glider/body/pickaxe through the existing native-compatible resource adapter.
  toggle('allGlidersInvisible',false);page.querySelector('#ready').click();const artLocal=player(9,page.querySelector('#nameBox').value,0),artPlayers=arr();artPlayers.push(artLocal);stage.éa(ctx);await tick(1000);assert.equal(S.renderer,artLocal);for(const [node,key]of [[artLocal['Ëå'],'À'],[artLocal,'ÉãÂ'],[artLocal,'äÀÊ']])assert(node[key]?.src?.includes('/d4/exports/'),key+' original resource missing');assert(S.resources.size<=10);artLocal['ÈÆ']=0;assert.equal(artLocal['ä']['À'],artLocal['ÉãÂ'],'held pickaxe uses the same selected wrapper as inventory');
  // Two result epochs, duplicate decode deduped, authoritative stats + observed values, native controls restored while browsing.
  page.body.insertAdjacentHTML('beforeend','<div id="deathscreen"><h1>Native heading</h1><div class="statsContainer"></div><div id="deathPass"><div class="passHolder" style="display:grid">Native pass</div></div><button id="nativePlay">Native Play</button></div>');
  for(const place of [2,1]){if(place===1){page.querySelector('#ready').click();await tick(10);assert.equal(page.querySelector('[data-brio-postgame]'),null);}const packet={t:'death',place,eliminations:2,damageToEnemies:230,wallsBuilt:7,timeAlive:60};assert.equal(w.msgpack.decode(packet),packet);w.msgpack.decode(packet);await tick(500);const sheet=page.querySelector('[data-brio-postgame]');assert(sheet);assert.equal(sheet.querySelectorAll('.bu-report-totals>div').length,4);assert(sheet.textContent.includes('230'));assert(sheet.textContent.includes('#'+place));assert.equal(page.querySelector('.passHolder').style.display,'none');assert.equal(page.querySelector('#deathscreen h1').textContent,'Native heading');assert(page.querySelector('#nativePlay').isConnected);page.querySelector('.statsContainer').style.display='none';await tick(500);assert(sheet.hidden);assert.equal(page.querySelector('.passHolder').style.display,'grid');page.querySelector('.statsContainer').style.display='';await tick(500);assert(!sheet.hidden);}
  assert.equal(S.session().completed,2);assert.equal(S.session().wins,1);assert.equal(S.session().totals.eliminations,4);assert.equal(S.session().winRate,50);assert.equal(S.session().averagePlacement,1.5);assert.equal(page.querySelector('.bu-session-count').firstChild.textContent,'2');
  await tick(14000);assert.equal(w.Array.prototype.push,nativePush);assert.equal(w.Array.prototype.unshift,nativeUnshift);assert.equal(page.querySelector('[data-test-setup]'),null);assert.equal(page.querySelector('textarea'),null);assert.equal(S.performanceCheck,undefined);assert.deepEqual([...S.errors],[]);
  const prefs=w.localStorage.getItem('brio_extras_state');S.destroy();await tick(1000);assert.equal(w.msgpack.decode,nativeDecode);assert.equal(w.Array.prototype.forEach,nativeForEach);assert.equal(page.querySelectorAll('.brio-product,.brioSettings').length,0);assert.equal(page.querySelector('#logobr').getAttribute('src'),'/buildart/logo5.png');assert.equal(page.querySelector('.passHolder').style.display,'grid');assert.equal(w.localStorage.getItem('brio_extras_state'),prefs);assert.equal(S.resources.size,0);assert.equal(S.remoteRefs.size,0);assert.equal(timers.size,0);
  for(let i=0;i<20;i++){w.eval(code);await flush();const nextS=w.__brio_unlocker_v69;assert.equal(page.querySelectorAll('[data-brio-home=session]').length,1);assert.equal(nextS.session().completed,0);nextS.destroy();await flush();assert.equal(timers.size,0);assert.equal(w.Array.prototype.forEach,nativeForEach);}
  assert.equal(w.localStorage.getItem('brio_spread_recon_v55'),'{"historical":"preserve exact bytes"}');dom.window.close();console.log('Production runtime passed',JSON.stringify({own,combinedStart,seen:seen.size,results:2,reinjections:20}));
}
(async()=>{for(const own of [false,true])for(const combinedStart of [false,true])await run({own,combinedStart});})().catch(error=>{console.error(error);process.exitCode=1;});
