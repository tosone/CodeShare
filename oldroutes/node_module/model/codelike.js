var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model("codelikes", new Schema({
  codeid: String, //代码片段唯一性id
  uid: String, //用户ID
  //时间戳
  timestamp: {
    type: Date,
    default: Date.now
  }
}, {
  versionKey: false
}));
