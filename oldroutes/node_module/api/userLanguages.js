//返回用户所有language列表
var mongoose = require("mongoose");
var CodeModel = require('model/code');
var config = require('webconfig.js');
var valiableLang = require('util/valiableLang');

module.exports = function(uid) {
  var languages = [];
  return new Promise(function(resolve, reject) {
    mongoose.connect(config.mongoURL, function() {
      CodeModel.distinct("lang", {
        uid: uid
      }).exec(function(err, language) {
        for (var lang of language) {
          var temp = {};
          temp[lang] = valiableLang[lang];
          languages.push(temp);
        }
        resolve(languages);
      });
    });
  });
}
