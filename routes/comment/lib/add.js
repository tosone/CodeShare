var valiableLang = require('util/valiableLang');
var CommentModel = require('model/comment');
var mongoose = require('mongoose');
var config = require('webconfig.js');
var util = require('util/Function');
module.exports = function(req, res, next) {
    var comment = request.query.comment; //评论内容
    var codeID = req.query.codeID; //评论对象的ID
    var commentDivID = req.query.commentDivID; //评论块的ID
    var isFirst = req.query.isFirst ? true : false;
    var replyTo = req.query.replyTo;
    if (req.session.name) {
        mongoose.connect(config.mongoURL, function() {
            new CommentModel({
                commentID: util.uuid(),
                codeID: codeID,
                commentDivID: commentDivID,
                isFirst: isFirst,
                replyTo: req.query.replyTo,
                uid: req.session.uid,
                content: comment
            }).save(function() {
                res.json({
                    code: 200
                });
            });
        });
    } else {
        res.redirect("/");
    }
}
