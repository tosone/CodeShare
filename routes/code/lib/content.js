'use strict';
const qr = require('qr-image');
const moment = require('moment');

module.exports = function(req, res) {
    const codeid = req.query.id;
    const Code = req.model.code;
    const name = req.session.name;
    const Comment = req.model.codeComment;
    const User = req.model.user;
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
                                    code.lookover += 1
                                    code.save();
                                    User.findById(code.user._id, (err, user) => {
                                        user.score += 1;
                                        user.save();
                                    });
                                    let isEdit = false;
                                    if (code.user._id == req.session.userid) isEdit = true;
                                    res.render('code/content', {
                                        title: '代码详情 - ' + name,
                                        code: code,
                                        codeversion: code.content[0]._id,
                                        content: code.content[0].content,
                                        valiableLang: valiableLang,
                                        user: req.session.name,
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
