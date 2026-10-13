// Test OUR renderer with source-shaped native transform ordering; never execute native engine source.
const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict'),{parse}=require('acorn');
const source=fs.readFileSync('src/brio.js','utf8'),ast=parse(source,{ecmaVersion:'latest'}),names=['V59_ENVELOPES','SPREAD_LENGTHS','v59MuzzleFrame','v59Envelope','v55Player'],found=new Map;
function walk(n){if(!n?.type)return;if(n.type==='VariableDeclarator'&&names.includes(n.id?.name))found.set(n.id.name,source.slice(n.init.start,n.init.end));for(const v of Object.values(n))if(Array.isArray(v))v.forEach(walk);else if(v?.type)walk(v);}walk(ast);assert.equal(found.size,names.length);
let settings;const features=new Map,context={Map,Number,Math,Object,v55:{recon:{guns:{}},stats:null},featureNodes:features,isLocal:()=>true,v55GunName:w=>w,v55ReconMode:()=> 'hip',v57SpreadReady:()=>false,v55PlayerPreflight(){},gateNativeDraw(){},exFast:()=>settings,attachFeature(r,key,parent,draw){let rows=features.get(r);if(!rows)features.set(r,rows=new Map);if(rows.has(key))return;const n={parent,draw:key==='spreadCone'?draw:()=>{}};rows.set(key,n);parent.âè.push(n);}};
vm.createContext(context);vm.runInContext(names.map(n=>'const '+n+'='+found.get(n)+';').join('\n')+'\nthis.install=v55Player;this.frame=v59MuzzleFrame;',context);
const node=(x=0,y=0,A=0,size=1)=>({ë:{É:x,Ä:y},A,size,âè:[],ÉE:[],parent:null,opacity:1,add(n){n.parent=this;this.âè.push(n);},remove(n){this.âè=this.âè.filter(x=>x!==n);n.parent=null;}});
let cases=0;
for(const rootAngle of [0,Math.PI/2,Math.PI,-Math.PI/2])for(const pose of [0,.63])for(const scale of [.7,1,1.4])for(const camera of [.5,1,2])for(const [size,factor]of [['xs',.75],['small',1],['medium',1.25],['large',1.5],['xl',2]]){
 const root=node(123,47,rootAngle),physical=node(2,-3,.07,1.1),hand=node(15,-12,pose,.9),held=node(24,-4,Math.PI/2+.01,scale),flash=node(-61,0,-Math.PI/2,.8);flash.opacity=0;root.add(physical);physical.add(hand);hand.add(held);held.add(flash);
 const r={â:root,Êáe:flash,ä:held,Åé:[{type:'pickaxe'},{type:'scar'}],ÈÆ:1,ËÂ:4,èÂ:false};settings={showBulletSpread:true,spreadSize:size,spreadColor:'#abcdef'};context.install(r);assert.equal(features.get(r).get('spreadCone').parent,held);
 let matrix=[1,0,0,1,0,0],stack=[],points=[],muzzlePoint,color;
 const point=(x,y)=>[matrix[0]*x+matrix[2]*y+matrix[4],matrix[1]*x+matrix[3]*y+matrix[5]];
 const ctx={save(){stack.push([...matrix]);},restore(){matrix=stack.pop();},translate(x,y){const p=point(x,y);matrix[4]=p[0];matrix[5]=p[1];},rotate(a){const [x,y,z,w]=matrix,c=Math.cos(a),s=Math.sin(a);matrix[0]=x*c+z*s;matrix[1]=y*c+w*s;matrix[2]=-x*s+z*c;matrix[3]=-y*s+w*c;},beginPath(){},moveTo(x,y){points.push(point(x,y));},lineTo(x,y){points.push(point(x,y));},stroke(){color=this.strokeStyle;}};
 function draw(n,s){const previous=[...matrix];if(n.ë)ctx.translate(n.ë.É/s,n.ë.Ä/s);if(n.A)ctx.rotate(n.A);if(n===flash)muzzlePoint=point(0,0);if(n.draw)n.draw(ctx,s);for(const c of n.âè||[])draw(c,s/(n.size||1));matrix=previous;}
 draw(root,camera);assert.equal(points.length,3);assert.equal(color,'#abcdef');assert(Math.hypot(points[1][0]-muzzlePoint[0],points[1][1]-muzzlePoint[1])<1e-8,'native flash center must equal cone origin even when flash is invisible');
 const forward=Math.atan2((points[0][1]+points[2][1])/2-points[1][1],(points[0][0]+points[2][0])/2-points[1][0]);assert(Math.abs(Math.atan2(Math.sin(forward-(rootAngle-Math.PI/2)),Math.cos(forward-(rootAngle-Math.PI/2))))<1e-8,'compensate all animated descendant rotations');
 assert(Math.abs(Math.hypot(points[0][0]-points[1][0],points[0][1]-points[1][1])-96*factor/camera)<1e-8,'length must be independent of held art scale');assert.equal(stack.length,0);
 held.remove(flash);assert.equal(context.frame(r),null,'stale parent origin must suppress');context.install(r);assert(!features.get(r).has('spreadCone'));cases++;
}
console.log('Native-shaped spread geometry passed:',cases,'camera/axis/pose/scale/length/invisible-flash/stale-parent cases');
