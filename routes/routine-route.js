var express = require('express');
var router = express.Router();
const checkAuthentication = require('../lib/middleware-lib').checkAuthentication;
const Routine = require('../model/routine-model');

/* GET home page. */
router.get('/',checkAuthentication, function (req, res, next) {
  Routine.findAll()
    .then(data => {
      res.render('list-routine', { currentUser: req.user,routines: data });
    })
    .catch(err => {
      throw err;
    })
});

router.get('/add',checkAuthentication, function (req, res, next) {
  res.render('register-routine', {currentUser: req.user, routines: [] });
});

router.post('/add',checkAuthentication, function (req, res, next) {
  let newRoutine = req.body;
  Routine.create(newRoutine)
    .then(data => {
      if (data) {
        res.redirect('/routine')
      } else {
        res.redirect('/routine/add')
      }
    })
    .catch(err => {
      throw err;
    })
});

router.post('/edit/:id',checkAuthentication, function (req, res, next) {
  try {
    let routine = req.body;
    Routine.findOne({ where: { id: req.params.id } })
      .then(data => {
        if (data) {
          data.update(routine)
            .then(resp => {
              res.redirect('/routine');
            })
            .catch(err => {
              res.send('Error' + err);
            })
        } else {
          res.redirect('/routine');
        }
      })
  } catch (error) {
    res.send('Error: ', err);
  }
});

router.get('/edit/:id',checkAuthentication, function (req, res, next) {
  Routine.findOne({ where: { id: req.params.id } })
    .then(data => {
      if (data)
        res.render('register-routine', { currentUser: req.user, routine: data });
      else
        res.redirect('/routine')
    })
});

router.get('/delete/:id',checkAuthentication, function (req, res, next) {
  Routine.findOne({ where: { id: req.params.id } })
      .then(data => {
          if (data) {
              data.destroy()
                  .then(resp => {
                      res.redirect('/routine');
                  })
                  .catch(err => {
                      res.send('Error' + err);
                  })
          } else {
              res.redirect('/routine');
          }
      })
});

module.exports = router;
