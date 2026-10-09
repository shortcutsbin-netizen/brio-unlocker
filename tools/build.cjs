// Conservative local build: no compression rewrites, no external loader, no native source evaluation.
const fs=require('fs'),vm=require('vm'),{minify}=require('terser');
(async()=>{
 const source=fs.readFileSync('src/brio.js','utf8');new vm.Script(source);
 const {code}=await minify(source,{compress:false,mangle:true,format:{ascii_only:false,comments:false}});
 new vm.Script(code);const comments=[];require('acorn').parse(code,{ecmaVersion:'latest',onComment:comments});
 if(comments.length)throw Error('Minified payload contains comments');
 // Validate immutable readable/payload archives before writing any release output.
 const artifacts=[['versions/v53/brio.js',source],['versions/v53/brio-v53.min.js',code]];
 for(const [path,text]of artifacts)if(fs.existsSync(path)&&fs.readFileSync(path,'utf8')!==text)throw Error('Refusing to overwrite version archive: '+path);
 fs.mkdirSync('dist',{recursive:true});fs.mkdirSync('versions/v53',{recursive:true});
 fs.writeFileSync('dist/brio-v53.min.js',code);for(const [path,text]of artifacts)fs.writeFileSync(path,text);
 console.log('Parsed source and standalone minified payload:',Buffer.byteLength(code),'bytes; zero comments; immutable source/payload archives verified');
})().catch(e=>{console.error(e);process.exitCode=1});
