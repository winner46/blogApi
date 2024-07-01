const express = require('express');
const router = express.Router();
const userRoute = require('./user');
const blogRoute = require('./blog');
const loginRoute = require('./user.login');

router.use('/users', userRoute);
router.use('/login',loginRoute);
router.use('/blog',blogRoute);

module.exports = router;