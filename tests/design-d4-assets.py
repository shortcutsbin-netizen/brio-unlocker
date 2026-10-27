from pathlib import Path
from PIL import Image
import json
r=Path(__file__).resolve().parents[1];d=r/'docs/design/d4';m=json.loads((d/'cosmetics-manifest.json').read_text());assert len(m['sets'])==16
for s in m['sets']:
 for p,v in s['parts'].items():
  im=Image.open(d/v['file']);assert im.mode=='RGBA';assert list(im.size)==v['canvas'];b=im.getchannel('A').getbbox();assert b
  assert abs((b[0]+b[2])/2-im.width/2)<=2,(s['name'],p,'x')
  assert abs((b[1]+b[3])/2-im.height/2)<=2,(s['name'],p,'y')
  assert abs(v['placedAspect']/v['sourceAspect']-1)<.02,(s['name'],p,'aspect')
 assert s['parts']['pickaxe-inventory']['nativeRotationDegrees']==-123.75
 assert (d/s['parts']['pickaxe-held']['file']).read_bytes()==(d/s['parts']['pickaxe-inventory']['file']).read_bytes()
 atlas=Image.open(d/s['reviewAtlas']).convert('RGBA');assert atlas.size==(320,320)
 for i in range(4):
  tile=atlas.crop((i%2*160,i//2*160,(i%2+1)*160,(i//2+1)*160));b=tile.getchannel('A').getbbox();assert b
  assert abs((b[0]+b[2])/2-80)<=3,(s['name'],i,'atlas x')
  assert abs((b[1]+b[3])/2-80)<=3,(s['name'],i,'atlas y')
report={'date':'2026-10-27','sets':16,'distinctParts':64,'inventoryAliases':16,'individualFiles':80,'checks':['RGBA dimensions','uniform scale/aspect within2%rounding','alpha bounds centered','square card cells centered','inventory aliases byte-identical'],'limits':'Texture exports prepared; native anatomical anchors/grips/size/timing still require integration check.'}
(d/'asset-validation.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report))
