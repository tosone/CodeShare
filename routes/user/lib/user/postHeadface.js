/* global Promise */
var express = require('express');
var router = express.Router();
var qiniu = require('util/Qiniu');
var util = require('util/Function');
module.exports = function (req, res, next) {
    var bucket = 'codeimg', oldname = "a.png", newname = util.uuid + ".png";

    qiniu.fileInfo(bucket, oldname).then(function (data) {
        return new Promise(function (resolve, reject) {
            if (data.error) {
                resolve(true);
            } else {
                qiniu.remove(bucket, oldname).then(function () {
                    resolve(true);
                });
            }
        });
    }).then(function () {
        qiniu.upFile(bucket, req.body.img, newname).then(function () {
            res.json({ "code": 200 });
        });
    });
}