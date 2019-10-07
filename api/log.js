var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({ data:{ name: 'aaab', pwd: '123' },code:200});
    // console.log(req);//前端传过来的参数
    // aa
});
router.post('/', function(req, res, next) {
  res.json({ data:{ name: 'aaac', pwd: '123' },code:200});
  // console.log(req.body);//前端传过来的参数
});

module.exports = router;
