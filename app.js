const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.end('Olá Mundo!\n');
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});