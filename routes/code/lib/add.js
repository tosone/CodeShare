var valiableLang = require('util/valiableLang');
module.exports = function(req, res, next) {
    //params codeid for edit
    if (req.session.name) {
        res.render('code/add', {
            title: 'Tosone',
            valiableLang: valiableLang,
            user: req.session.name
        });
    } else {
        res.redirect("/");
    }
}
