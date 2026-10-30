// BRIO: A shared blank has no relationship to source texture resolution. Native sprites retain their geometry.
const productionBlankTexture=D.createElement('canvas');
productionBlankTexture.width=productionBlankTexture.height=2;
productionBlankTexture['ÀA']=1;productionBlankTexture['ÁÅe']=productionBlankTexture['âÅÉ']=1;
const productionDecodedImages=new Set,productionDecodedCanvases=new Set;
let productionMatchCleanupTimer=0;
function productionDisposeOutlines(){
    for(const record of v55.outlines.values())if(record){for(const c of [record.mask,...record.colors.values()])c.width=c.height=0;record.colors.clear();}
    v55.outlines.clear();v55.outlineQueue.clear();v55.paths.clear();
}
// BRIO: Let the accepted flashlight exit finish, then remove all match-owned roots. Keep only report scalars/text.
function productionScheduleMatchRelease(){
    clearTimeout(productionMatchCleanupTimer);const epoch=S.runEpoch;
    productionMatchCleanupTimer=setTimeout(()=>{productionMatchCleanupTimer=0;if(!S.destroyed&&S.runEpoch===epoch&&v55.stats?.finished)productionReleaseMatch();},650);
}
function productionReleaseMatch(){
    for(const id of ownedMatchTimeouts)clearTimeout(id);ownedMatchTimeouts.clear();
    S.runEpoch=(S.runEpoch||0)+1;S.matchReleased=true;
    stopPacketObserver();stopRenderDiscovery();stopCapture('match complete');
    restoreRenderArrays();restoreArrays();
    for(const key of ['phaseTimer','featureTimer','nearestTimer','indicatorTimer']){clearInterval(S[key]);S[key]=0;}
    restoreResourceMaps();restoreCosmetics();restoreEmote();restoreSrc();
    resetNativeHud();resetFeatures();restoreMarkerHolds();
    for(const n of [S.localTrack?.node,...S.trackNodes.values(),...S.invNodes.values()])try{n?.parent?.remove?.(n);}catch(_){}
    S.trackNodes.clear();S.invNodes.clear();S.remoteRefs.clear();S.invAssets.clear();
    S.remoteQueued=new WeakSet;S.worldQueued=new WeakSet;S.transparent=new WeakMap;
    S.localTrack=S.renderer=S.native=S.rendererArray=null;v66View.root=v66View.pointer=null;
    S.playVisuals=S.resolvedVisuals=null;S.emoteResolved=[];
    productionReleaseResources();productionDisposeOutlines();
    for(const u of [S.nearestUi,S.chestUi,S.airdropUi,S.safeZoneUi,S.stormCenterUi])if(u)u.style.display='none';
    for(const u of v55.lootUis.values())u.remove();v55.lootUis.clear();
    v55.deferred.clear();v55.playerChecks=new WeakMap;v55.zone=null;v55.zoneAt=0;
    if(v55.stats)v55.stats.position=null;
}
