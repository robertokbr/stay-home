const express = require('express')
const server = express()
const nunjucks = require("nunjucks")
const knex = require('./src/database/connection')
const { response } = require('express')





nunjucks.configure("views", {
    express: server,
    noCache: true,
    
})

server.use(express.static('public'))
//habilitar req.body
server.use(express.urlencoded({ extended: true }))




server.get("/", async function (req, res) {
    
    
    const rows = await knex('ideas').select('*');
    if (!rows){
        return response.status(400).json({ message: 'Not Found'})
    }
    
    const reversedIdeas = [...rows].reverse()
    let lastIdeas = []
    for (let idea of reversedIdeas) {
        if (lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    }
    
    return res.render("index.html", { ideas: lastIdeas })
    
})



server.get("/ideias", async function (req, res) {
    
    const rows = await knex('ideas').select('*')
    if (!rows){
        return response.status(400).json({ message: 'Not Found'})
    }
    const reversedIdeas = [...rows].reverse()
    
    return res.render("ideias.html", { ideas: reversedIdeas })
})

server.post("/", async function (req, res) {
    
    const { image, title, category, description, link } = req.body;
    
    const idea =  {
        image,
        title,
        category,
        description,
        link
    };

    await knex('ideas').insert(idea);
    
    return res.redirect("/ideias");
    
    
    
})
server.listen(3000)