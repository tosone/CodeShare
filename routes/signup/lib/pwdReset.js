'use strict';
const crypto = require('crypto');

module.exports = function (req, res) {
    const User = req.model.user;
    const config = req.config;
    const pwd = req.query.pwd;
    const userid = req.session.userid;
    User.findById(userid, (err, val) => {
        if (err) {
            res.json({
                code: 500
            });
        } else {
            val.pwd = crypto.createHmac(config.pwdHmacMethod, config.userPwdSalt).update(pwd).digest('hex');
            val.save((err)=>{
                if(err){
                    console.log(err);
                    res.json({
                        code: 500
                    });
                }else{
                    res.json({
                        code: 200
                    });
                }
            });
        }
    });
}
