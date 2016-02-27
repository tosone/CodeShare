/* global __dirname */
'use strict';
var express = require('express');
var ejs = require('ejs');
var path = require('path');
var app = express();
var http = require('http');
var https = require('https');
var fs = require('fs');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var config = require('webconfig.js');
app.use(session({
    store: new MongoStore({
        url: config.mongoURL,
        ttl: 14 * 24 * 60 * 60
    }),
    name: "sessionid",
    secret: '8541539655',
    resave: true,
    saveUninitialized: true,
    cookie: {
        path: '/',
        httpOnly: false,
        secure: false,
        maxAge: 60 * 60 * 20
    },
    rolling: true,
    unset: "destroy"
}));
app.use(morgan('dev'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use('/', require('./routes/index'));
// app.use('/admin', require('./routes/admin'));
app.use('/login', require('./routes/sign/login'));
app.use('/logout', require('./routes/sign/logout'));
app.use('/sign', require('./routes/sign/sign'));
app.use('/user', require('./routes/user/user'));
app.use('/code', require('./routes/code'));
app.use('/test', require('./routes/test'));
// app.use('/list/code', require('./routes/list/code'));
http.createServer(app).listen(80, function () {
    console.log('Server runing at http://127.0.0.1:80.');
});
https.createServer({
    key: fs.readFileSync('./privatekey.pem'),
    cert: fs.readFileSync('./certificate.pem')
}, app).listen(443, function () {
    console.log('Https server listening at https://127.0.0.1:443.');
});