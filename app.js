const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require("express-session");

const passport = require('passport');
const passportConfig = require('./config/passport-config');

// routes
const index = require('./routes/index-route');
const auth = require('./routes/auth-route');
const user = require('./routes/user-route');
const routine = require('./routes/routine-route');

// app
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//plugins
app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: "sistemaQWE123"}));
//passport
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/', index);
app.use('/auth', auth);
app.use('/user', user);
app.use('/routine', routine);

//model
const init_model = require('./model/init-model');
init_model();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
