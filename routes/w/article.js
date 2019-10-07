var express = require('express');
var router = express.Router();

const controller = require('../../controller/w/index.js');
// const aa = require('../../config/demo1.js');

/* GET home page. */
router.post('/list', controller.article.list);

module.exports = router;
