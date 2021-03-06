/* global Promise */
/* global Buffer */
var qiniu = require('qiniu');
var config = require('webconfig.js');
qiniu.conf.ACCESS_KEY = config.ACCESS_KEY;
qiniu.conf.SECRET_KEY = config.SECRET_KEY;
var client = new qiniu.rs.Client();
var extra = new qiniu.io.PutExtra();

module.exports.upFile = function(bucket, content, name) {
  return new Promise(function(resolve, reject) {
    var uptoken = new qiniu.rs.PutPolicy(bucket).token();
    qiniu.io.put(uptoken, name, new Buffer(content, 'base64'), extra, function(err, ret) {
      resolve(ret);
    });
  });
}

module.exports.fileInfo = function(bucket, name) {
  return new Promise(function(resolve, reject) {
    client.stat(bucket, name, function(err, ret) {
      resolve(ret);
    });
  });
}

module.exports.remove = function(bucket, name) {
  return new Promise(function(resolve, reject) {
    client.remove(bucket, name, function(err, ret) {
      resolve(ret);
    });
  });
}
