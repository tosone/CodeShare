//返回用户tags列表
var mongoose = require("mongoose");
var CodeModel = require('model/code');
var config = require('webconfig.js');

module.exports = function(uid) {
  return new Promise(function(resolve, reject) {
    mongoose.connect(config.mongoURL, function() {
      var codeFind = CodeModel.find();
      codeFind.where({
        uid: uid
      }).select("tags").exec(function(err, val) {
        var tags = [];
        for (var data of val) {
          for (var tag of data.tags) {
            if (tags.indexOf(tag) == -1) {
              tags.push(tag);
            }
          }
        }
        resolve(tags);
      });
    });
  });
}
