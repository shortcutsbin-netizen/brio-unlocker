(function(global){'use strict';
const included=['nearestPlayer','nearestPlayerName','nearestAirdrop','lowHealthWarning','lowAmmoWarning','lowMatsWarning','inventorySlots','inventoryMaterials','inventoryAmmo','healthBars','numericHealthShield','playerNames','transparentRoofs','transparentFoliage','stormEdge','allGlidersInvisible','permanentMeteor','highlightOwnedAmmo','longerBulletTrails'];
function applyAdvantages(saved,registry,normalizeWarningThresholds){const next={...saved};for(const [id]of registry)if(id&&id!=='inventorySize')next[id]=included.includes(id);next.inventorySize='large';next.warningThresholds=normalizeWarningThresholds(null);next.goodFlippinLuck=false;return next;}
if(typeof module==='object'&&module.exports)module.exports={included,applyAdvantages};else global.BRIO_PRESET={included,applyAdvantages};
})(typeof globalThis==='object'?globalThis:this);
