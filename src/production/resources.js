(k,x)=>{
    if(!x||x.mode==='native'||S.destroyed)return Promise.resolve(null);
    const u=asset(k,x);if(!u)return Promise.resolve(null);
    // Only current match resources are decoded. Native holders share these same wrappers, including inventory pickaxe art.
    const ck=k+':'+x.mode+':'+(x.id||'');if(S.resources.has(ck))return S.resources.get(ck);
    const generation=productionResourceGeneration;
    const p=new Promise((ok,no)=>{const im=new Image;productionImages.add(im);im['ÀA']=2;
        const release=()=>{productionImages.delete(im);productionImageCancels.delete(im);im.onload=im.onerror=null;};
        im.onload=()=>{release();if(S.destroyed||generation!==productionResourceGeneration){im.src='';ok(null);return;}im['ÀA']=1;im['ÁÅe']=im.width/2;im['âÅÉ']=im.height/2;productionDecodedImages.add(im);let drawable=im;if(k==='head'&&x.mode==='custom'&&String(x.id).startsWith('brio-')){drawable=D.createElement('canvas');productionDecodedCanvases.add(drawable);drawable.width=im.width;drawable.height=im.height;const w=im.width*productionHeadScale,h=im.height*productionHeadScale;drawable.getContext('2d').drawImage(im,(im.width-w)/2,(im.height-h)/2,w,h);drawable['ÀA']=1;drawable['ÁÅe']=drawable.width/2;drawable['âÅÉ']=drawable.height/2;}ok({src:u,'ÁÄ':drawable,__brio:true,__kind:k});};
        im.onerror=()=>{release();const error=Error('Unable to load '+k+' artwork');if(!S.destroyed&&generation===productionResourceGeneration)productionError('Artwork',error);no(error);};
        productionImageCancels.set(im,()=>{release();im.src='';ok(null);});
        if(/^https?:/.test(u)&&new URL(u,location.href).origin!==location.origin)im.crossOrigin='anonymous';im.src=u;
    });S.resources.set(ck,p);p.catch(()=>{if(S.resources.get(ck)===p)S.resources.delete(ck);});return p;
}
