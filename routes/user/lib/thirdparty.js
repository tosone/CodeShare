'use strict';
module.exports = function(req, res) {
    res.render('user/thirdparty', {
        title: 'Tosone',
        list: "user_list_thirdparty",
        user: req.session
    });
}
