'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = mongoose.model("maillogs", new Schema({
  user_uuid: String,
  email: String,
  isSuccess: {
    type: Boolean,
    default: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
}, {
  versionKey: false
}));
