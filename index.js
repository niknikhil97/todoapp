// packages import
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('./config/mongoose');

// port
const port = 8000;


// initializing app
const app = express();
app.use(expressLayouts);
app.use(express.static('assets'));

// setting properties
app.set('views' , './views');
app.set('view engine', 'ejs');
app.set("layout extractStyles",true);
app.set("layout extractScripts",true);



// Routing requests
app.use('/', require('./routes'))



app.listen(port , function(error){
    if (error){
        console.error("Error connecting to port :" , port);
    }
    console.log("Successfully connected to port : ",port);
})

