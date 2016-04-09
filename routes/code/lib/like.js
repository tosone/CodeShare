'use strict';
module.exports = function(req, res, next) {
    const CodeLike = req.model.codeLike;
    const Code = req.model.code;
    let codeid = req.query.id;
    let userid = req.session.userid;
    if (userid) {
        CodeLike.findOne({ code: codeid, user: userid }, function(err, like) {
            if (like === null) {
                new CodeLike({
                    code: codeid,
                    user: userid
                }).save((err) => {
                    if (err) {
                        console.log(err);
                        res.json({ code: 522 });
                    } else {
                        Code.findById(codeid, (err, code) => {
                            code.like++;
                            code.save((err) => {
                                if (err) {
                                    console.log(err);
                                    res.json({ code: 522 });
                                } else {
                                    res.json({ code: 200 });
                                }
                            })
                        });
                    }
                });
            } else {
                res.json({ code: 515 });
            }
        });
    } else {
        res.json({
            code: 501
        })
    }
}
