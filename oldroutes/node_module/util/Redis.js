var redis = require("redis");
module.exports = function() {
  var client = redis.createClient(6379, "115.28.87.181");
  client.auth("8541539655");
  client.select(1);
  return client;
};
