'use strict';
//重新发送邮件或者重设邮件
module.exports = function(req, res) {
    const User = req.model.user;
    const MailLog = req.model.mailLog;
    const sendEmail = req.sendEmail;
    const util = req.util;
    const activeString = util.uuid();
    const userid = req.session.userid;
    // const email = req.query.email ? req.query.email : req.session.email;
    res.render('signup/pwdBack', {
        title: "密码找回",
        user: req.session
    });
}
