async raw=>{
    // Source is data, never evaluated. Retain only operational field/asset/ammo maps, not AST/history.
    if(typeof raw!=='string'||raw.length>2000000)throw Error('Unsupported game source size');
    const ast=parseNative(raw,{ecmaVersion:'latest',sourceType:'script',allowReturnOutsideFunction:true}),assets=new Map,dictionaries=new Map,numeric=[];
    const walk=n=>{if(!n?.type)return;
        if(n.type==='VariableDeclarator'&&n.id?.name==='ÀæÀ'&&n.init?.type==='ArrayExpression'){const index=n.init.elements.findIndex(x=>x?.value==='scar');if(index>=0&&index<64)S.previewScarIndex=index;}
        if(n.type==='VariableDeclarator'&&n.id?.name==='äèä'&&n.init?.type==='ObjectExpression')numeric.push(n.init);
        if(n.type==='Property'&&typeof n.value?.value==='string'&&/^(?:\.?\/)?buildart\//.test(n.value.value)){const k=n.key.name||n.key.value;if(typeof k==='string'){assets.set(k,norm(n.value.value));assets.set(k.toLowerCase(),norm(n.value.value));}}
        if(n.type==='AssignmentExpression'&&n.left?.type==='MemberExpression'&&n.left.object?.type==='Identifier'&&typeof n.right?.value==='string'&&n.right.value.length<100){const key=n.left.computed?n.left.property.value:n.left.property.name;if(typeof key==='string'){const map=dictionaries.get(n.left.object.name)||new Map;map.set(key,n.right.value);dictionaries.set(n.left.object.name,map);}}
        for(const [k,v]of Object.entries(n))if(!['start','end','loc'].includes(k)){if(Array.isArray(v))v.forEach(walk);else if(v?.type)walk(v);}
    };walk(ast);if(S.destroyed)return;
    if(assets.size)S.hudAssetPaths=assets;
    for(const map of dictionaries.values())if([...map.values()].includes('isPreview')||[...map.values()].includes('weaponSlots'))for(const [k,v]of map)schemaFields.set(k,v);
    for(const object of numeric){const resolved=numericSourceConstants(ast,object.start),pairs=object.properties.map(x=>[String(x.key?.value||x.key?.name||'').toLowerCase(),typeof x.value?.value==='number'?x.value.value:resolved.get(x.value?.name)]).filter(([k,v])=>k&&Number.isInteger(v)&&v>=0&&v<5);if(pairs.length>(S.ammoTypeMap?.size||3)){S.ammoTypeMap=new Map(pairs);for(const [type]of pairs)if(assets.has(type))GUN_TYPES.add(type);}}
    S.weaponCatalog=new Set([...GUN_TYPES].filter(type=>assets.has(type)));
}
