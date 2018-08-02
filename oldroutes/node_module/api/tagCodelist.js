var mongoose = require("mongoose");
var CodeModel = require('model/code');
var config = require('webconfig.js');

module.exports = function(uid, tag, page) {
  return new Promise(function(resolve, reject) {
    var paging = config.codepaging;
    mongoose.connect(config.mongoURL, function() {
      var codeFind = CodeModel.find();
      codeFind.where({
        tags: tag
      }).skip((parseInt(page) - 1) * paging).limit(paging).select("codeid intro lookover like timestamp").exec(function(err, val) {
        resolve(val);
      });
    });
  });
}
