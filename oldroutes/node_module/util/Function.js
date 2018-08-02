var uuid = require('uuid');

module.exports.uuid = function() {
  return uuid.v4().split('-').join('');
}
