"use strict";
const crypto = require('crypto');

module.exports = function(req, res) {
    const config = req.config;
    const model = req.model;
    var name = req.query.name,
        pwd = req.query.pwd;
    if (name.match(/[~=\/*&%#$\\<>]/gi)) {
        res.json({
            code: 502
        });
    } else {
        model.user.findOne({
            name: name
        }, function(err, val) {
            if (err) {
                res.json({
                    code: 500
                });
            } else {
                if (val && val.pwd == crypto.createHmac(config.pwdHmacMethod, config.userPwdSalt).update(pwd).digest('hex')) {
                    req.session.userid = val._id;
                    req.session.email = val.email.email;
                    req.session.name = val.name;
                    if (!val.email.active) req.session.activeString = val.email.activeString;
                    if (val.headFace) req.session.headFace = val.headFace;
                    res.json({
                        code: 200
                    });
                } else {
                    res.json({
                        code: 500
                    });
                }
            }
        });
    }
}
