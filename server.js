
const http = require('http'); //import modulu http

const server = http.createServer((req, res) =>{
    if(req.url === "/"){
        res.write("Witaj na stronie głównej");
        res.end();
    }
    else if(req.url === "/kontakt"){
        res.write("Witaj na stronie kontaktowej");
        res.end();
    }
    else{
        res.write("404 - PAGE NOT FOUND");
        res.end();
    }
})

server.listen(3000, "127.0.0.1", ()=>{
    console.log('Serwer dziala na porcie 3000 i adresie http://127.0.0.1:3000/');
})