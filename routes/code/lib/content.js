'use strict';
const qr = require('qr-image');
const moment = require('moment');

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
                select: 'name _id email'
            })
            .populate({
                path: 'content',
                options: { sort: { timestamp: "desc" }, limit: 1 }
            })
            .exec(function(err, code) {
                if (err && code) {
                    res.redirect('/');
                } else {
                    if (!code) {
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
                                    if (code.user._id == req.session.userid) isEdit = true;
                                    // console.log(comments)
                                    res.render('code/content', {
                                        title: '代码详情 - ' + name,
                                        code: code,
                                        valiableLang: valiableLang,
                                        user: name,
                                        userid: req.session.userid,
                                        codeid: codeid,
                                        comments: comments || [],
                                        isEdit: isEdit,
                                        qr: qr.imageSync("http://115.28.87.181:8000/code/content?id=" + codeid, { type: 'png' }).toString('base64'),
                                        moment: moment
                                    });
                                }
                            });
                    }

                }
            });
    } else {
        res.redirect('/');
    };
}
