'use strict';
const https = require('https');
const qs = require('querystring');
const url = require('url');
const config = require('webconfig');
//todo：通过mailLog数据库来保证每个用户不能频繁发邮件
module.exports = (model) => {
    const mailLog = model.mailLog;

    return function(userid, email, type, activeString) {
        let params = {
            api_key: config.mailApiKey,
            api_user: config.mailApiUser,
            from: 'i@tosiney.com',
            fromname: 'Csnippet',
            subject: 'Csnippet 验证邮箱',
            template_invoke_name: 'mail_check',
            replyto: 'i@tosiney.com',
            substitution_vars: '{"to": ["' + email + '"],"sub":{"%code%": ["' + activeString + '"]}}'
        };
        let content = qs.stringify(params);
        let options = {
            host: 'sendcloud.sohu.com',
            port: 443,
            path: '/webapi/mail.send_template.json',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': content.length
            }
        };
        let request = https.request(options, function(response) {
            let _data = '';
            response.on('data', function(chunk) {
                _data += chunk;
            });
            response.on('end', function() {
                new mailLog({
                    user: userid,
                    email: email,
                    type: type,
                    success: (JSON.parse(_data).message == "success") ? true : false
                }).save();
            });
        });
        request.write(content);
        request.end();
    }
}
