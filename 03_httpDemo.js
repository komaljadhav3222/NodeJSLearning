const http=require(`node:http`);

const server=http.createServer((req,res)=>{
res.setHeader('content-type','application/JSON');
res.statusCode=200;
res.end(`<h1>This is demo server </h1>`);
})

server.listen(1337,()=>{
console.log("Server is listening port 1337");
})