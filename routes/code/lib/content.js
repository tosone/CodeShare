'use strict';
var valiableLang = require('util/valiableLang');
module.exports = function(req, res, next) {
    const codeid = req.query.id;
    const Code = req.model.code;
    const name = req.session.name;
    const Comment = req.model.comment;
    if (req.session.uid && codeid) {
        Code.findOne({ codeid: codeid }, (err, code) => {
            if (err) {
                res.redirect('/');
            } else {
                Comment.find({ codeid: codeid }).sort({ timestamp: "asc" }).exec(function(err, comments) {
                    if (err) {
                        res.redirect('/');
                    } else {
                        res.render('code/content', {
                            title: '代码详情 - ' + name,
                            code: code,
                            valiableLang: valiableLang,
                            user: name,
                            codeid: codeid,
                            comments: comments
                        });
                    }
                });
            }
        });
    } else {
        res.redirect('/');
    };
}
