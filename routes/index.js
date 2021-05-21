const express = require('express');
const homeController = require('../controllers/home_controller')


const router = express.Router();


router.get('/', homeController.home)
router.use('/create-contact' , require('./tasks'));

module.exports  = router