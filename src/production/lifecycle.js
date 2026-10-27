// Cache accepts EXCLUSIVELY IDLE resources only; never cache/dispose a bound live native texture here.
// Own resources explicitly. Never enumerate/delete native or other extensions' resources.
(function(global){'use strict';
function createScope(){let closed=false,generation=0;const cleanups=[],cache=new Map,errors=[];const report=e=>{errors.push(String(e).slice(0,512));if(errors.length>20)errors.shift();};
 const own=cleanup=>{if(typeof cleanup!=='function')throw TypeError('cleanup required');if(closed){try{cleanup()}catch(e){report(e)}}else cleanups.push(cleanup);return cleanup;};
 const guard=fn=>{const epoch=generation;return function(...args){if(!closed&&epoch===generation)return Reflect.apply(fn,this,args);};};
 const listen=(target,type,fn,options)=>{const wrapped=guard(fn);target.addEventListener(type,wrapped,options);own(()=>target.removeEventListener(type,wrapped,options));return wrapped;};
 const property=(target,key,value)=>{const previous=Object.getOwnPropertyDescriptor(target,key);Object.defineProperty(target,key,{configurable:true,writable:true,value});own(()=>{if(Object.getOwnPropertyDescriptor(target,key)?.value!==value)return;if(previous)Object.defineProperty(target,key,previous);else delete target[key];});};
 const acquire=async(key,load,dispose,max=8)=>{if(closed)return null;if(cache.has(key)){const rec=cache.get(key);cache.delete(key);cache.set(key,rec);return rec.promise;}const epoch=generation,rec={value:null,promise:null,dispose};rec.promise=Promise.resolve().then(()=>closed?null:load()).then(value=>{if(value===null)return null;if(closed||generation!==epoch||cache.get(key)!==rec){dispose(value);return null;}rec.value=value;return value;}).catch(e=>{if(cache.get(key)===rec)cache.delete(key);report(e);return null;});cache.set(key,rec);while(cache.size>max){const [old,r]=cache.entries().next().value;cache.delete(old);if(r.value!==null)try{r.dispose(r.value)}catch(e){report(e)}}return rec.promise;};
 const destroy=()=>{if(closed)return;closed=true;generation++;for(const release of cleanups.splice(0).reverse())try{release()}catch(e){report(e)}for(const rec of cache.values())if(rec.value!==null)try{rec.dispose(rec.value)}catch(e){report(e)}cache.clear();};
 return {own,guard,listen,property,acquire,destroy,get closed(){return closed},diagnostics:()=>({closed,generation,cleanups:cleanups.length,cache:cache.size,errors:[...errors]})};
}
if(typeof module==='object'&&module.exports)module.exports={createScope};else global.BRIO_OWNED_SCOPE={createScope};
})(typeof globalThis==='object'?globalThis:this);
