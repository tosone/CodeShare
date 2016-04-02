module.exports = function(req, res) {
    res.render('sign/sign', {
        title: "新用户注册",
        user: req.session.name || false
    });
}
