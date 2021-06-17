// package import
const express = require('express');

// controller imports
const taskController = require('../controllers/tasks_controller')

const router = express.Router();


// actions assigned to paths
router.post('/create-task' , taskController.createTask);
router.get('/delete-task' , taskController.deleteTask);
router.post('/delete-tasks' , taskController.deleteTasks);


module.exports =  router