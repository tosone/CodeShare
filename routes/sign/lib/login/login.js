"use strict";
const userModel = require('model/user');
const mongoose = require('mongoose');
const config = require('webconfig.js');
const crypto = require('crypto');
const _ = require('lodash');
// 500：数据库有重名   501：注册有错误重试    502：数据不符合要求   200：成功
module.exports = function(req, res) {
    const mongo = req.mongo;
    var uid = req.query.uid,
        pwd = req.query.pwd;
    if (uid.match(/[~=\/*&%#$\\<>]/gi)) {
        res.json({
            code: 502
        });
    } else {
        userModel.findOne({
            uid: uid
        }, function(err, val) {
            if (val === null) {
                res.json({
                    code: 500
                });
            } else {
                var custom_pwd = crypto.createHmac("sha1", config.userPwdSalt).update(pwd).digest('hex');
                if (val.pwd == custom_pwd) {
                    req.session.uid = val.uuid;
                    req.session.email = val.email.email;
                    req.session.name = val.uid;
                    res.json({
                        code: 200
                    });
                } else {
                    res.json({
                        code: 500
                    });
                }
            }
        });
    }
}