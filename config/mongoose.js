const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:todo" , {useNewUrlParser:true})

const db = mongoose.connection;

db.on('error' , console.error.bind(console , "Error connecting to MongoDB server"));

db.once('open' , function(){
    console.log("Succesfully connected to MongoDB server");
})

module.exports = db;