var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require("express-session");
var MySQLStore = require('express-mysql-session')(session);

var mySQLconnection = require("./Models/MySQL");


var MemberApi = require('./routes/MemberApi');

var app = express();

var sessionStore = new MySQLStore({
  expiration: 10800000,
  createDatabaseTable: true,	//是否創建表
  schema: {
    tableName: "shoppingcartapp_sessions_table",	//表名
    columnNames: {		//列選項
      session_id: "shoppingcartapp_sessions_id",
      expires: "shoppingcartapp_sessions_expires",
      data: "shoppingcartapp_sessions_data"
    }
  }
}, mySQLconnection);


var expiryDate = new Date(Date.now() + 60 * 60 * 1000 * 24 * 7); // 1 hour 7天


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  name: "shoppingcartapp_zhjk217",
  key: "session_zhjk217",
  secret: 'asde3121wq1v32981f3cdsh123aqw332gt331erz2x152yb2n',
  store: sessionStore,
  saveUninitialized:false,
  resave: false,
  cookie: (this.name, {
    maxAge: expiryDate,
    secure: !true,
    httpOnly: true,
  })
}));


app.use('/member', MemberApi);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
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
