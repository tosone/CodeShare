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
app.use((req, res, next) => {
    req.model = mongoose.models;
    req.util = library.util;
    req.qiniu = library.qiniu;
    req.sendEmail = library.sendEmail(mongoose.models);
    req.valiableLang = library.valiableLang;
    next();
});
require('./routes')(app);
http.createServer(app).listen(config.PORT, function() {
    console.log('Http server listening at http://127.0.0.1:' + config.PORT + '.');
});
https.createServer({
    key: fs.readFileSync('./pem/privatekey.pem'),
    cert: fs.readFileSync('./pem/certificate.pem')
}, app).listen(443, function() {
    console.log('Https server listening at https://127.0.0.1:443.');
});
