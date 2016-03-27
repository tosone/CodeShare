"use strict";
var mongoose = require('mongoose');
var config = require('webconfig.js');
var UserModel = require('model/user');
var _ = require('lodash');
//500：数据库有重名   502：有特殊字符    200：成功
module.exports = function(req, res) {
    const model = req.model;
    var uid = req.query.uid;
    if (uid.match(/[~=/*&%#%$\\<>]/gi)) {
        res.json({
            code: 502
        });
    } else {
        var userFind = UserModel.find();
        userFind.where({
            uid: uid
        }).exec(function(err, val) {
            if (_.size(val) == 0) {
                res.json({
                    code: 200
                });
            } else {
                res.json({
                    code: 500
                });
            }
        });
    }
}