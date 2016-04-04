'use strict';
const mongoose = require('mongoose');
const config = require('webconfig.js');
const UserModel = require('model/user');
const _ = require('lodash');
module.exports = function(req, res) {
    const User = req.model.user;
    console.log(req.session.activeString)
    if (req.session.activeString && req.session.activeString === req.query.active) {
        User.findByIdAndUpdate(req.session.userid, {
            email: {
                email: req.session.email,
                active: true
            }
        }, (err, val) => {
            if (err) {
                res.json({
                    code: 514
                });
            } else {
                if (val) {
                    res.redirect('/?action=active');
                    // res.json({
                    //     code: 200
                    // });
                } else {
                    res.json({
                        code: 500
                    });
                }
            }
        });
    } else {
        res.json({
            code: 500
        });
    }
}
