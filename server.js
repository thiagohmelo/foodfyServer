const express = require('express')
const nunjucks = require('nunjucks')


const server = express()
const recipes = require('./data')


//config do template engine - nunjucks
server.set('view engine', 'njk')

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.use(express.static('public'))


server.get('/', function (req,res) {
    return res.render('foods')
})


server.get('/receitas.html', function (req,res) {

    return res.render('receitas', { items: recipes })
})


server.get('/inforecipe.html', function(req, res) {
    const id = req.query.id
    
    
    const inforecipe = recipes.find(function(inforecipe) {
        if (inforecipe.id == id) {
            return true
        }
    })

    if (!inforecipe) {
        return res.send('recipe not found =(')
    }
        
    return res.render('inforecipe', { item: inforecipe })
}) 



server.listen(5000, function(){
    console.log('server is running!')
}) 