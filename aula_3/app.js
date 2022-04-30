// intanciando servidor
var http = require('http')
// criando servidor e indicando a porta de funcionamento
http.createServer(function(req,res)
    {res.end("crocodaio")}
).listen(8081)

console.log('ta rodando')