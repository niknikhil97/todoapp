// package imports
const express = require('express');

// controller imports
const homeController = require('../controllers/home_controller')


const router = express.Router();



router.get('/', homeController.home)

// intercept the requests to tasks path
router.use('/tasks' , require('./tasks'));


module.exports  = router