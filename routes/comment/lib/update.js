var valiableLang = require('util/valiableLang');
var CommentModel = require('model/comment');
var mongoose = require('mongoose');
var config = require('webconfig.js');
var util = require('util/Function');
module.exports = function(req, res, next) {
    var commentID = req.body.commentID; //评论ID
    if (req.session.name) {
        mongoose.connect(config.mongoURL, function() {
            CommentModel.where({
                commentID: commentID
            }, function(err, val) {
                if (err) {
                    console.log("ERROR 514: 判断评论是否存在，数据库查询出错。")
                } else {
                    if (_.size(val) == 0) {
                        res.json({
                            code: 513
                        });
                    } else {
                        CommentModel.update({
                            commentID: commentID
                        }, {
                                content: req.body.comment
                            }, function() {
                                res.json({
                                    code: 200
                                })
                            });
                    }
                }
            })
        });
    } else {
        res.redirect("/");
    }
}
