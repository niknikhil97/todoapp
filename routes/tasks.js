const express = require('express');

const router = express.Router();

router.get('/' , function(req,res){
    return res.send("Create Tasks Page")
});

module.exports =  router