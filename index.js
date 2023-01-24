const express = require("Express");
const app = express();
const handlebars = require("express-handlebars")

//configurar
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('View engine', 'handlebars')

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/blog", function(req, res){
    res.send('Bem vindo ao meu blog!')
})

app.get("/ola/:nome/:cargo/:cor", (req, res) =>{
    res.send("<h1>Ola senhor "+req.params.nome+"</h1>"+"<h2>Seu cargo atual é: "+req.params.cargo+"</h2>"+'<h3>Sua cor favorita registrada é: '+req.params.cor+"</h3>");
})

app.listen(8081, function(){
    console.log("servidor rodando na url http://localhost:8081/")
});