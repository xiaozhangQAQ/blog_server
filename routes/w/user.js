var express = require('express');
var router = express.Router();

const controller = require('../../controller/w/index.js');

/* GET home page. */
router.post('/login', controller.user.login);


module.exports = router;
