const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    variavel = req.url

    if(variavel == '/soma'){
        console.log("rota 1")
    }else if(variavel == '/resultado'){
        console.log("rota 2")
    }

});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});