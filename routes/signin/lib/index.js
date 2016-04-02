module.exports = function(req, res) {
    console.log(req.mongo);
    res.render('sign/login', {
        title: "用户登录",
        user: req.session.name
    });
}