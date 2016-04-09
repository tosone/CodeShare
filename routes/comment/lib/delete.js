'use strict';

module.exports = function(req, res) {
    const Comment = req.model.codeComment;
    let commentid = req.query.commentid; //评论ID
    let first = req.query.first;
    let div = req.query.div;
    if (req.session.name) {
        if (first == "true") {
            Comment.remove({
                div: div
            }, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    res.json({
                        code: 200
                    });
                }

            });
        } else if (first == "false") {
            Comment.remove({
                _id: commentid
            }, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    res.json({
                        code: 200
                    });
                }
            });
        } else {
            res.json({
                code: 512
            });
        }
    } else {
        res.json({
            code: 501
        });
    }
}
