// Conservative local build: no compression rewrites, no external loader, no native source evaluation.
const fs=require('fs'),vm=require('vm'),{minify}=require('terser');
(async()=>{
 const release=require('../src/production/release.json').release;
 const source=fs.readFileSync('src/brio.js','utf8');new vm.Script(source);
 const {code}=await minify(source,{compress:false,mangle:true,format:{ascii_only:false,comments:false}});
 new vm.Script(code);const comments=[];require('acorn').parse(code,{ecmaVersion:'latest',onComment:comments});
 if(comments.length)throw Error('Minified payload contains comments');
 // Validate immutable readable/payload archives before writing any release output.
 const bookmarklet='javascript:'+encodeURIComponent('void '+code);
 const artifacts=[[`versions/v${release}/brio.js`,source],[`versions/v${release}/brio-v${release}.min.js`,code],[`versions/v${release}/brio-v${release}.bookmarklet.txt`,bookmarklet]];
 for(const [path,text]of artifacts)if(fs.existsSync(path)&&fs.readFileSync(path,'utf8')!==text)throw Error('Refusing to overwrite version archive: '+path);
 fs.mkdirSync('dist',{recursive:true});fs.mkdirSync(`versions/v${release}`,{recursive:true});
 fs.writeFileSync(`dist/brio-v${release}.min.js`,code);fs.writeFileSync(`dist/brio-v${release}.bookmarklet.txt`,bookmarklet);for(const [path,text]of artifacts)fs.writeFileSync(path,text);
 console.log('Parsed source and standalone minified payload:',Buffer.byteLength(code),'bytes; zero comments; encoded javascript: bookmarklet and immutable archives verified');
})().catch(e=>{console.error(e);process.exitCode=1});
