const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

router.get('/',  userController.getAllUser);

router.get('/:id', userController.getUser);

router.post('/', userController.addUser);

router.delete('/:id', userController.removeUser );

router.put('/:id', userController.updateUser);

module.exports = router;

