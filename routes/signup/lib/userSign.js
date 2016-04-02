var UserModel = require('model/user');
var mongoose = require('mongoose');
var crypto = require('crypto');
var _ = require('lodash');
var sendEmail = require('util/SendEmail');
var config = require('webconfig.js');
var util = require('util/Function');

module.exports = function(request, response) {
    var uid = request.query.uid,
        pwd = request.query.pwd,
        email = request.query.email,
        qq = request.query.qq,
        tel = request.query.tel;
    if (uid.match(/[~=/*&%#%$\\<>]/gi) || !email.match(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/)) {
        response.json({
            code: 502
        });
    } else {
        if (((qq != "nul" && qq.match(/^\d{5,10}$/)) || qq == "nul") && (tel == "nul" || (tel != "nul" && tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)))) {
            mongoose.connect(config.mongoURL, function() {
                var userFind = UserModel.find();
                userFind.where({
                    uid: uid
                }).exec(function(err, val) {
                    if (_.size(val) == 0) {
                        var user_uuid = util.uuid(); //用户独一无二的ID
                        var activeStr = util.uuid(); //邮箱激活字符串
                        request.session.uid = user_uuid;
                        request.session.email = email;
                        request.session.name = uid;
                        new UserModel({
                            uuid: user_uuid,
                            uid: uid,
                            pwd: crypto.createHmac("sha1", config.userPwdSalt).update(pwd).digest('hex'),
                            email: {
                                email: email,
                                activeStr: activeStr
                            },
                            qq: qq,
                            tel: tel
                        }).save(function() {
                            response.json({
                                code: 200
                            });
                            sendEmail(user_uuid, email, activeStr);
                        });
                    } else {
                        response.json({
                            code: 500
                        });
                    }
                }).then(function() {
                    mongoose.disconnect();
                });
            });
        } else {
            response.json({
                code: 502
            });
        }
    }
}
