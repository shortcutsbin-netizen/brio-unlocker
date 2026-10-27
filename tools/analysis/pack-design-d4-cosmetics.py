"""Aspect-preserving alpha crop/packing only; original artwork is never redrawn."""
from pathlib import Path
from PIL import Image
from scipy.ndimage import label,find_objects
import numpy as np,json,hashlib
r=Path(__file__).resolve().parents[2];d=r/'docs/design/d4';assets=d/'assets';assets.mkdir(exist_ok=True)
names=['Trail Warden','Citrus Circuit','Nightglass','Kiln Current','Margin Runner','Tide Archivist','Glass Orchard','Rivet Sonata','Polar Frequency','Morrow Loom','Prismwake','Cinder Apiary','Flux Foundry','Lunar Marquetry','Hush Velvet','Pepper Forge']
keys=[n.lower().replace(' ','-')for n in names]
def components(path,count):
 im=Image.open(path).convert('RGBA');lab,_=label(np.array(im.getchannel('A'))>200);areas=np.bincount(lab.ravel());obj=find_objects(lab);ids=np.argsort(areas[1:])[-count:]+1;boxes=[]
 for i in ids:
  y,x=obj[i-1];boxes.append([x.start,y.start,x.stop,y.stop])
 return im,sorted(boxes,key=lambda b:(b[1]+b[3])/2)
def sprite(im,b):
 x,y,a,z=b;return im.crop((max(0,x-2),max(0,y-2),min(im.width,a+2),min(im.height,z+2)))
parts={k:{}for k in keys};sources={}
def record(k,p,im,b,path):parts[k][p]=sprite(im,b);sources[k+':'+p]={'path':str(path.relative_to(r)),'box':[int(v)for v in b]}
p=r/'docs/design/d3/assets/cosmetics-originals.webp';im,bs=components(p,9)
for row in range(3):
 for col,b in enumerate(sorted(bs[row*3:row*3+3],key=lambda b:b[0])):record(keys[row],['head','body','pickaxe-held'][col],im,b,p)
p=r/'docs/design/d3/assets/gliders.webp';im,bs=components(p,3)
for k,b in zip(keys,sorted(bs,key=lambda b:b[0])):record(k,'glider',im,b,p)
p=r/'docs/design/d3/assets/cosmetics-new.webp';im,bs=components(p,8)
for row in range(2):
 for col,b in enumerate(sorted(bs[row*4:row*4+4],key=lambda b:b[0])):record(keys[3+row],['head','body','pickaxe-held','glider'][col],im,b,p)
for index,key in enumerate(keys[5:],5):
 if index<10:p=r/'docs/design/d3/assets'/f'{key}.webp'
 else:
  p=assets/f'{key}-source.webp'
  if not p.exists():
   result=json.loads((d/f'generation-{key}.json').read_text());raw=Path(result['output']);im=Image.open(raw);im.thumbnail((1200,1200));im.save(p,quality=90,method=4)
 im,bs=components(p,4)
 bs=sorted(bs[:2],key=lambda b:b[0])+sorted(bs[2:],key=lambda b:b[0])
 for part,b in zip(['head','body','pickaxe-held','glider'],bs):record(key,part,im,b,p)
manifest={'schema':1,'sets':[],'note':'Inventory aliases reuse held pickaxe bytes/decoded texture; native inventory applies -PI/4 itself. Native anchor calibration remains open.'}
for name,key in zip(names,keys):
 out=d/'exports'/key;out.mkdir(parents=True,exist_ok=True);entry={'name':name,'key':key,'parts':{}};thumbs=[]
 for part in ['head','body','pickaxe-held','glider']:
  raw=parts[key][part];side=700 if part=='glider'else 300 if part=='pickaxe-held'else 350;fit=(430,200)if part=='glider'else(270,270)if part=='head'else(300,220)if part=='body'else(270,270)
  art=raw.copy();art.thumbnail(fit,Image.Resampling.LANCZOS);canvas=Image.new('RGBA',(side,side));at=((side-art.width)//2,(side-art.height)//2);canvas.alpha_composite(art,at);path=out/(part+'.png');canvas.save(path,optimize=True)
  bounds=canvas.getchannel('A').getbbox();entry['parts'][part]={'file':str(path.relative_to(d)),'canvas':[side,side],'bounds':list(bounds),'source':sources[key+':'+part],'sourceAspect':raw.width/raw.height,'placedAspect':art.width/art.height,'sha256':hashlib.sha256(path.read_bytes()).hexdigest()}
  # Menus use tight content centered on SQUARE thumb, independent of native texture padding.
  th=Image.new('RGBA',(160,160));a=raw.copy();a.thumbnail((140,140),Image.Resampling.LANCZOS);th.alpha_composite(a,((160-a.width)//2,(160-a.height)//2));thumbs.append(th)
 alias=out/'pickaxe-inventory.png';alias.write_bytes((out/'pickaxe-held.png').read_bytes());entry['parts']['pickaxe-inventory']={**entry['parts']['pickaxe-held'],'file':str(alias.relative_to(d)),'aliasOf':'pickaxe-held','nativeRotationDegrees':-123.75}
 atlas=Image.new('RGBA',(320,320))
 for j,th in enumerate(thumbs):atlas.alpha_composite(th,(j%2*160,j//2*160))
 atlas.save(assets/(key+'-atlas.webp'),quality=82,method=4);entry['reviewAtlas']='assets/'+key+'-atlas.webp';manifest['sets'].append(entry)
(d/'cosmetics-manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print('16 sets:64 distinct sprites +16 inventory aliases exported; aspect/centered menu atlases packed.')
