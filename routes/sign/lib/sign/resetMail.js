var mongoose = require('mongoose');
var config = require('webconfig.js');
var userMailCheck = require('model/userMailCheck');
var userModel = require('model/user');
var util = require('util/Function');
var sendEmail = require('util/SendEmail');

module.exports = function (req, res) {
    var email = req.query.email;
    var user_uuid = req.session.uid;
    var mail_check_id = util.uuid;
    mongoose.connect(config.mongoURL, function () {
        userModel.update({
            uuid: user_uuid
        }, {
                email: email
            }, function () {
                userMailCheck.update({
                    user_uuid: user_uuid
                }, {
                        check_id: mail_check_id,
                        isCheck: false,
                        timestamp: new Date()
                    }, function () {
                        res.json({
                            code: 200
                        });
                        sendEmail(user_uuid, req.session.email, mail_check_id);
                    }).then(function () {
                        mongoose.disconnect();
                    });
            });
    });
}