'use strict';
//点赞最多代码列表
var mongoose = require("mongoose");
var CodeModel = require('model/code');
var config = require('webconfig.js');

module.exports = function(uid, page) {
  return new Promise(function(resolve, reject) {
    var paging = config.codepaging;
    mongoose.connect(config.mongoURL, function() {
      var codeFind = CodeModel.find();
      codeFind.where({
        uid: uid
      }).select("codeid intro lookover like timestamp").sort({
        'like': 'desc'
      }).skip((parseInt(page) - 1) * paging).limit(paging).exec(function(err, val) {
        resolve(val);
      });
    });
  });
}
