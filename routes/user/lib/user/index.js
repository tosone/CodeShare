module.exports = function (req, res, next) {
    res.render('user/user', {
        title: 'Tosone',
        list: "user_list_userinfo"
    });
}