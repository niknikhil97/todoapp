const Task = require('../models/tasks');

module.exports.home = function(req,res){
    Task.find({} , function(err , tasks){
        if(err){
            console.log("Error fetching Tasks from DB");
        }

        // get data from db (sorted by date)
        Task.find({}).sort({due_date:1}).exec(function(error , sortedTasks){
            
            if(error){
                res.render('home');
            }

            res.render('home' , {tasks:sortedTasks});
        })
    })
}