var http = require('http')

http.createServer(function (req, res) {
    res.end("Hello World! Welcome to the Paulo website");
}).listen(8081);

console.log('Servidor rodando')
