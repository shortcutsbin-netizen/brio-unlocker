/* BRIO supplemental asset retrieval, revision 1. Independent of the numbered modifier suite.
 * Reversible native API observers; no protocol sends, source evaluation, gameplay edits or navigation.
 * Original network response bodies are cloned promptly; historical resources are explicitly refetched.
 * Flat ZIP/CRC32 are implemented locally. Build injects unmodified Acorn for static source parsing.
 */
(() => {
    'use strict';
    const W=window,D=document,KEY='__brio_asset_retrieval',DB='brio_asset_retrieval_1';
    W[KEY]?.destroy?.();
    const parseJS=/* ACORN_VENDOR */null;
    const MiB=1048576,LIMIT={asset:256*MiB,wire:96*MiB,events:32*MiB,single:32*MiB,files:6000,urls:4000,eventsCount:180000,minutes:45,pending:64*MiB};
    const encoder=new TextEncoder(),nativeFetch=W.fetch,nativeXHR=W.XMLHttpRequest,nativeWS=W.WebSocket;
    const prefix=new Date().toISOString().replace(/[-:.]/g,'').replace('Z','')+'_'+(W.crypto?.randomUUID?.().slice(0,8)||String(performance.timeOrigin).replace(/\D/g,''));
    const state={revision:1,prefix,active:false,ready:false,files:0,bytes:{asset:0,wire:0,events:0},stored:0,failedWrites:0,events:0,gaps:0,backfill:0,liveResponses:0,decoded:0,decodedBytes:0,decodedOmitted:0,sockets:0,started:new Date().toISOString(),db:null,busy:false};
    const restores=[],listeners=[],tasks=new Set(),controllers=new Set(),seenURLs=new Map(),xhrInfo=new WeakMap(),sockets=new WeakMap(),socketList=new Set(),gaps=[],inventory=[];
    let bufferedBodyBytes=0,bodyReaders=0,checkpointBusy=false,checkpointSize=0,sequence=0,fileSeq=0,eventParts=[],eventBytes=0,eventSeq=0,wireParts=[],wireBytes=0,wireSeq=1,writeTail=Promise.resolve(),pendingBytes=0,observer=null,domObserver=null,timer=0,ended=false,queue=[],workers=0,lastCheckpoint=0,lastDecode=null,lastGeometry='',geometryCount=0,parsedBytes=0;
    const name=label=>prefix+'__'+String(label).replace(/[^a-zA-Z0-9_.-]/g,'_').slice(-160);
    const sensitive=/^(?:authorization|proxy-authorization|cookie|set-cookie|password|passwd|secret|access_?token|refresh_?token|id_?token|session_?(?:id|token)|csrf|xsrf|api_?key)$/i;
    const safeURL=value=>{try{const u=new URL(value,location.href);u.username='';u.password='';for(const k of [...u.searchParams.keys()])if(sensitive.test(k)||/token|password|secret|session/i.test(k))u.searchParams.set(k,'[REDACTED]');u.hash='';return u.href;}catch{return String(value).slice(0,500);}};
    const headers=value=>{const out={};try{new Headers(value).forEach((v,k)=>out[k]=sensitive.test(k)?'[REDACTED]':v);}catch{}return out;};
    const snapshot=value=>{
        /* Own data descriptors only; no application getters, circular traversal or unbounded trees. */
        let count=0;const seen=new WeakSet();
        const visit=(v,depth)=>{if(++count>12000||depth>10)return '[TRUNCATED]';if(v==null||typeof v==='boolean'||typeof v==='number')return v;if(typeof v==='string'&&/^https?:\/\//i.test(v))return safeURL(v);if(typeof v==='string')return v.length>262144?v.slice(0,262144)+'[TRUNCATED]':v;if(typeof v!=='object')return '['+typeof v+']';if(seen.has(v))return '[CIRCULAR]';seen.add(v);if(ArrayBuffer.isView(v))return {binaryType:v.constructor.name,bytes:v.byteLength};if(v instanceof ArrayBuffer||v instanceof Blob)return {binaryBytes:v.byteLength??v.size};const out=Array.isArray(v)?[]:{};for(const [k,d] of Object.entries(Object.getOwnPropertyDescriptors(v)).slice(0,1500)){if(k==='length'&&Array.isArray(v))continue;out[k]=sensitive.test(k)?'[REDACTED]':'value'in d?visit(d.value,depth+1):'[ACCESSOR OMITTED]';}return out;};
        try{return visit(value,0);}catch(e){return {snapshotError:String(e)};}
    };
    const gap=(stage,detail)=>{state.gaps++;if(gaps.length<3000)gaps.push({at:Date.now(),stage,detail:String(detail).slice(0,700)});};
    const listen=(target,type,fn,options)=>{target.addEventListener(type,fn,options);listeners.push(()=>target.removeEventListener(type,fn,options));};
    const patch=(object,key,value)=>{
        const descriptor=Object.getOwnPropertyDescriptor(object,key);if(!descriptor||!descriptor.configurable&&!descriptor.writable){gap('hook unavailable',key);return false;}
        Object.defineProperty(object,key,{...descriptor,value});restores.push(()=>{if(object[key]===value)Object.defineProperty(object,key,descriptor);});return true;
    };
    const task=promise=>{tasks.add(promise);promise.catch(e=>gap('async capture',e)).finally(()=>tasks.delete(promise));return promise;};
    const put=(filename,blob,kind='asset',metadata={})=>{
        /* Reserve before enqueue. IDB writes are serialized, bounded, and never retain native objects. */
        if(ended)return false;if(blob.size>LIMIT.single){gap('single-file budget',filename+': '+blob.size);return false;}if(state.files>=LIMIT.files||state.bytes[kind]+blob.size>LIMIT[kind]||pendingBytes+blob.size>LIMIT.pending){gap('storage budget',kind+': '+blob.size+' bytes omitted');return false;}
        state.files++;state.bytes[kind]+=blob.size;pendingBytes+=blob.size;
        const row={name:filename,blob,kind,metadata:{...metadata,capturedAt:new Date().toISOString(),session:prefix}};
        writeTail=writeTail.then(()=>new Promise(resolve=>{let tx;try{tx=state.db.transaction('files','readwrite');tx.objectStore('files').put(row);tx.oncomplete=()=>{state.stored++;resolve();};tx.onerror=tx.onabort=()=>{state.failedWrites++;gap('IndexedDB write',tx.error||'failed');resolve();};}catch(e){state.failedWrites++;gap('IndexedDB write',e);resolve();}})).finally(()=>pendingBytes-=blob.size);
        return true;
    };
    const flushEvents=()=>{if(!eventParts.length)return;const blob=new Blob(eventParts,{type:'application/x-ndjson'});eventParts=[];eventBytes=0;put(name('events_'+String(++eventSeq).padStart(5,'0')+'.jsonl'),blob,'events');};
    const event=(type,data)=>{if(ended||state.events>=LIMIT.eventsCount){if(!ended)gap('event budget','event count ceiling');return;}const row={seq:++sequence,time:Date.now(),type,...data};let line;try{line=JSON.stringify(row)+'\n';}catch(e){gap('event serialization',e);return;}const bytes=encoder.encode(line);if(type==='native-decoded'){if(state.decodedBytes+bytes.length>8*MiB){if(!state.decodedOmitted)gap('native decoded representation budget','8MiB reached; raw WebSocket capture has a separate96MiB budget');state.decodedOmitted++;return;}state.decodedBytes+=bytes.length;}if(bytes.length>MiB){gap('event size',type);return;}eventParts.push(bytes);eventBytes+=bytes.length;state.events++;if(eventBytes>=512*1024||eventParts.length>=500)flushEvents();};
    const binaryCopy=value=>typeof value==='string'?encoder.encode(value):value instanceof ArrayBuffer?new Uint8Array(value.slice(0)):ArrayBuffer.isView(value)?new Uint8Array(value.buffer.slice(value.byteOffset,value.byteOffset+value.byteLength)):null;
    const flushWire=()=>{if(!wireParts.length)return;put(name('wire_'+String(wireSeq++).padStart(5,'0')+'.bin'),new Blob(wireParts),'wire');wireParts=[];wireBytes=0;};
    const wire=(data,metadata,owned=false)=>{
        if(!state.active)return;const knownSize=data?.byteLength??data?.size;if(Number.isFinite(knownSize)&&knownSize>LIMIT.single){gap('wire single-body limit',knownSize);return;}let copy;try{copy=owned?data:binaryCopy(data);}catch(e){gap('wire copy',e);return;}
        if(!copy&&data instanceof Blob)copy=data;
        if(!copy){gap('wire unsupported body',Object.prototype.toString.call(data));return;}
        const byteLength=copy instanceof Blob?copy.size:copy.byteLength;
        if(byteLength>LIMIT.single||state.bytes.wire+wireBytes+byteLength>LIMIT.wire){gap('wire budget','frame omitted');return;}
        const filename=name('wire_'+String(wireSeq).padStart(5,'0')+'.bin'),offset=wireBytes;wireParts.push(copy);wireBytes+=byteLength;
        event('wire',{...metadata,file:filename,offset,length:byteLength,originalType:metadata.originalType||typeof data==='string'&&'string'||'binary'});if(wireBytes>=MiB)flushWire();
    };
    const body=(value,metadata)=>{
        /* Multipart descriptors are not falsely described as the browser's original encoded bytes. */
        if(value==null)return;if(value instanceof FormData){const entries=[];for(const [k,v] of value){if(sensitive.test(k)){entries.push([k,'[REDACTED]']);continue;}if(v instanceof Blob){const filename=name('request_file_'+(++fileSeq)+'_'+(v.name||'blob'));put(filename,v,'asset',metadata);entries.push([k,{file:filename,size:v.size,type:v.type}]);}else entries.push([k,String(v)]);}event('multipart-request',{...metadata,entries,exactMultipartEncoding:false});return;}
        if(value instanceof URLSearchParams){const p=new URLSearchParams(value);for(const k of [...p.keys()])if(sensitive.test(k))p.set(k,'[REDACTED]');wire(p.toString(),{...metadata,redacted:true});return;}
        if(value instanceof Blob){if(value.size<=LIMIT.single)put(name('request_body_'+(++fileSeq)+'.bin'),value,'asset',metadata);else gap('request body size',value.size);return;}
        if(typeof value==='string'){try{const data=JSON.parse(value);if(JSON.stringify(snapshot(data))!==JSON.stringify(data)){event('redacted-text-request',{...metadata,body:snapshot(data)});return;}}catch{}wire(value,metadata);return;}
        if(value instanceof ArrayBuffer||ArrayBuffer.isView(value)){wire(value,metadata);return;}gap('request stream/body omitted',Object.prototype.toString.call(value));
    };
    const queueURL=(raw,reason,base=location.href)=>{
        /* Only GET concrete observed/discovered static resources; never replay mutations/API calls. */
        if(!state.active)return;let u;try{u=new URL(raw,base);}catch{return;}u.hash='';if(!['http:','https:','blob:','data:'].includes(u.protocol))return;
        if(seenURLs.has(u.href))return;if(seenURLs.size>=LIMIT.urls){gap('URL budget',safeURL(u.href));return;}
        const row={url:safeURL(u.href),reason,status:'queued',historical:reason==='performance-backfill'||reason==='document-backfill'};seenURLs.set(u.href,row);inventory.push(row);
        if(sensitive.test(u.pathname.split('/').pop()||'')||/(?:login|logout|signout|checkout|payment|\/auth(?:\/|$))/i.test(u.pathname)){row.status='omitted-sensitive-endpoint';return;}
        if(u.origin!==location.origin&&/doubleclick|googlesyndication|analytics|googletagmanager|adservice|facebook|amazon-adsystem/i.test(u.hostname)){row.status='omitted-third-party-ad-tracker';return;}
        if(!['dom','document-backfill','css','source-literal','source-map','worker','performance-backfill','cache-storage'].includes(reason))return;
        if(reason==='performance-backfill'&&!/\.(?:js|mjs|cjs|css|html?|json|map|wasm|png|jpe?g|webp|gif|svg|ico|avif|woff2?|ttf|otf|mp3|ogg|wav|m4a|mp4|webm|bin|atlas|txt)(?:$|\?)/i.test(u.pathname)&&u.href!==location.href){row.status='metadata-only-unclassified';return;}
        queue.push({url:u.href,row});pump();
    };
    const discover=(text,url,mime)=>{
        /* Static parsing only: literal asset paths, module URLs, CSS imports, source maps and HTML attributes. */
        if(!state.active)return;
        const maps=[...text.matchAll(/[#@]\s*sourceMappingURL\s*=\s*([^\s*]+)/g)];for(const m of maps)queueURL(m[1],'source-map',url);
        if(/\.map(?:$|\?)/i.test(url))try{
            const map=JSON.parse(text);if(Array.isArray(map.sources))for(let i=0;i<Math.min(map.sources.length,1000);i++){
                if(typeof map.sourcesContent?.[i]==='string')put(name('mapped_'+(++fileSeq)+'_'+map.sources[i]),new Blob([map.sourcesContent[i]],{type:'application/javascript'}),'asset',{source:'embedded source-map sourcesContent',map:safeURL(url),originalName:map.sources[i]});
                else if(/^(?:https?:|\.?\.?\/|\/)/.test(map.sources[i]))queueURL(map.sources[i],'source-literal',new URL(map.sourceRoot||'.',url).href);
            }
        }catch(e){gap('source map parse',safeURL(url)+' '+e);}
        if(/html/i.test(mime)||/\.html?(?:$|\?)/i.test(url)){
            const doc=new DOMParser().parseFromString(text,'text/html');const base=doc.querySelector('base[href]')?.getAttribute('href');const origin=base?new URL(base,url).href:url;
            for(const n of doc.querySelectorAll('script[src],link[href],img[src],source[src],video[src],audio[src],iframe[src]'))queueURL(n.getAttribute('src')||n.getAttribute('href'),'dom',origin);
            for(const n of doc.querySelectorAll('script:not([src])'))discover(n.textContent,url,'application/javascript');for(const n of doc.querySelectorAll('style'))discover(n.textContent,url,'text/css');
        }
        if(/css/i.test(mime)||/\.css(?:$|\?)/i.test(url)){for(const m of text.matchAll(/(?:url\(\s*|@import\s+)["']?([^\s"')]+)["']?\s*\)?/g))queueURL(m[1],'css',url);}
        if((/javascript|ecmascript/i.test(mime)||/\.(?:m?js|cjs)(?:$|\?)/i.test(url))&&parseJS){
            if(text.length>2*MiB||parsedBytes+text.length>12*MiB){gap('static JS parsing budget',safeURL(url));return;}parsedBytes+=text.length;
            let ast;try{ast=parseJS(text,{ecmaVersion:'latest',sourceType:'module',allowReturnOutsideFunction:true});}catch{try{ast=parseJS(text,{ecmaVersion:'latest',allowReturnOutsideFunction:true});}catch(e){gap('static JS parse',safeURL(url)+' '+e.message);return;}}
            const stack=[ast];while(stack.length){const n=stack.pop();if(['ImportDeclaration','ExportNamedDeclaration','ExportAllDeclaration','ImportExpression'].includes(n.type)&&typeof n.source?.value==='string'&&/^(?:\.|\/|https?:)/.test(n.source.value))queueURL(n.source.value,'source-literal',url);if(n.type==='Literal'&&typeof n.value==='string'&&n.value.length<2000&&/\.(?:js|mjs|css|json|map|wasm|png|jpe?g|webp|gif|svg|avif|woff2?|ttf|mp3|ogg|wav|m4a|mp4|webm|bin|atlas)(?:[?#].*)?$/i.test(n.value)&&!/[\s{}<>]/.test(n.value)){
                /* Engine literals such as buildart/foo.png are document-relative, not js/-relative. */
                queueURL(n.value,'source-literal',/^(?:\.\.?\/|\/|https?:|data:|blob:)/i.test(n.value)?url:location.href);
            }for(const v of Object.values(n))if(Array.isArray(v)){for(const c of v)if(c?.type)stack.push(c);}else if(v?.type)stack.push(v);}
        }
    };
    const response=async(r,metadata)=>{
        if(!state.active)return;if(bodyReaders>=8){gap('HTTP body concurrency','body omitted: '+metadata.url);return;}bodyReaders++;let heldBytes=0;try{const actual=r.url||metadata.rawURL;if(actual&&!seenURLs.has(actual)){const row={url:safeURL(actual),reason:metadata.capture,status:'live-body-observed'};seenURLs.set(actual,row);inventory.push(row);}let clone;try{clone=r.clone();}catch(e){gap('response clone',e);return;}
        const mime=clone.headers.get('content-type')||'',length=Number(clone.headers.get('content-length'));if(/text\/event-stream/i.test(mime)){clone.body?.cancel().catch(()=>{});gap('streaming response omitted',metadata.url);return;}
        if(clone.type==='opaque'||clone.type==='opaqueredirect'){gap('opaque response',metadata.url);return;}
        if(length>LIMIT.single||state.bytes.asset+pendingBytes>=LIMIT.asset){gap('HTTP body budget',metadata.url);clone.body?.cancel().catch(()=>{});return;}
        let size=0,parts=[];try{if(clone.body?.getReader){const reader=clone.body.getReader();while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>LIMIT.single||bufferedBodyBytes+value.byteLength>LIMIT.pending||!state.active){reader.cancel().catch(()=>{});gap('HTTP body incomplete',metadata.url);return;}bufferedBodyBytes+=value.byteLength;heldBytes+=value.byteLength;parts.push(value);}}else{const b=await clone.arrayBuffer();if(b.byteLength>LIMIT.single){gap('HTTP body size',metadata.url);return;}parts=[b];size=b.byteLength;}}catch(e){gap('HTTP body unreadable',metadata.url+' '+e);return;}
        const url=metadata.url||safeURL(r.url),raw=r.url||metadata.rawURL||location.href;let basename;try{basename=decodeURIComponent(new URL(raw).pathname.split('/').pop())||'index.html';}catch{basename='response.bin';}
        if(!/\.[a-z0-9]{1,8}$/i.test(basename))basename+=/html/i.test(mime)?'.html':/json/i.test(mime)?'.json':/javascript/i.test(mime)?'.js':'.bin';
        const filename=name('asset_'+String(++fileSeq).padStart(5,'0')+'_'+basename),blob=new Blob(parts,{type:mime});
        const {rawURL:privateRawURL,...publicMetadata}=metadata;const record={...publicMetadata,url,status:r.status,responseURL:safeURL(r.url||raw),mime,bytes:size,redirected:r.redirected,responseType:r.type,headers:headers(r.headers),body:filename,bodyRepresentation:'browser-decoded response body; HTTP compression/framing not included'};
        const stored=put(filename,blob,'asset',record);event('http-response',{...record,stored});if(metadata.capture==='live-fetch')state.liveResponses++;else state.backfill++;
        if(stored&&size<=2*MiB&&/javascript|ecmascript|html|css|json|text|sourcemap/i.test(mime)){try{discover(await blob.text(),raw,mime);}catch(e){gap('resource discovery',e);}}
        }finally{bodyReaders--;bufferedBodyBytes-=heldBytes;}
    };
    const pump=()=>{while(state.active&&workers<3&&queue.length){const item=queue.shift();workers++;const job=(async()=>{const controller=new AbortController();controllers.add(controller);const timeout=setTimeout(()=>controller.abort(),12000);try{item.row.status='fetching';const r=await Reflect.apply(nativeFetch,W,[item.url,{method:'GET',credentials:new URL(item.url).origin===location.origin?'same-origin':'omit',signal:controller.signal}]);item.row.status=r.ok?'retrieved':'http-'+r.status;await response(r,{capture:'discovery-refetch',reason:item.row.reason,url:safeURL(item.url),rawURL:item.url,originalResponse:false});}catch(e){item.row.status='unreadable';gap('resource GET',safeURL(item.url)+' '+e);}finally{clearTimeout(timeout);controllers.delete(controller);workers--;pump();}})();task(job);}};
    const attachSocket=socket=>{
        if(sockets.has(socket))return sockets.get(socket);const id=++state.sockets;sockets.set(socket,id);socketList.add(socket);event('socket-observed',{id,url:safeURL(socket.url||''),existing:socket.readyState!==0});
        const incoming=e=>wire(e.data,{channel:'websocket',direction:'received',socket:id,url:safeURL(socket.url||'')});const closed=e=>event('socket-close',{id,code:e.code,reason:e.reason});listen(socket,'message',incoming);listen(socket,'close',closed);return id;
    };
    const installDecoder=()=>{
        const codec=W.msgpack;if(!codec||typeof codec.decode!=='function'||lastDecode)return;
        const original=codec.decode,wrapper=function(...args){const result=Reflect.apply(original,this,args);if(state.active)try{state.decoded++;if(state.decodedBytes>=8*MiB||state.decodedOmitted){state.decodedOmitted++;return result;}event('native-decoded',{data:snapshot(result),scope:'native decoder result, not independently decoded; object representation may truncate/redact'});}catch(e){gap('decoder observer',e);}return result;};if(patch(codec,'decode',wrapper))lastDecode=wrapper;
    };
    const install=()=>{
        /* Observers preserve original arguments/this/return/throw. Never create sockets or native sends. */
        if(typeof nativeFetch==='function')patch(W,'fetch',function(...args){const result=Reflect.apply(nativeFetch,this,args);if(state.active)try{const request=args[0],init=args[1],id=++fileSeq,url=safeURL(typeof request==='string'||request instanceof URL?request:request?.url||'');event('http-request',{id,url,method:init?.method||request?.method||'GET',headers:headers(init?.headers||request?.headers)});try{if(init?.body!=null)body(init.body,{channel:'fetch-request',id,url});else if(request?.body)gap('preconstructed Request body omitted',url);}catch(e){gap('request capture',e);}result.then(r=>task(response(r,{capture:'live-fetch',requestId:id,url,originalResponse:true})),e=>event('http-error',{id,url,error:String(e)})).catch(e=>gap('fetch observer',e));}catch(e){gap('fetch observer',e);}return result;});
    };
    const installXHR=()=>{
        if(!nativeXHR)return;const p=nativeXHR.prototype,open=p.open,send=p.send,header=p.setRequestHeader;
        patch(p,'open',function(...args){const result=Reflect.apply(open,this,args);xhrInfo.set(this,{id:++fileSeq,method:args[0],url:safeURL(args[1]),requestHeaders:{}});return result;});
        patch(p,'setRequestHeader',function(...args){const result=Reflect.apply(header,this,args),info=xhrInfo.get(this);if(info)info.requestHeaders[args[0]]=sensitive.test(args[0])?'[REDACTED]':String(args[1]);return result;});
        patch(p,'send',function(...args){const xhr=this,info=xhrInfo.get(xhr)||{id:++fileSeq};let nativeResult;const done=()=>{xhr.removeEventListener('loadend',done);if(!state.active)return;task((async()=>{try{const type=xhr.responseType;let value=type===''||type==='text'?xhr.responseText:type==='document'?new XMLSerializer().serializeToString(xhr.responseXML):type==='json'?JSON.stringify(xhr.response):xhr.response;const blob=value instanceof Blob?value:new Blob([value==null?'':value]);if(blob.size>LIMIT.single){gap('XHR body size',info.url);return;}const mime=xhr.getResponseHeader('content-type')||'',filename=name('xhr_'+info.id+(/json/i.test(mime)?'.json':/javascript/i.test(mime)?'.js':/html/i.test(mime)?'.html':'.bin'));put(filename,blob,'asset',{...info,status:xhr.status,mime,responseURL:safeURL(xhr.responseURL),representation:type==='json'||type==='document'?'browser reserialized': 'browser body'});event('xhr-response',{...info,status:xhr.status,mime,body:filename,headers:scrubHeaderText(xhr.getAllResponseHeaders())});if(blob.size<=2*MiB)discover(await blob.text(),xhr.responseURL||info.url,mime);}catch(e){gap('XHR response',e);}})());};xhr.addEventListener('loadend',done);listeners.push(()=>xhr.removeEventListener('loadend',done));try{nativeResult=Reflect.apply(send,xhr,args);}catch(e){xhr.removeEventListener('loadend',done);throw e;}if(state.active){event('xhr-request',info);try{body(args[0],{channel:'xhr-request',id:info.id,url:info.url});}catch(e){gap('XHR body',e);}}return nativeResult;});
    };
    const scrubHeaderText=text=>String(text).split(/\r?\n/).map(line=>{const at=line.indexOf(':');return at>=0&&sensitive.test(line.slice(0,at))?line.slice(0,at)+': [REDACTED]':line;}).join('\n');
    const installWS=()=>{if(!nativeWS)return;const originalSend=nativeWS.prototype.send;patch(nativeWS.prototype,'send',function(...args){let copy=null,id;try{if(state.active){id=attachSocket(this);if((args[0]?.byteLength??0)<=LIMIT.single)copy=binaryCopy(args[0]);}}catch(e){gap('socket preflight',e);}const result=Reflect.apply(originalSend,this,args);if(state.active)try{wire(copy||args[0],{channel:'websocket',direction:'sent',socket:id,url:safeURL(this.url||''),originalType:typeof args[0]==='string'?'string':args[0] instanceof Blob?'Blob':'binary'},!!copy);}catch(e){gap('socket capture',e);}return result;});const proxy=new Proxy(nativeWS,{construct(target,args,newTarget){const socket=Reflect.construct(target,args,newTarget);if(state.active)attachSocket(socket);return socket;}});patch(W,'WebSocket',proxy);gap('pre-existing socket coverage','Existing private sockets become observable only after a normal native send reaches the scoped send observer. Earlier frames cannot be recovered.');};
    const installOther=()=>{
        for(const key of ['Worker','SharedWorker']){
            const Original=W[key];if(typeof Original!=='function')continue;
            patch(W,key,new Proxy(Original,{construct(target,args,newTarget){const result=Reflect.construct(target,args,newTarget);try{event('worker-created',{kind:key,url:safeURL(args[0]),options:snapshot(args[1])});queueURL(args[0],'worker');}catch(e){gap('worker observer',e);}return result;}}));
        }
        const Original=W.EventSource;if(typeof Original==='function')patch(W,'EventSource',new Proxy(Original,{construct(target,args,newTarget){const result=Reflect.construct(target,args,newTarget);event('eventsource-created',{url:safeURL(args[0])});listen(result,'message',e=>wire(e.data,{channel:'eventsource-message',url:safeURL(args[0]),lastEventId:e.lastEventId,rawHTTPFraming:false}));return result;}}));
        const beacon=navigator.sendBeacon;if(typeof beacon==='function')patch(Object.getPrototypeOf(navigator),'sendBeacon',function(...args){const result=Reflect.apply(beacon,this,args);if(state.active)try{event('beacon-request',{url:safeURL(args[0]),accepted:result});body(args[1],{channel:'beacon',url:safeURL(args[0])});}catch(e){gap('beacon observer',e);}return result;});
        if(navigator.serviceWorker?.getRegistrations)task(navigator.serviceWorker.getRegistrations().then(regs=>{for(const r of regs){event('service-worker-registration',{scope:safeURL(r.scope)});for(const v of [r.active,r.waiting,r.installing])if(v?.scriptURL)queueURL(v.scriptURL,'worker');}}));
    };
    const checkpoint=async()=>{
        /* One replaceable session checkpoint keeps discovery gaps/inventory after a page crash.
         * Asset/event payloads already live in IDB. Checkpoint accounting replaces its prior size. */
        if(!state.db||checkpointBusy||ended)return;checkpointBusy=true;lastCheckpoint=Date.now();
        const text=JSON.stringify({session:prefix,state:{...state,db:undefined},inventory,gaps,limitations}),blob=new Blob([text]);
        if(blob.size>2*MiB){gap('checkpoint budget','Detailed discovery checkpoint exceeded2MiB; asset metadata remains stored.');checkpointBusy=false;return;}
        const row={name:name('session_checkpoint.json'),blob,kind:'checkpoint',metadata:{session:prefix,capturedAt:new Date().toISOString()}};
        writeTail=writeTail.then(()=>new Promise(resolve=>{try{const tx=state.db.transaction('files','readwrite');tx.objectStore('files').put(row);tx.oncomplete=()=>{checkpointSize=blob.size;resolve();};tx.onerror=tx.onabort=()=>{gap('checkpoint write',tx.error);resolve();};}catch(e){gap('checkpoint write',e);resolve();}})).finally(()=>checkpointBusy=false);await writeTail;
    };
    const scanDOM=()=>{
        for(const n of D.querySelectorAll('script[src],link[href],img[src],source[src],video[src],audio[src],iframe[src]')){const raw=n.currentSrc||n.src||n.href;if(raw)queueURL(raw,'dom');}
        event('document-state',{url:safeURL(location.href),scripts:[...D.scripts].map(n=>({src:safeURL(n.src||''),inlineBytes:n.src?0:n.textContent.length})),canvases:[...D.querySelectorAll('canvas')].map(c=>({id:c.id,width:c.width,height:c.height,rect:snapshot(c.getBoundingClientRect().toJSON?.()||{})})),viewport:{width:W.innerWidth,height:W.innerHeight,dpr:W.devicePixelRatio}});
    };
    const geometry=()=>{
        /* Supplemental native snapshot only if the separately injected standard suite already exposes its renderer. */
        const main=W.__brio_unlocker_v61,r=main?.renderer;if(!r||geometryCount>=32)return;const gun=r['Åé']?.[r['ÈÆ']]?.type,mode=r['ée'],signature=String(gun)+':'+mode;if(signature===lastGeometry)return;lastGeometry=signature;geometryCount++;
        const nodes=[];let node=r['Êáe'];for(let depth=0;node&&depth<8;depth++,node=node.parent)nodes.push({depth,type:node.type,A:node.A,size:node.size,position:snapshot(node['ë']),width:node.width,height:node.height,opacity:node.opacity,resourceURL:safeURL(node['À']?.src||''),liveParent:!node.parent||!!node.parent['âè']?.includes(node)||!!node.parent['ÉE']?.includes(node),drawSource:typeof node['Eââ']==='function'?Function.prototype.toString.call(node['Eââ']).slice(0,12000):null});event('native-render-snapshot',{gun,nativeSteadying:mode,rootAngle:r['â']?.A,nodes,scope:'source/pose evidence, not pixel alignment or ADS acknowledgement'});
    };
    const captureCanvases=async()=>{for(const [i,c] of [...D.querySelectorAll('canvas')].entries()){if(c.width*c.height>16000000||c.width<20||c.height<20)continue;try{const blob=await new Promise(resolve=>c.toBlob(resolve,'image/png'));if(blob)put(name('canvas_'+(++fileSeq)+'_'+i+'.png'),blob,'asset',{source:'canvas pixels at explicit click; cursor and DOM not included',width:c.width,height:c.height});}catch(e){gap('canvas pixel capture',e);}}event('canvas-capture-click',{});};
    const tick=()=>{if(!state.active)return;if(Date.now()-Date.parse(state.started)>LIMIT.minutes*60000){stop();gap('time budget','45 minutes reached; export now');}else{installDecoder();geometry();}flushEvents();flushWire();if(Date.now()-lastCheckpoint>=10000)checkpoint();render();};
    const stop=()=>{if(!state.active)return;state.active=false;observer?.disconnect();domObserver?.disconnect();clearInterval(timer);for(const restore of restores.splice(0).reverse())try{restore();}catch(e){gap('restore',e);}for(const remove of listeners.splice(0))try{remove();}catch{}for(const c of controllers)c.abort();if(queue.length)gap('queued resources stopped',queue.length);for(const item of queue)item.row.status='not-retrieved-before-stop';queue=[];socketList.clear();flushWire();event('capture-stopped',{pendingTasks:tasks.size});flushEvents();render();};
    const limitations=[
        'Page JavaScript is not DevTools/CDP: it cannot guarantee every browser request, response, redirect, header or frame.',
        'Initial already-loaded responses are discovery GET refetches, not original network transactions. Original HTTP compression/framing, forbidden headers, TLS and WebSocket handshake/control frames are unavailable.',
        'Cross-origin frames/resources may be unreadable. Worker/service-worker internal traffic and private pre-existing sockets may be unobserved; only reachable application-native decoder results are observed.',
        'Streaming/preconstructed Request bodies, WebTransport/WebRTC, source maps not exposed to the page, server code and server-only state require separate evidence.',
        'Raw asset/HTTP/WebSocket bodies may contain player/account data or credentials. Structured headers/metadata redact recognized secrets; arbitrary binary/raw response bodies cannot be guaranteed sanitized. Review before a public repository upload.',
        'Every omission, cap, refetch and write failure is recorded. Capture does not prove contents/bot feasibility or native pixel alignment.'
    ];
    const readAll=()=>new Promise((resolve,reject)=>{const rows=[],tx=state.db.transaction('files','readonly'),req=tx.objectStore('files').openCursor();req.onsuccess=()=>{const c=req.result;if(c){rows.push(c.value);c.continue();}else resolve(rows);};req.onerror=()=>reject(req.error);});
    const crcTable=(()=>{const table=new Uint32Array(256);for(let n=0;n<256;n++){let c=n;for(let j=0;j<8;j++)c=c&1?0xedb88320^(c>>>1):c>>>1;table[n]=c>>>0;}return table;})();
    const crc=async blob=>{let c=0xffffffff;const reader=blob.stream().getReader();while(true){const {value,done}=await reader.read();if(done)break;for(const byte of value)c=crcTable[(c^byte)&255]^(c>>>8);}return (c^0xffffffff)>>>0;};
    const zip=async rows=>{
        /* ZIP32 STORE with data descriptors; payload blobs are not copied into a giant typed array. */
        const parts=[],central=[];let offset=0;const packed=(length,values)=>{const b=new Uint8Array(length),v=new DataView(b.buffer);for(const [at,size,value] of values)size===2?v.setUint16(at,value,true):v.setUint32(at,value,true);return b;};
        for(const row of rows){if(/[\\/]/.test(row.name))throw Error('ZIP entry is not flat');const filename=encoder.encode(row.name),size=row.blob.size;if(size>=0xffffffff||offset+size>=0xffffffff)throw Error('ZIP32 size ceiling');const sum=await crc(row.blob),local=packed(30,[[0,4,0x04034b50],[4,2,20],[6,2,0x808],[8,2,0],[12,2,0x21],[26,2,filename.length]]),desc=packed(16,[[0,4,0x08074b50],[4,4,sum],[8,4,size],[12,4,size]]),header=packed(46,[[0,4,0x02014b50],[4,2,20],[6,2,20],[8,2,0x808],[10,2,0],[14,2,0x21],[16,4,sum],[20,4,size],[24,4,size],[28,2,filename.length],[42,4,offset]]);parts.push(local,filename,row.blob,desc);central.push(header,filename);offset+=30+filename.length+size+16;await new Promise(r=>setTimeout(r,0));}
        const centralSize=central.reduce((n,b)=>n+b.length,0);if(rows.length>65535)throw Error('ZIP32 entry ceiling');parts.push(...central,packed(22,[[0,4,0x06054b50],[8,2,rows.length],[10,2,rows.length],[12,4,centralSize],[16,4,offset]]));return new Blob(parts,{type:'application/zip'});
    };
    const download=async()=>{
        if(!state.ready||state.busy)return;state.busy=true;stop();render('Finishing pending capture…');try{
            let deadline;try{await Promise.race([Promise.allSettled([...tasks]),new Promise(r=>deadline=setTimeout(r,15000))]);}finally{clearTimeout(deadline);}if(tasks.size)gap('export pending','Tasks unresolved at snapshot: '+tasks.size);flushEvents();await checkpoint();ended=true;await writeTail;const rows=await readAll();
            const manifest={collector:'BRIO supplemental asset retrieval',revision:1,exportedAt:new Date().toISOString(),currentSession:prefix,state:{...state,db:undefined},limits:LIMIT,limitations,files:rows.map(r=>({name:r.name,bytes:r.blob.size,kind:r.kind,...r.metadata})),format:'Flat ZIP; wire index offsets reference wire_*.bin; assets preserve browser response bytes, JSONL/native snapshots are representations. Multiple saved injection sessions may coexist.'};
            rows.push({name:name('manifest.json'),blob:new Blob([JSON.stringify(manifest,null,2)])},{name:name('inventory.json'),blob:new Blob([JSON.stringify(inventory,null,2)])},{name:name('gaps.json'),blob:new Blob([JSON.stringify(gaps,null,2)])},{name:name('READ_BEFORE_PUBLIC_UPLOAD.txt'),blob:new Blob([limitations.join('\n\n')+'\n\nDevTools: export sanitized Network HAR from a reload; manually save any inaccessible source maps/workers. Capture screenshots/clip for DOM/cursor/native visuals. Server code is unavailable unless actually shipped.'])});
            render('Building ZIP ('+rows.length+' files)…');const blob=await zip(rows),url=URL.createObjectURL(blob),a=D.createElement('a');a.href=url;a.download='brio_asset_retrival-results.zip';a.click();setTimeout(()=>URL.revokeObjectURL(url),60000);render('ZIP downloaded. Capture stopped.');return blob;
        }catch(e){gap('ZIP export',e);render('Export failed: '+e+' — saved data remains in IndexedDB.');throw e;}finally{state.busy=false;term.querySelector('[data-a=zip]').disabled=!state.ready;}
    };
    const term=D.createElement('section');term.dataset.brioAssets='';term.style='position:fixed;right:10px;bottom:10px;width:400px;max-width:94vw;z-index:2147483647;background:#05080d;color:#cbe8ff;border:1px solid #5794b8;font:12px monospace;padding:10px;box-shadow:0 4px 20px #0009';term.innerHTML='<b>BRIO supplemental asset retrieval</b><button data-a="min" style="float:right">—</button><div data-body><p data-status>Opening persistent capture storage…</p><button data-a="zip">DOWNLOAD ZIP</button> <button data-a="canvas">CAPTURE CANVASES</button> <button data-a="stop">STOP</button> <button data-a="clear">CLEAR SAVED CAPTURES</button><p style="color:#e6c775">Raw traffic included. Review before public upload.</p><small>Independent collector · do not reload during capture</small></div>';D.documentElement.appendChild(term);
    const render=message=>{term.querySelector('[data-status]').textContent=message||`${state.active?'CAPTURING':'STOPPED'} · ${state.files} files · ${((state.bytes.asset+state.bytes.wire+state.bytes.events)/MiB).toFixed(1)} MiB · ${state.events} events · ${state.gaps} gaps · ${queue.length} queued / ${workers} active GETs · ${state.failedWrites} write errors`;term.querySelector('[data-a=zip]').disabled=!state.ready||state.busy;};
    term.onclick=e=>{const a=e.target?.dataset?.a;if(a==='zip')download().catch(()=>{});if(a==='stop')stop();if(a==='clear'&&state.ready&&!state.busy)task((async()=>{stop();await writeTail;await new Promise((resolve,reject)=>{const tx=state.db.transaction('files','readwrite');tx.objectStore('files').clear();tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);});ended=true;state.ready=false;render('Saved collector files cleared. Paste script again for a fresh capture.');})());if(a==='canvas')task(captureCanvases());if(a==='min'){const b=term.querySelector('[data-body]');b.hidden=!b.hidden;}};
    const destroy=()=>{stop();ended=true;writeTail.finally(()=>state.db?.close());term.remove();if(W[KEY]===api)delete W[KEY];};
    const api={state,stop,download,destroy,captureCanvases,ready:null};W[KEY]=api;
    api.ready=(async()=>{
        state.db=await new Promise((resolve,reject)=>{const request=indexedDB.open(DB,1);request.onupgradeneeded=()=>{const db=request.result;if(!db.objectStoreNames.contains('files'))db.createObjectStore('files',{keyPath:'name'});};request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);request.onblocked=()=>gap('IndexedDB blocked','Close older database connections');});
        if(ended){state.db.close();return;}state.ready=true;state.active=true;state.captureActiveAt=new Date().toISOString();
        install();installXHR();installWS();installOther();installDecoder();
        event('capture-start',{url:safeURL(location.href),userAgent:navigator.userAgent,limits:LIMIT,limitations,originalNetworkBeforeInjection:false});
        put(name('live_DOM_snapshot.html'),new Blob(['<!doctype html>\n'+D.documentElement.outerHTML],{type:'text/html'}),'asset',{source:'current DOM after injection; not original HTML response'});
        queueURL(location.href,'document-backfill');scanDOM();for(const e of performance.getEntriesByType('resource'))queueURL(e.name,'performance-backfill');
        if(W.PerformanceObserver){observer=new PerformanceObserver(list=>{for(const e of list.getEntries()){event('resource-timing',{data:snapshot(e.toJSON?.()||{name:safeURL(e.name),initiatorType:e.initiatorType})});queueURL(e.name,'performance-backfill');}});try{observer.observe({type:'resource',buffered:true});}catch(e){gap('resource timing observer',e);}}
        domObserver=new MutationObserver(records=>{for(const r of records){if(r.type==='attributes'){const n=r.target;queueURL(n.currentSrc||n.src||n.href,'dom');}else for(const n of r.addedNodes){if(n.nodeType!==1||n===term||term.contains(n))continue;for(const child of [n,...n.querySelectorAll('script[src],link[href],img[src],source[src]')])if(child.src||child.href)queueURL(child.currentSrc||child.src||child.href,'dom');}}});domObserver.observe(D.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['src','href','srcset']});
        if(W.caches)task((async()=>{try{for(const key of (await caches.keys()).slice(0,20)){const cache=await caches.open(key);for(const request of (await cache.keys()).slice(0,1000)){const r=await cache.match(request);if(r)await response(r,{capture:'cache-storage',url:safeURL(request.url),originalResponse:false});}}}catch(e){gap('Cache Storage',e);}})());
        timer=setInterval(tick,2000);render();
    })().catch(e=>{gap('startup',e);state.ready=false;render('Capture could not start: '+e+'. Use DevTools HAR; no complete archive was captured.');});
})();
