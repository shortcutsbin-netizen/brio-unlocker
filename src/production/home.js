// BRIO: Three keyed slot records bound retained DOM/observers even when native ads refresh or replace a host.
function productionInstallHomeSlot(id,kind,markup){
    const host=D.getElementById(id);let record=productionHomeSlots.get(id);
    if(record&&record.host!==host){record.dispose();productionHomeSlots.delete(id);record=null;}
    if(!host)return;
    if(record){record.purge();return;}
    const savedStyle=host.getAttribute('style'),parentStyles=[];
    const node=D.createElement('div');node.className='brio-product';node.dataset.brioHome=kind;
    if(kind==='session')node.dataset.brioSession='';
    node.innerHTML=markup();
    const purge=()=>{if(S.destroyed||D.getElementById(id)!==host)return;if(node.parentNode!==host)host.appendChild(node);for(const child of [...host.children])if(child!==node)child.remove();};
    const observer=new MutationObserver(purge);
    record={host,node,purge,dispose(){observer.disconnect();productionSessionResize?.unobserve(host);node.remove();if(savedStyle===null)host.removeAttribute('style');else host.setAttribute('style',savedStyle);for(const [p,height]of parentStyles)p.style.height=height;}};
    productionHomeSlots.set(id,record);purge();observer.observe(host,{childList:true});if(kind==='session')productionSessionResize?.observe(host);
    host.style.width=kind==='social'?'728px':'300px';host.style.height=kind==='social'?'90px':'250px';host.style.maxWidth='100%';host.style.marginInline='auto';
    const parent=host.parentElement;
    if(parent&&(kind==='session'&&parent.id==='bio32container'||kind==='social'&&parent.id==='ref3')){parentStyles.push([parent,parent.style.height]);if(kind==='social')parent.style.height='90px';}
}
function productionHome(){
    if(S.destroyed)return;productionSuppressAds();
    productionInstallHomeSlot('buildroyale-io_970x250','social',()=>`<div class="bu-social"><div class="bu-admark">BU</div><div><h3>BRIO UNLOCKED <span class="bu-version">${productionVersion}</span></h3><p>Cosmetics unlocked. Modifiers & challenges. Your setup.</p></div><div class="bu-social-links"><a class="bu-btn primary" href="https://github.com/shortcutsbin-netizen/brio_unlocked" target="_blank" rel="noopener noreferrer">${productionIcon('code-xml')}GitHub ${productionIcon('arrow-up-right')}</a><span class="bu-discord-badge" aria-label="Discord handle ads0210"><img src="${productionAssetBase}d3/assets/discord.svg" alt="">ads0210</span></div></div>`);
    productionInstallHomeSlot('buildroyale-io_300x250','session',productionSessionPanel);
    productionInstallHomeSlot('buildroyale-io_300x250_2','changelog',productionChangelogPanel);
    const logo=D.getElementById('logobr');
    if(productionLogoRecord&&productionLogoRecord.node!==logo){productionLogoRecord.restore();productionLogoRecord=null;}
    if(logo&&!productionLogoRecord){
        const attrs=['src','srcset','alt'].map(k=>[k,logo.getAttribute(k)]);
        productionLogoRecord={node:logo,restore(){for(const [k,v]of attrs)if(v===null)logo.removeAttribute(k);else logo.setAttribute(k,v);delete logo.dataset.brioLogo;}};
        logo.dataset.brioLogo='';logo.removeAttribute('srcset');logo.src=productionAssetBase+'d3/assets/logo-review.webp';logo.alt='BRIO UNLOCKED';
    }
    productionLayoutSession();
}
