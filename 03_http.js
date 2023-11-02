//HTTP module creates HTTP server that listens to request and send responses

const http=require('http');

const server = http.createServer((request, responses)=>{
console.log(request.url);
responses.statusCode=200;
// responses.setHeader('content-type','application/json');
responses.headersSent={ 'content-length': '123',
'content-type': 'text/plain',
'connection': 'keep-alive',
'host': 'example.com',
'accept': '*/*' }
responses.end('<h1>This is my first server</h1>');
})
//listen port ---port is the port at which your service is listening for incoming HTTP requests. By default, this is 8080
// const port = process.env.port;
server.listen(3000,()=>{
    console.log(`server listening on port 3000`);
})