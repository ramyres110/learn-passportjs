const express = require('express');
const router = express.Router();

const checkAuthentication = require('../lib/middleware-lib').checkAuthentication;

const User = require('../model/user-model');
const Permition = require('../model/permition-model');



router.get('/',checkAuthentication, function (req, res, next) {
    let include = [{
        model: Permition
    }];
    User.findAll({include: include})
        .then((data) => {
            if(data){
                res.render('list-user', {currentUser: req.user, users: data });
            }else{
                res.send('Error')
            }
        })
        .catch((err) => {
            res.end('Error: '+ err);
        })
});

router.get('/add',checkAuthentication, function (req, res, next) {
    res.render('register-user', {currentUser: req.user});
});

router.post('/add',checkAuthentication, function (req, res, next) {
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

router.post('/edit/:id',checkAuthentication, function (req, res, next) {
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

router.get('/edit/:id',checkAuthentication, function (req, res, next) {
    User.findOne({ where: { id: req.params.id } })
        .then(data => {
            if (data)
                res.render('register-user', {currentUser: req.user, user: data });
            else
                res.redirect('/user')
        })
});


router.get('/delete/:id',checkAuthentication, function (req, res, next) {
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
