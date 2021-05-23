// importing mongoose (same instance as in index.js)
const mongoose = require('mongoose');

// schema for storing tasks
const taskSchema = new mongoose.Schema({
    description: {
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:["personal","work","school","cleaning","other"],
        required:true
    },
    due_date:{
        type:Date,
        required:true
    }
})

// naming the defines models as Task
const Task = mongoose.model('Task' , taskSchema);

module.exports = Task;