const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../model/user-model');

//session
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id).then(user => {
        if(user)
            done(null, user);
        else
            done(null,false)
    });
});

const strategy = new LocalStrategy((username, password, done) => {
    User.findOne({ where: { username: username, password: password } })
        .then(currentUser => {
            if (currentUser) {
                done(null, currentUser)
            } else {
                done(null, false)
            }
        })
        .catch(err => {
            done(err);
        })
});

passport.use(strategy);

