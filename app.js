const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    url = req.url
    //soma, subtração, divisão, multiplicação
    if(url == '/soma'){
        variavel1 = 50
        variavel2 = 40
        console.log('A soma dos dois valores é: ',(variavel1+variavel2))
    }

    if(url == '/subtracao'){
      
    }
    

});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});