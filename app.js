'use strict';
require('oneapm');
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const http = require('http');
const https = require('https');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const config = require('./webconfig.json');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);
const api = require('./api');
const library = require('./lib');
const app = express();
mongoose.connect(config.mongoURL);
require('./models')(mongoose);
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
app.use((req, res, next) => {
    req.config = config;
    req.util = library.util;
    req.qiniu = library.qiniu;
    req.model = mongoose.models;
    req.api = api({
        util: library.util,
        model: mongoose.models,
        config: config,
        valiableLang: library.valiableLang
    });
    req.valiableLang = library.valiableLang;
    req.sendEmail = library.sendEmail(mongoose.models);
    // if (req.session.name) {
    //     next();
    // } else {
    //     if (req.url.indexOf("/code/") != -1) {
    //         res.redirect("/");
    //     } else {
    //         next();
    //     }
    // }
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
