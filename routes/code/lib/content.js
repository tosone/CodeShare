'use strict';

module.exports = function(req, res) {
    const codeid = req.query.id;
    const Code = req.model.code;
    const name = req.session.name;
    const Comment = req.model.codeComment;
    const valiableLang = req.valiableLang;
    if (codeid) {
        Code.findById(codeid, (err, code) => {
            if (err) {
                res.redirect('/');
            } else {
                Comment.findById(codeid).sort({ timestamp: "asc" }).exec(function(err, comments) {
                    if (err) {
                        console.log("sadfsd")
                        res.redirect('/');
                    } else {
                        res.render('code/content', {
                            title: '代码详情 - ' + name,
                            code: code,
                            valiableLang: valiableLang,
                            user: name,
                            codeid: codeid,
                            comments: comments || []
                        });
                    }
                });
            }
        });
    } else {
        res.redirect('/');
    };
}
