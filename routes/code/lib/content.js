'use strict';

module.exports = function(req, res) {
    const codeid = req.query.id;
    const Code = req.model.code;
    const name = req.session.name;
    const Comment = req.model.codeComment;
    const valiableLang = req.valiableLang;
    if (codeid) {
        Code.findById(codeid)
            .populate({
                path: 'user',
                select: 'name _id email',
                options: { limit: 1 }
            })
            .exec(function(err, code) {
                if (err) {
                    res.redirect('/');
                } else {
                    Comment.find()
                        .where({
                            code: codeid
                        })
                        .sort({ timestamp: "asc" })
                        .populate({
                            path: 'user',
                            select: 'name _id email',
                            options: { limit: 1 }
                        })
                        .populate({
                            path: 'reply',
                            select: 'name _id email',
                            options: { limit: 1 }
                        })
                        .exec(function(err, comments) {
                            if (err) {
                                res.redirect('/');
                            } else {
                                let isEdit = false;
                                if (code.user[0]._id == req.session.userid) isEdit = true;
                                res.render('code/content', {
                                    title: '代码详情 - ' + name,
                                    code: code,
                                    valiableLang: valiableLang,
                                    user: name,
                                    codeid: codeid,
                                    comments: comments || [],
                                    isEdit: isEdit
                                });
                            }
                        });
                }
            });
    } else {
        res.redirect('/');
    };
}
