var valiableType = require('util/ValiableType');
var mongoose = require('mongoose');
var config = require('webconfig.js');
var util = require('util/Function');
var CodeModel = require('model/code');
module.exports = function (req, res, next) {
    //check login
    //check intro's length, tags' length, types in known array
    var intro = req.body.intro, tags = req.body.tags, type = req.body.type;
    if (intro.length > 100) {
        res.json({ code: 511 });
    } else if (tags.split(',').length > 5) {
        res.json({ code: 511 });
    } else {
        var isValiableType = false;
        for (var i in valiableType) {
            if (i === type) { isValiableType = true; break }
        }
        if (isValiableType) {
            res.json({ code: 513 });
        } else {
            mongoose.connect(config.mongoURL, function () {
                var png = util.uuid;
                new CodeModel({
                    codeid: util.uuid,
                    uid: util.uuid,
                    intro: intro,
                    tags: tags,
                    type: type,
                    png: util.uuid
                }).save(function () {
                    console.log(png);
                    res.json({ code: 200 });
                });
            });
        }
    }
}