"use strict";

module.exports = (app) => {
    app.use('/', require('./routes/index'));
    app.use('/signin', require('./routes/signin'));
    app.use('/signup', require('./routes/signup'));
    app.use('/user', require('./routes/user'));
    app.use('/code', require('./routes/code'));
    app.use('/test', require('./routes/test'));
    app.use('/comment', require('./routes/comment'));
}
