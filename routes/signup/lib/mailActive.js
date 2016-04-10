'use strict';
var jwt = require('jsonwebtoken');
module.exports = function(req, res) {
    const User = req.model.user;
    const config = req.config;
    let active = req.query.active;
    let decode = {};
    jwt.verify(active, config.jsonwebtoken, (err, decode) => {
        if (err) {
            console.log(err);
            res.render("signup/mailCheck", {
                title: "sd",
                user: null,
                msg: "账户无法激活，请重新发送邮件"
            });
        } else {
            console.log(decode);
            User.findById(decode.userid).exec((err, user) => {
                if (err) {
                    console.log(err);
                    res.json({
                        code: 500
                    });
                } else {
                    if (user.email.activeString && user.email.activeString === decode.activeString) {
                        user.email.active = true;
                        user.save((err) => {
                            if (err) {
                                res.json({
                                    code: 500
                                });
                            } else {
                                res.render("signup/mailCheck", {
                                    title: "sd",
                                    user: null,
                                    msg: "账户激活成功"
                                });
                            }
                        });
                    } else {
                        res.json({
                            code: 500
                        });
                    }
                }
            });
        }
    });


}
