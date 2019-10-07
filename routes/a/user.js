var express = require('express');
var router = express.Router();

const controller = require('../../controller/a/index.js');

/* GET home page. */
router.post('/login', controller.user.login);
router.get('/info', controller.user.getUserInfo);
router.post('/logout', controller.user.logout);

module.exports = router;
