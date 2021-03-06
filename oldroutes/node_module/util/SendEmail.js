var https = require('https');
var qs = require('querystring');
var url = require('url');
var mailLog = require('model/mailLog');
var mongoose = require('mongoose');
var config = require('webconfig.js');
//todo：通过uid和mailLog数据库来保证每个用户不能频繁发邮件
module.exports = function(uid, email, mail_check_id) {
  var params = {
    api_key: config.mail_api_key,
    api_user: config.mail_api_user,
    from: 'i@tosiney.com',
    fromname: 'Csnippet',
    subject: 'Csnippet 验证邮箱',
    template_invoke_name: 'mail_check',
    replyto: 'i@tosiney.com',
    substitution_vars: '{"to": ["' + email + '"],"sub":{"%code%": ["' + mail_check_id + '"]}}'
  };
  var content = qs.stringify(params);
  var options = {
    host: 'sendcloud.sohu.com',
    port: 443,
    path: '/webapi/mail.send_template.json',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': content.length
    }
  };
  var request = https.request(options, function(response) {
    var _data = '';
    response.on('data', function(chunk) {
      _data += chunk;
    });
    response.on('end', function() {
      if (JSON.parse(_data).message == "success") {
        mongoose.connect(config.mongoURL, function() {
          new mailLog({
            user_uuid: uid,
            email: email
          }).save();
        });
      } else {
        mongoose.connect(config.mongoURL, function() {
          new mailLog({
            user_uuid: uid,
            email: email,
            isSuccess: false
          }).save();
        });
      }
    });
  });
  request.write(content);
  request.end();
}
