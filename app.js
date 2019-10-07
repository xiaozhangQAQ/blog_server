var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

// a
var aUserRouter = require('./routes/a/user');

// w
var wUserRouter = require('./routes/w/user');
var wArticleRouter = require('./routes/w/article');

//common
var cQiniuToken = require('./routes/common/index')

var app = express();

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,Origin,Accept,X-Requested-With,X-Token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Content-Type', 'application/json;charset=utf-8');
      next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//a
app.use('/a/user', aUserRouter);
app.use('/a/common', cQiniuToken);
//w
app.use('/w/user', wUserRouter);
app.use('/w/article', wArticleRouter);
app.use('/w/common', cQiniuToken);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
