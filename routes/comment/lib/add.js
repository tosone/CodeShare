'use strict';
module.exports = function(req, res, next) {
    const valiableLang = req.valiableLang;
    const CommentModel = req.model.comment;
    const util = req.util;
    var comment = req.body.comment; //评论内容
    var codeid = req.body.codeid; //评论对象的ID
    var isFirst = req.body.isFirst == 'true' ? true : false;
    var divid = isFirst ? util.uuid() : req.body.divid; //评论块的ID
    var reply = req.body.reply || "null";
    if (req.session.name) {
        new CommentModel({
            commentid: util.uuid(),
            codeid: codeid,
            divid: divid,
            isFirst: isFirst,
            reply: reply,
            uid: req.session.uid,
            content: comment
        }).save(function(err) {
            console.log(err)
            res.json({
                code: 200
            });
        });
    } else {
        res.redirect("/");
    }
}
