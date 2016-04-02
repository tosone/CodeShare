"use strict";
// const mongo_express = require('mongo-express/lib/middleware');
// const mongo_express_config = require('../mongo_express_config');
module.exports = (app) => {
    app.use('/', require('./index'));
    app.use('/login', require('./sign/login'));
    app.use('/logout', require('./sign/logout'));
    app.use('/sign', require('./sign/sign'));
    app.use('/user', require('./user/user'));
    app.use('/code', require('./code'));
    app.use('/test', require('./test'));
    app.use('/comment', require('./comment'));
    // app.use('/mongo', mongo_express(mongo_express_config));
}
