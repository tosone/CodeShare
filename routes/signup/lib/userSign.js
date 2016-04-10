'use strict';
const crypto = require('crypto');
const config = require('webconfig');

module.exports = function(req, response) {
    const User = req.model.user;
    const util = req.util;
    const sendEmail = req.sendEmail;
    let name = req.query.name,
        pwd = req.query.pwd,
        email = req.query.email,
        qq = req.query.qq,
        tel = req.query.tel;
    if (name.match(/[~=/*&%#%$\\<>]/gi) || !email.match(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/)) {
        response.json({
            code: 502
        });
    } else {
        if (((qq != "nul" && qq.match(/^\d{5,10}$/)) || qq == "nul") && (tel == "nul" || (tel != "nul" && tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)))) {
            User.findOne({
                name: name
            }, (err, val) => {
                if (err) {
                    response.json({
                        code: 514
                    });
                } else {
                    if (val) {
                        response.json({
                            code: 500
                        });
                    } else {
                        let activeString = util.uuid(); //邮箱激活字符串
                        let user = new User({
                            name: name,
                            pwd: crypto.createHmac(config.pwdHmacMethod, config.userPwdSalt).update(pwd).digest('hex'),
                            email: {
                                email: email,
                                activeString: activeString
                            },
                            qq: qq,
                            tel: tel
                        });
                        user.save(function() {
                            req.session.userid = user._id;
                            req.session.email = email;
                            req.session.name = user.name;
                            req.session.activeString = activeString;
                            console.log(activeString);
                            sendEmail(user._id, email, "active", activeString);
                            response.json({
                                code: 200
                            });

                        });
                    }
                }
            });
        } else {
            response.json({
                code: 502
            });
        }
    }
}
