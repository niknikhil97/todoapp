const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:["personal","work","school","other"],
        required:true
    },
    due_date:{
        type:Date,
        required:true
    }
})

const Task = mongoose.model('Task' , taskSchema);

module.exports = Task;