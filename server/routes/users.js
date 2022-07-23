const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/userController');

router.post('/signin', UsersController.signin);
router.post('/signup', UsersController.signup);

module.exports = router;
