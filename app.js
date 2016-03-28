'use strict';
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const http = require('http');
const https = require('https');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const config = require('webconfig.js');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);
const library = require('./lib');
const app = express();
mongoose.connect(config.mongoURL);
app.use(session({
    store: new MongoStore({
        url: config.mongoURL,
        ttl: config.cookieMaxAge
    }),
    name: "sessionid",
    secret: config.cookieSecret,
    resave: true,
    saveUninitialized: true,
    cookie: {
        path: '/',
        httpOnly: false,
        secure: false,
        maxAge: config.cookieMaxAge
    },
    rolling: true,
    unset: "destroy"
}));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
require('./models').forEach((model) => {
    model(mongoose);
});
app.use((request, response, next) => {
    request.model = mongoose.models;
    request.util = library.util;
    request.qiniu = library.qiniu;
    request.sendEmail = library.sendEmail(mongoose.models);
    request.valiableLang = library.valiableLang;
    next();
});
require('./routes/routes')(app);
http.createServer(app).listen(80, function() {
    console.log('Http server listening at http://127.0.0.1:80.');
});
https.createServer({
    key: fs.readFileSync('./privatekey.pem'),
    cert: fs.readFileSync('./certificate.pem')
}, app).listen(443, function() {
    console.log('Https server listening at https://127.0.0.1:443.');
});
