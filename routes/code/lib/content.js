var valiableLang = require('util/valiableLang');
module.exports = function (req, res, next) {
    //params codeid for edit
    // if (req.session.name) {
        res.render('code/content', {
            title: 'Tosone',
            valiableLang: valiableLang,
            user: req.session.name,
            lang: "plain_text"
        });
    // } else {
    //     res.redirect("/");
    // }
}
