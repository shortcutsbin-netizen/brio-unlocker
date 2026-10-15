// Standalone build; does not touch numbered suite source, release archive, version or build command.
const fs=require('fs'),vm=require('vm'),crypto=require('crypto'),{minify}=require('terser'),acorn=require('acorn');
(async()=>{
 const vendor=fs.readFileSync(require.resolve('acorn'),'utf8');
 fs.copyFileSync(require('path').join(require('path').dirname(require.resolve('acorn')),'../LICENSE'),'docs/supplemental/acorn-LICENSE.txt');
 const input=fs.readFileSync('src/supplemental/brio_asset_retrieval.js','utf8');
 const source=input.replace('/* ACORN_VENDOR */null',()=>'(()=>{const exports={},module={exports};\n'+vendor+'\nreturn exports.parse;})()');
 new vm.Script(source);const {code}=await minify(source,{compress:false,mangle:true,format:{comments:false,ascii_only:false}});
 const comments=[];acorn.parse(code,{ecmaVersion:'latest',onComment:comments});if(comments.length)throw Error('Payload has comments');
 fs.writeFileSync('dist/brio_asset_retrieval.js',code);
 const audit={artifact:'dist/brio_asset_retrieval.js',bytes:Buffer.byteLength(code),sha256:crypto.createHash('sha256').update(code).digest('hex'),parserBytes:Buffer.byteLength(vendor),parserSha256:crypto.createHash('sha256').update(vendor).digest('hex'),comments:comments.length,standalone:true,numberedReleaseUnchanged:61};
 fs.writeFileSync('docs/supplemental/asset-retrieval-build.json',JSON.stringify(audit,null,2)+'\n');console.log(JSON.stringify(audit));
})().catch(e=>{console.error(e);process.exitCode=1});
