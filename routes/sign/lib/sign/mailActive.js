var mongoose = require('mongoose');
var config = require('webconfig.js');
var UserModel = require('model/user');
var _ = require('lodash');
module.exports = function(req, res) {
    var activeStr = req.query.active;
    var user_uuid = req.session.uid;
    mongoose.connect(config.mongoURL, function() {
        var UserMailCheckFind = UserModel.find();
        UserMailCheckFind.where({
            uuid: user_uuid
        }).exec(function(err, val) {
            if (activeStr == _.first(val).email.activeStr) {
                UserModel.update({
                    uuid: user_uuid
                }, {
                    email: {
                        active: true
                    }
                }, function() {
                    res.json({
                        code: 200
                    });
                });
            } else {
                res.json({
                    code: 500
                });
            }
        })
    });
}
