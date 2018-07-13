var express = require('express');
var router = express.Router();

/* GET listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* POST users listing. */
router.post('/login', function (req, res, next) {
  res.send('Ok')
});



module.exports = router;
