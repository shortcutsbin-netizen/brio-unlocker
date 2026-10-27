"""Crop/pack generated alpha sprites. Never redraw or synthesize art; originals retained."""
from pathlib import Path
from PIL import Image
from scipy.ndimage import label, find_objects
import numpy as np
import json
root=Path(__file__).resolve().parents[2];d=root/'docs/design/d3';report={}
for key in ['tide-archivist','glass-orchard','rivet-sonata','polar-frequency','morrow-loom']:
    im=Image.open(d/'assets'/f'{key}.webp').convert('RGBA')
    alpha=np.array(im.getchannel('A'));lab,_=label(alpha>200);areas=np.bincount(lab.ravel());regions=find_objects(lab)
    ids=np.argsort(areas[1:])[-4:]+1
    boxes=[]
    for i in ids:
        y,x=regions[i-1];boxes.append((x.start,y.start,x.stop,y.stop))
    boxes.sort(key=lambda b:(b[1]+b[3])/2)
    boxes=sorted(boxes[:2],key=lambda b:b[0])+sorted(boxes[2:],key=lambda b:b[0])
    atlas=Image.new('RGBA',(700,700))
    for i,(x,y,a,b) in enumerate(boxes):
        sprite=im.crop((max(0,x-3),max(0,y-3),min(im.width,a+3),min(im.height,b+3)))
        sprite.thumbnail((310,310),Image.Resampling.LANCZOS)
        atlas.alpha_composite(sprite,(i%2*350+(350-sprite.width)//2,i//2*350+(350-sprite.height)//2))
    atlas.save(d/'assets'/f'{key}-atlas.webp',quality=88,method=6)
    report[key]={'source':f'assets/{key}.webp','sourceSize':list(im.size),'boxes':[[int(a) for a in b]for b in boxes],'parts':['head','body','pickaxe','glider'],'atlasCell':[350,350],'atlasSize':[700,700],'output':f'assets/{key}-atlas.webp'}
(d/'atlas-layout.json').write_text(json.dumps(report,indent=2)+'\n')
print('Five bounded alpha atlases packed; source boards preserved.')
