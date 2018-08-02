//返回某种语言的代码列表
var mongoose = require("mongoose");
var CodeModel = require('model/code');
var config = require('webconfig.js');

module.exports = function(uid, lang, page) {
  return new Promise(function(resolve, reject) {
    var paging = config.codepaging;
    mongoose.connect(config.mongoURL, function() {
      var codeFind = CodeModel.find();
      codeFind.where({
        lang: lang
      }).skip((parseInt(page) - 1) * paging).limit(paging).select("codeid intro lookover like timestamp").exec(function(err, val) {
        resolve(val);
      });
    });
  });
}
