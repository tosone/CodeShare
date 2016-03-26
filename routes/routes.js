module.exports = (app) => {
    app.use('/', require('./index'));
    app.use('/login', require('./sign/login'));
    app.use('/logout', require('./sign/logout'));
    app.use('/sign', require('./sign/sign'));
    app.use('/user', require('./user/user'));
    app.use('/code', require('./code'));
    app.use('/test', require('./test'));
}
