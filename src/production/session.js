// Design-stage pure accumulator. No native hooks, storage, timers or retained match objects.
(function(global){'use strict';
const weaponKeys=['pickaxe','scar','shotgun','bolt','deagle','drum','musket','heavy sniper','riffle','famas','smg','ump','scoped ar','tommy gun','rpg','ak47','combat','aug','silencedpistol','lmg','burst shotgun','grenade launcher','grenade pistol','mgl','vector','revolver','charge riffle','sawedoff','spas','Other'];
const fields=['eliminations','damage','builds','seconds','hpLoss','shieldLoss','distanceMeters','ownProjectiles','observedPlayers'];
function createSession(){let closed=false,lastEpoch=-1;const totals=Object.fromEntries(fields.map(k=>[k,0])),coverage=Object.fromEntries(fields.map(k=>[k,0])),weapons=Object.fromEntries(weaponKeys.map(k=>[k,0]));let completed=0,wins=0,placements=0,placementSum=0,best=null,weaponMatches=0;
 const valid=x=>typeof x==='number'&&Number.isFinite(x)&&x>=0;
 function add(epoch,result){if(closed||!Number.isSafeInteger(epoch)||epoch<=lastEpoch||!result||result.terminal!==true)return false;lastEpoch=epoch;completed++;if(valid(result.place)&&Number.isInteger(result.place)&&result.place>0){placements++;placementSum+=result.place;if(result.place===1)wins++;best=best===null?result.place:Math.min(best,result.place);}for(const k of fields)if(valid(result[k])){totals[k]+=result[k];coverage[k]++;}let hasWeapon=false;if(result.weaponSeconds&&typeof result.weaponSeconds==='object'){for(const [raw,v]of Object.entries(result.weaponSeconds)){if(!valid(v))continue;const k=Object.hasOwn(weapons,raw)?raw:'Other';weapons[k]+=v;hasWeapon=true;}}if(hasWeapon)weaponMatches++;return true;}
 const average=k=>coverage[k]?totals[k]/coverage[k]:null;
 function snapshot(){return {completed,wins,placements,best,winRate:placements?wins/placements*100:null,averagePlacement:placements?placementSum/placements:null,killsPerGame:average('eliminations'),damagePerGame:average('damage'),buildsPerGame:average('builds'),averageSeconds:average('seconds'),totals:{...totals},coverage:{...coverage},weapons:{...weapons},weaponMatches,closed};}
 function destroy(){closed=true;lastEpoch=-1;completed=wins=placements=placementSum=weaponMatches=0;best=null;for(const k of fields)totals[k]=coverage[k]=0;for(const k of weaponKeys)weapons[k]=0;}
 return {add,snapshot,destroy};
}
const api={createSession,weaponKeys};if(typeof module==='object'&&module.exports)module.exports=api;else global.BRIO_SESSION_DESIGN=api;
})(typeof globalThis==='object'?globalThis:this);
