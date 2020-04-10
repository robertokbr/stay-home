//express criar e conf o sevrer
const express = require('express')
const server = express()
 

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
     noCache: true,

}) 



server.use(express.static('public'))
//liguei meu servidor na porta 3000
server.listen(3000)

server.get("/", function(req, res){

    return res.render("index.html")
})  


server.get("/ideias", function(req, res){

    return res.render("ideias.html")
})  


