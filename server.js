
const http = require('http'); //import modulu http

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Serwer działa!'); 
})

server.listen(3000, "127.0.0.1", ()=>{
    console.log('Serwer dziala na porcie 3000 i adresie http://127.0.0.1:3000/);
})