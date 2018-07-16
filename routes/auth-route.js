var express = require('express');
var router = express.Router();

const User = require('../model/user-model');

/* GET listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


/* GET listing. */
router.get('/login', function (req, res, next) {
  res.render('login', {});
})

/* POST users listing. */
router.post('/login', function (req, res, next) {
  //{"username":"admin","password":"admin","action":""}
  let user = req.body;
  User.findOne({ where: user })
    .then((data) => {
      if (!data) {
        res.redirect('/');
      }
      res.redirect('/user');
    })
    .catch(err => {
      res.send('Error:' + err);
    });
});



module.exports = router;
