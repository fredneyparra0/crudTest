const express = require('express');
const router = express.Router();
const controllerHome = require('../controllers/homeController')
const authToken =  require('../midelware/authToken')


router.post('/', authToken ,controllerHome.home)

router.post('/signup', controllerHome.singup)

router.post('/singin', controllerHome.singin)

router.post('/validate', controllerHome.validateToken)

module.exports = router