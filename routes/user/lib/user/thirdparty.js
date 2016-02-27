module.exports =function (req, res, next) {
    res.render('user/thirdparty', {
        title: 'Tosone',
        list: "user_list_thirdparty"
    });
}