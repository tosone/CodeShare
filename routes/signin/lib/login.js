"use strict";
const config = require('webconfig');
const crypto = require('crypto');
const _ = require('lodash');

module.exports = function(req, res) {
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
                if (val.pwd == crypto.createHmac(config.pwdHmacMethod, config.userPwdSalt).update(pwd).digest('hex')) {
                    req.session.id = val._id;
                    req.session.email = val.email.email;
                    req.session.name = val.name;
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
