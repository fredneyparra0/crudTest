const express = require('express');
const router = express.Router();
const controllerHome = require('../controllers/homeController')

router.post('/', controllerHome.home)

router.post('/signup', controllerHome.singup)

router.post('/singin', controllerHome.singin)

router.post('/validate', controllerHome.validateToken)

module.exports = router