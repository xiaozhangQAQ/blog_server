var express = require('express');
var router = express.Router();

const controller = require('../../controller/common/index.js');

/* GET home page. */
router.get('/qntoken', controller.qn_token);

module.exports = router;