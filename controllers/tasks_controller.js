// 
const { findById, findByIdAndDelete } = require('../models/tasks');
const Task = require('../models/tasks');



// acction to create and add a new task in the database
module.exports.createTask = function(req,res){
    // get the data required
    let data = req.body

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


// action to delete a specific task in the database by comparing with _id field
module.exports.deleteTask = function(req,res){
    let id = req.query.id;
    

    // find the task in the database using id and delete it
    Task.findByIdAndDelete(id , function(error){
        if (error){
            console.log('Error in deleting an object from database')
            return;
        }
        // rever back to the previous page
        return res.redirect('back');
    })
}


// actoin to delete one or more tasks at once by comparing the ids of the tasks
module.exports.deleteTasks = function(req,res){
    
    // get the value of the key if ids of tasks
    const ids = req.body["delete-task"];
    if (!ids){
        return res.redirect('back');
    }
    // if the type of value is a string
    if(typeof(ids)==="string"){
        // delete only one task and not iterate over it
        Task.findByIdAndDelete(ids , function(error){
            if(error){
                console.log("Unable to delete id:", id);
                console.log(error);
            }
            console.log("Deleted Successfully")
        })
    }else{
        // if it is not a string then it is an array 
        // delete each by iterating over the array
        for(let id of ids){
            console.log(id);
            // delete each task item
            Task.findByIdAndDelete(id , function(error){
                if(error){
                    console.log("Unable to delete id:", id);
                    console.log(error)
                }
                console.log("Deleted Successfully");
            }
        )}
    }

    // revert back to the previos page
    // in both the cases
    return res.redirect('back');
}