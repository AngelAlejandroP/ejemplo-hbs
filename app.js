const express=require('express')
const {engine}=require('express-handlebars')

//initialization
const app=express()

//settings
app.set('views', './views')
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

//routes
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000);