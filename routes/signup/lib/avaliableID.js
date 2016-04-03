"use strict";
const mongoose = require('mongoose');
const config = require('webconfig');

module.exports = function(req, res) {
    const model = req.model;
    let name = req.query.name;
    if (name.match(/[~=/*&%#%$\\<>]/gi)) {
        res.json({
            code: 502
        });
    } else {
        model.user.findOne({
            name: name
        }, (err, val) => {
            if (err) {
                res.json({
                    code: 514
                });
            } else {
                if (val) {
                    res.json({
                        code: 500
                    });
                } else {
                    res.json({
                        code: 200
                    });
                }
            }
        });
    }
}
