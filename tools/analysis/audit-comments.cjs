// Authoring audit only: parse source, record helper/block locations, and require adjacent annotations.
// The vendored Acorn line is deliberately excluded and independently compared with the frozen V49 bytes.
const fs=require('fs'),crypto=require('crypto'),{parse}=require('acorn');
const isFunction=n=>['FunctionDeclaration','FunctionExpression','ArrowFunctionExpression'].includes(n.type);
function inspect(source){
  const comments=[],ast=parse(source,{ecmaVersion:'latest',locations:true,onComment:comments});
  const start=source.match(/^\(function\(e,t\)\{typeof exports/m)?.index??-1,end=source.indexOf('\n',start);
  if(start<0||end<start)throw Error('Vendored parser boundary not found');
  const blocks=[],functions=[],missing=[];
  function name(n,ancestors){
    if(n.id?.name)return n.id.name;
    const p=ancestors.at(-1);
    if(p?.type==='VariableDeclarator')return p.id.name||'destructured helper';
    if(p?.type==='AssignmentExpression')return source.slice(p.left.start,p.left.end).replace(/\s+/g,' ').slice(0,100);
    if(p?.type==='Property')return p.key.name||p.key.value||'computed method';
    if(p?.type==='CallExpression'){
      // An IIFE's callee is the whole function: naming it by raw source would duplicate megabytes in the map.
      if(p.callee===n)return ancestors.at(-2)?.type==='VariableDeclarator'?ancestors.at(-2).id.name:'startup IIFE';
      return source.slice(p.callee.start,p.callee.end).replace(/\s+/g,' ').slice(0,80)+' callback';
    }
    return 'anonymous callback';
  }
  function walk(n,ancestors=[],owner='startup'){
    if(!n?.type||n.start>=start&&n.end<=end)return;
    if(isFunction(n)){
      owner=name(n,ancestors);
      const documented=n.body.type==='BlockStatement'
        ?comments.some(c=>c.start>n.body.start&&c.end<=(n.body.body[0]?.start??n.body.end-1))
        :comments.some(c=>c.end<=n.start&&source.slice(c.end,n.start).trim()===''&&n.start-c.end<8);
      functions.push({owner,line:n.loc.start.line,body:n.body.type,documented});
      if(!documented)missing.push({type:'function',owner,line:n.loc.start.line,start:n.start});
    }
    if(n.type==='BlockStatement'){
      const first=n.body[0]?.start??n.end-1;
      const documented=comments.some(c=>c.start>n.start&&c.end<=first);
      blocks.push({owner,line:n.loc.start.line,documented});
      if(!documented)missing.push({type:'block',owner,line:n.loc.start.line,start:n.start});
    }
    for(const value of Object.values(n))if(Array.isArray(value))for(const child of value)walk(child,[...ancestors,n],owner);else if(value?.type)walk(value,[...ancestors,n],owner);
  }
  walk(ast);
  return {blocks,functions,missing,comments:comments.length,vendor:{characters:end-start,sha256:crypto.createHash('sha256').update(source.slice(start,end)).digest('hex')}};
}
module.exports={inspect};
if(require.main===module){
  const source=fs.readFileSync(process.argv[2]||'src/brio.js','utf8'),report=inspect(source);
  const previous=inspect(fs.readFileSync('versions/v49/brio.js','utf8'));
  if(report.vendor.sha256!==previous.vendor.sha256)throw Error('Vendored parser bytes changed');
  if(process.argv[3])fs.writeFileSync(process.argv[3],JSON.stringify(report,null,2)+'\n');
  console.log(JSON.stringify({blocks:report.blocks.length,functions:report.functions.length,comments:report.comments,missing:report.missing.length,vendorUnchanged:true}));
  if(report.missing.length){console.error(JSON.stringify(report.missing.slice(0,15)));process.exitCode=1;}
}
