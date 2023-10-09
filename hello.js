const http=require('http');
const server = http.createServer((req,res)=>{
    if (req.url==='/'){
        res.write('Hello Projournal');
        res.end();
    }
});
server.listen(8080);
console.log('Listening to 8080');