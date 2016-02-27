module.exports = function(req, res) {
    res.render('sign/login', {
        title: "用户登录",
        user: req.session.name
    });
}
