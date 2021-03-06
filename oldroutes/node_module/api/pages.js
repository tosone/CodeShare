var mongoose = require("mongoose");
var config = require('webconfig.js');
module.exports = function(modulename, conditions) {
  return new Promise(function(resolve, reject) {
    mongoose.connect(config.mongoURL, function() {
      require('model/' + modulename).count(conditions, function(err, count) {
        resolve(Math.ceil(count / config.codepaging));
      });
    });
  });
}
