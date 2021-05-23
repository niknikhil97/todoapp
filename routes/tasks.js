const express = require('express');
const taskController = require('../controllers/tasks_controller')

const router = express.Router();

router.post('/create-task' , taskController.createTask);
router.get('/delete-task' , taskController.deleteTask);
router.post('/delete-tasks' , taskController.deleteTasks);


module.exports =  router