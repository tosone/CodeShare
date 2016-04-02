var mongoose = require('mongoose');
var config = require('webconfig.js');
var UserModel = require('model/user');
var MailLogModel = require('model/mailLog');
var util = require('util/Function');
var sendEmail = require('util/SendEmail');
var _ = require('lodash');

module.exports = function(req, res) {
    var activeStr = util.uuid();
    var user_uuid = req.session.uid;
    if (req.session.name) {
        mongoose.connect(config.mongoURL, function() {
            UserModel.update({
                uuid: user_uuid
            }, {
                email: {
                    activeStr: activeStr,
                    active: false
                }
            }, function(err, raw) {
                MailLogModel.find({
                    user_uuid: user_uuid
                }).exec(function(err, val) {
                    if (new Date().getTime() - new Date(_.last(val).timestamp).getTime() > 60000) {
                        sendEmail(user_uuid, req.session.email, activeStr);
                        res.json({
                            code: 200
                        });
                    } else {
                        res.json({
                            code: 504
                        });
                    }
                })
            });
        });
    } else {
        res.json({
            code: 501
        });
    }
}
