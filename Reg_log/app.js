const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const homeRouter=require('./routers/homeRouter')
const port=process.env.port || 3000;

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = require("jquery")(window);

const app= express();

mongoose.connect('mongodb+srv://floyd:floyd@cluster0.gzon15c.mongodb.net/gfg',{useNewUrlParser:true})
const db=mongoose.connection;

db.on("error",()=>{console.log("Error in connection");})
db.once("open",()=>{console.log("Database connected Sucessfully");})


app.set('veiw engine','ejs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.use('/',homeRouter);

app.listen(port);

