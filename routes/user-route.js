var express = require('express');
var router = express.Router();

const User = require('../model/user-model');


router.get('/', function (req, res, next) {
    User.findAll({})
        .then((data) => {
            res.render('list-user', { users: data });
        })
        .catch((err) => {
            res.send('Error: ', err);
        })
});


router.get('/add', function (req, res, next) {
    res.render('register-user', {});
});

router.post('/add', function (req, res, next) {
    try {
        let user = {
            firstName: req.body.first_name,
            lastName: req.body.last_name,
            username: req.body.username,
            password: req.body.password,
            status: req.body.status
        }
        User.create(user)
            .then(() => {
                res.redirect('/user')
            })
            .catch(err => {
                res.send('Error: ', err);
            })

    } catch (error) {
        res.send('Error: ', err);
    }
});

router.post('/edit/:id', function (req, res, next) {
    try {
        let user = {
            firstName: req.body.first_name,
            lastName: req.body.last_name,
            username: req.body.username,
            password: req.body.password,
            status: req.body.status
        }
        User.findOne({ where: { id: req.params.id } })
            .then(data => {
                if (data) {
                    data.update(user)
                        .then(resp => {
                            res.redirect('/user');
                        })
                        .catch(err => {
                            res.send('Error' + err);
                        })
                } else {
                    res.redirect('/user');
                }
            })


    } catch (error) {
        res.send('Error: ', err);
    }
});

router.get('/edit/:id', function (req, res, next) {
    User.findOne({ where: { id: req.params.id } })
        .then(data => {
            if (data)
                res.render('register-user', { user: data });
            else
                res.redirect('/user')
        })
});


router.get('/delete/:id', function (req, res, next) {
    User.findOne({ where: { id: req.params.id } })
        .then(data => {
            if (data) {
                data.destroy()
                    .then(resp => {
                        res.redirect('/user');
                    })
                    .catch(err => {
                        res.send('Error' + err);
                    })
            } else {
                res.redirect('/user');
            }
        })
});




module.exports = router;
