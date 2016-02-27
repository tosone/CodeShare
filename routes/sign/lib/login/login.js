var userModel = require('model/user');
var mongoose = require('mongoose');
var config = require('webconfig.js');
var crypto = require('crypto');
var _ = require('lodash');
// 500：数据库有重名   501：注册有错误重试    502：数据不符合要求   200：成功
module.exports = function (req, res) {
    var uid = req.query.uid,
        pwd = req.query.pwd;
    if (uid.match(/[~=\/*&%#$\\<>]/gi)) {
        res.json({
            code: 502
        });
    } else {
        mongoose.connect(config.mongoURL, function () {
            userModel.findOne({
                uid: uid
            }, function (err, val) {
                console.log(val.pwd);
                if (val === null) {
                    res.json({
                        code: 500
                    });
                } else {
                    var custom_pwd = crypto.createHmac("sha1", config.userPwdSalt).update(pwd).digest('hex');
                    if (val.pwd == custom_pwd) {
                        // console.log(_.first(val));
                        req.session.uid = val.uuid;
                        req.session.email = val.email.email;
                        req.session.name = val.uid;
                        // console.log(req.session.uid);
                        res.json({
                            code: 200
                        });
                    } else {
                        res.json({
                            code: 500
                        });
                    }
                }
            }).then(function () {
                mongoose.disconnect();
            });
        });
    }
}
