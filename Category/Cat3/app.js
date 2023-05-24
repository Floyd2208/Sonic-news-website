const express = require('express')
// const bodyParser = require('body-parser')

 
const app = express()
const port = 4003

//static files
app.use(express.static('public'))
    app.use('/css', express.static(__dirname +'public/css'))
    app.use('/img', express.static(__dirname +'public/img'))
    app.use('/js', express.static(__dirname +'public/js'))

    //Templating Engine
    app.set('views', './src/views')
    app.set('view engine', 'ejs')

    //Route 
    const newsRouter = require('./src/routes/news')

    app.use('/', newsRouter)


// Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`))