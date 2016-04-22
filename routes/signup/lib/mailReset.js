'use strict';
//重新发送邮件或者重设邮件
module.exports = function (req, res) {
    const User = req.model.user;
    const MailLog = req.model.mailLog;
    const sendEmail = req.sendEmail;
    const util = req.util;
    const activeString = util.uuid();
    const userid = req.session.userid;
    const email = req.query.email ? req.query.email : req.session.email;
    if (userid) {
        User.findByIdAndUpdate(userid, {
            email: {
                email: email,
                active: false,
                activeString: activeString
            }
        }, (err, val) => {
            if (err) {
                res.json({
                    code: 501
                });
            } else {
                if (val) {
                    sendEmail(userid, email, "reactive", activeString);
                    res.json({
                        code: 200
                    });
                } else {
                    res.json({
                        code: 504
                    });
                }
            }
        });
    } else {
        res.json({
            code: 501
        });
    }
}
