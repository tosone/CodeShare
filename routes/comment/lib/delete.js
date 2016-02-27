var valiableLang = require('util/valiableLang');
var CommentModel = require('model/comment');
var mongoose = require('mongoose');
var config = require('webconfig.js');
var util = require('util/Function');
module.exports = function(req, res, next) {
    var commentID = request.query.commentID; //评论ID
    var isFirst = req.query.isFirst ? true : false;
    if (req.session.name) {
        mongoose.connect(config.mongoURL, function() {
            if (isFirst) {
                CommentModel.remove({
                    commentDivID: commentID
                }, function() {
                    res.json({
                        code: 200
                    });
                });
            } else {
                CommentModel.remove({
                    commentID: commentID
                }, function() {
                    res.json({
                        code: 200
                    });
                });
            }
        });
    } else {
        res.redirect("/");
    }
}
