'use strict';
const crypto = require('crypto');
const config = require('webconfig');

module.exports = function(request, response) {
    const User = request.model.user;
    const util = request.util;
    const sendEmail = request.sendEmail
    let name = request.query.name,
        pwd = request.query.pwd,
        email = request.query.email,
        qq = request.query.qq,
        tel = request.query.tel;
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
                            response.json({
                                code: 200
                            });
                            request.session.id = user._id;
                            request.session.email = email;
                            request.session.name = user.name;
                            sendEmail(user, email, "active", activeString);
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
