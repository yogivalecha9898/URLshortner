const path = require('path')
const express = require('express')
const url = require('./urlShortener.js')
const port = process.env.PORT || 3300

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewDirectoryPath = path.join(__dirname,"../template/views")

app.set('views', viewDirectoryPath)
app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))


app.get('',(req,res)=>{
    res.render('index')
})

app.get('/url',(req,res)=>{
    if(!req.query.url)
        return res.send({
            error:"Provide an URL"
        })
    url.shortener(req.query.url,(error,{link1,link2,link3})=>{
        if(error)
            return res.send({error})
        return res.send({
            link1,
            link2,
            link3,
        })
    })
})

app.listen(port,(error)=>{
    if(error)
        console.log(error)
    console.log('Server is up on port '+port)
})