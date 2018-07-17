const express = require('express');
const passport = require('passport');

const router = express.Router();
const User = require('../model/user-model');

router.get('/login', function (req, res, next) {
  res.render('login', {});
})

router.get('/logout', function (req, res, next) {
  req.logout();
  res.redirect('/auth/login');
})

/* POST users listing. */
router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/auth/login#failure'
  })
);


module.exports = router;
