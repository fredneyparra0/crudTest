const express = require('express');
const router = express.Router();
const controllerUsers = require('../controllers/userController')

router.get('/', controllerUsers.getUsers)

router.post('/', controllerUsers.createUser)

router.put('/:id', controllerUsers.updateUser)

router.delete('/:id', controllerUsers.deleteUser)

module.exports = router