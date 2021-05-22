const express = require('express');
const homeController = require('../controllers/home_controller')


const router = express.Router();


router.get('/', homeController.home)
router.use('/tasks' , require('./tasks'));

module.exports  = router