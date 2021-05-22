const Task = require('../models/tasks');

module.exports.createTask = function(req,res){
    // get the data required
    let data = req.body
    console.log(data);

    // create new task
    Task.create(data , function(error , newTask){
        if(error){
            console.log("Error creating the contact");
            console.log(error)
            return;
        }

        console.log('New Task:',newTask);

    });

    // revert back to the previos page
    return res.redirect('back');
}

module.exports.deleteTask = function(req,res){
    let id = req.query.id;

    // find the task in the database using id and delete it
    console.log(id)
    Task.findByIdAndDelete(id , function(error){
        if (error){
            console.log('Error in deleting an object from database')
            return;
        }

        return res.redirect('back');
    })
}