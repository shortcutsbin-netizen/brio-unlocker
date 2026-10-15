// Execute the actual minified collector with real web Response/Blob streams and IndexedDB transactions.
const fs=require('fs'),assert=require('node:assert/strict'),{execFileSync}=require('child_process'),{JSDOM}=require('jsdom'),{IDBFactory}=require('fake-indexeddb');
const code=fs.readFileSync('dist/brio_asset_retrieval.js','utf8');
const delay=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 const dom=new JSDOM('<!doctype html><html><head><script src="/main.js"></script><link rel="stylesheet" href="/style.css"></head><body><canvas id="game" width="800" height="500"></canvas><img src="/before.png"></body></html>',{url:'https://buildroyale.io/',runScripts:'outside-only'}),w=dom.window;
 Object.assign(w,{TextEncoder,TextDecoder,Blob,Headers,Request,Response,indexedDB:new IDBFactory(),structuredClone});
 const realTimeout=w.setTimeout.bind(w);w.setTimeout=(fn,ms,...args)=>realTimeout(fn,ms>=60000?0:ms,...args);const intervals=new Map;w.setInterval=(fn,ms)=>{const id=intervals.size+1;intervals.set(id,fn);return id;};w.clearInterval=id=>intervals.delete(id);
 let observer,mutation,downloaded,downloadName;w.PerformanceObserver=class{constructor(cb){this.cb=cb;observer=this;}observe(){}disconnect(){this.closed=true;}};
 w.performance.getEntriesByType=()=>[{name:'https://buildroyale.io/old.png'}];
 w.HTMLCanvasElement.prototype.toBlob=function(cb){cb(new Blob([new Uint8Array([137,80,78,71])],{type:'image/png'}));};
 w.URL.createObjectURL=blob=>{downloaded=blob;return 'blob:export';};w.URL.revokeObjectURL=()=>{};w.HTMLAnchorElement.prototype.click=function(){downloadName=this.download;};
 const calls=[],promises=[];const routes={
  '/':['text/html','<script src="/main.js"></script><link rel="stylesheet" href="/style.css"><img src="/before.png">'],
  '/main.js':['application/javascript','const p="buildart/topmusket.png"; const wasm="/logic.wasm"; import("./extra.js");\n//# sourceMappingURL=main.js.map'],
  '/main.js.map':['application/json',JSON.stringify({version:3,sources:['src/original.js'],sourcesContent:['export const original=true;']})],
  '/style.css':['text/css','body{background:url("/background.png")}'],
  '/extra.js':['application/javascript','const image="/extra.png";'],
  '/worker.js':['application/javascript','self.onmessage=()=>{};'],
  '/api/state':['application/json','{"ok":true}'],
  '/live.json':['application/json','{"live":true}']
 };
 const nativeFetch=function(input,init={}){calls.push({input:String(input),init});const u=new URL(String(input),'https://buildroyale.io/');if(u.pathname==='/reject'){const p=Promise.reject(new Error('native fetch rejection'));promises.push(p);return p;}const route=routes[u.pathname]||['image/png',new Uint8Array([0,1,2,255])];const response=new Response(route[1],{status:200,headers:{'content-type':route[0],...(u.pathname==='/large'?{'content-length':'999999999'}:{})}});Object.defineProperty(response,'url',{value:u.href});const p=Promise.resolve(response);promises.push(p);return p;};w.fetch=nativeFetch;
 let sends=0;class WS extends w.EventTarget{static OPEN=1;constructor(url){super();this.url=url;this.readyState=1;}send(value){sends++;this.sent=value;return 'native-send';}}w.WebSocket=WS;const originalSend=WS.prototype.send,existing=new WS('wss://buildroyale.io/game?token=hidden');
 let xhrCalls=0;class XHR extends w.EventTarget{open(method,url){this.method=method;this.responseURL=new URL(url,w.location.href).href;return 'open';}setRequestHeader(k,v){return 'header';}send(data){xhrCalls++;this.status=200;this.responseType='arraybuffer';this.response=new w.Uint8Array([5,6,7]).buffer;this.dispatchEvent(new w.Event('loadend'));return 'xhr-send';}getResponseHeader(){return 'application/octet-stream';}getAllResponseHeaders(){return 'Content-Type: application/octet-stream\r\nSet-Cookie: hidden';}}w.XMLHttpRequest=XHR;const nativeOpen=XHR.prototype.open,nativeSend=XHR.prototype.send;
 let decoderCalls=0;const decode=function(value){decoderCalls++;if(value?.throw)throw new Error('native decode error');return value;};w.msgpack={decode};
 class Worker{constructor(url){this.url=url;}}w.Worker=Worker;
 w.eval(code);const api=w.__brio_asset_retrieval;await api.ready;assert(api.state.active);assert.equal(w.WebSocket.OPEN,1);
 const p=w.fetch('/api/state',{method:'POST',body:'{"request":1}',headers:{Authorization:'secret'}});assert.equal(p,promises.at(-1),'fetch promise identity preserved');assert.equal(await (await p).text(),'{"ok":true}','original response remains readable');
 const outgoing=new w.Uint8Array([9,8,7]);assert.equal(existing.send(outgoing),'native-send');outgoing[0]=99;existing.dispatchEvent(new w.MessageEvent('message',{data:new Blob([new Uint8Array([4,3,2])])}));
 const socket=new w.WebSocket('wss://buildroyale.io/new');assert(socket instanceof WS);socket.dispatchEvent(new w.MessageEvent('message',{data:'incoming text'}));assert.equal(socket.send('outgoing text'),'native-send');assert.equal(sends,2);
 const value={t:'x',p:[1,'player'],secret:'hidden',nested:{items:[1,2]}};Object.defineProperty(value,'poison',{get(){throw Error('getter invoked');},enumerable:true});assert.equal(w.msgpack.decode(value),value);assert.throws(()=>w.msgpack.decode({throw:true}),/native decode error/);assert.equal(decoderCalls,2);
 const xhr=new w.XMLHttpRequest();assert.equal(xhr.open('GET','/xhr.bin'),'open');xhr.setRequestHeader('Authorization','secret');assert.equal(xhr.send(),'xhr-send');assert.equal(xhrCalls,1);assert.deepEqual([...new w.Uint8Array(xhr.response)],[5,6,7]);
 const worker=new w.Worker('/worker.js');assert(worker instanceof Worker);
 await assert.rejects(w.fetch('/reject'),/native fetch rejection/);const oversized=await w.fetch('/large');assert.equal((await oversized.arrayBuffer()).byteLength,4,'body cap cannot consume native response');await w.fetch('/live.json');observer.cb({getEntries:()=>[{name:'https://buildroyale.io/live.json',toJSON(){return {name:this.name,initiatorType:'fetch'};}}]});
 for(let i=0;i<40;i++)await delay(10);await api.captureCanvases();const dynamic=w.document.createElement('img');dynamic.src='/dynamic.png';w.document.body.appendChild(dynamic);await delay(150);
 assert(calls.some(x=>x.input.includes('topmusket.png')),'escaped/static source assets discovered');assert(calls.some(x=>x.input.includes('main.js.map')));assert(calls.some(x=>x.input.includes('/extra.js')));assert(calls.some(x=>x.input.includes('/background.png')));assert(calls.some(x=>x.input.includes('/old.png')));assert(calls.some(x=>x.input.includes('/worker.js')));assert.equal(calls.filter(x=>x.input==='/api/state').length,1,'no mutation replay');assert.equal(calls.filter(x=>String(x.input).includes('live.json')).length,1,'live fetch not refetched');
 const archive=await api.download();assert.equal(archive,downloaded);assert.equal(downloadName,'brio_asset_retrival-results.zip');assert.equal(w.document.querySelector('[data-a=zip]').disabled,false,'ZIP may be downloaded again after export');assert.equal(w.fetch,nativeFetch);assert.equal(w.WebSocket,WS);assert.equal(WS.prototype.send,originalSend);assert.equal(XHR.prototype.open,nativeOpen);assert.equal(XHR.prototype.send,nativeSend);assert.equal(w.msgpack.decode,decode);assert(observer.closed);assert.equal(intervals.size,0);
 fs.writeFileSync('/tmp/brio-asset-retrieval-test.zip',Buffer.from(await archive.arrayBuffer()));
 const result=execFileSync('python',['-c',String.raw`
import json,zipfile
p='/tmp/brio-asset-retrieval-test.zip'
with zipfile.ZipFile(p) as z:
 assert z.testzip() is None
 names=z.namelist();assert len(names)==len(set(names));assert all('/' not in n and '\\' not in n for n in names)
 manifest=json.loads(z.read(next(n for n in names if n.endswith('__manifest.json'))))
 events=[]
 for n in names:
  if '.jsonl' in n: events += [json.loads(l) for l in z.read(n).decode().splitlines()]
 assert any(e['type']=='native-decoded' and e['data']['secret']=='[REDACTED]' and e['data']['poison']=='[ACCESSOR OMITTED]' for e in events)
 assert any(e['type']=='http-request' and e.get('headers',{}).get('authorization')=='[REDACTED]' for e in events)
 wires=[e for e in events if e['type']=='wire'];bodies=[z.read(e['file'])[e['offset']:e['offset']+e['length']] for e in wires]
 assert bytes([9,8,7]) in bodies,'typed array bytes copied before mutation'
 assert bytes([4,3,2]) in bodies,'Blob frame preserved'
 assert b'incoming text' in bodies and b'outgoing text' in bodies
 assert any(n.endswith('original.js') for n in names),'embedded map original source recovered'
 assert any(n.endswith('topmusket.png') for n in names)
 assert any(z.read(n)==bytes([5,6,7]) for n in names if '__xhr_' in n),'XHR binary exact'
 assert all('rawURL' not in r for r in manifest['files'])
 assert any('HTTP body budget'==g['stage'] for g in json.loads(z.read(next(n for n in names if n.endswith('__gaps.json')))))
 assert any(e['type']=='http-error' and 'native fetch rejection' in e['error'] for e in events)
 assert not any('token=hidden' in json.dumps(e) for e in events),'metadata URL tokens scrubbed'
 print(json.dumps({'zipFiles':len(names),'events':len(events),'wireRecords':len(wires),'zipCRC':'passed','flat':'passed','networkDelegation':'passed','restoration':'passed'}))
`],{encoding:'utf8'});console.log(result.trim());
 // Reinjection must preserve previous data and export it after a stopped/new injection session.
 api.destroy();w.eval(code);await w.__brio_asset_retrieval.ready;await delay(100);const recovery=await w.__brio_asset_retrieval.download();assert(recovery.size>archive.size,'previous saved records retained across reinjection');w.__brio_asset_retrieval.destroy();dom.window.close();
 console.log('Standalone supplemental collector passed: actual minified execution, IndexedDB recovery, source discovery, exact wire/asset bytes, ZIP CRC/flat paths, native delegation and teardown.');
})().catch(e=>{console.error(e);process.exitCode=1;});
