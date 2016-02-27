module.exports = function (req, res, next) {
    res.render('user/setting', {
        title: 'Tosone',
        list: "user_list_setting"
    });
}