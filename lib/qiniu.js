'use strict';
const qiniu = require('qiniu');
const config = require('webconfig');
qiniu.conf.ACCESS_KEY = config.ACCESS_KEY;
qiniu.conf.SECRET_KEY = config.SECRET_KEY;
let client = new qiniu.rs.Client();
let extra = new qiniu.io.PutExtra();
const bucket = "codeimg";

module.exports.upFile = (content, name) => {
    return new Promise((resolve, reject) => {
        let uptoken = new qiniu.rs.PutPolicy(bucket).token();
        qiniu.io.put(uptoken, name, new Buffer(content, 'base64'), extra, (err, ret) => {
            resolve(ret);
        });
    });
}

module.exports.fileInfo = (name) => {
    return new Promise((resolve, reject) => {
        client.stat(bucket, name, (err, ret) => {
            resolve(ret);
        });
    });
}

module.exports.remove = (name) => {
    return new Promise((resolve, reject) => {
        client.remove(bucket, name, (err, ret) => {
            resolve(ret);
        });
    });
}
