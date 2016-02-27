var valiableType = require('util/valiableLang');
var mongoose = require('mongoose');
var config = require('webconfig.js');
var util = require('util/Function');
var CodeModel = require('model/code');
module.exports = function(req, res, next) {
    if (req.session.name) {
        var intro = req.body.intro,
            tags = req.body.tags,
            lang = req.body.lang,
            code = req.body.code;
        if (intro.length > 300) {
            res.json({
                code: 511
            });
        } else if (tags.split(',').length > 5) {
            res.json({
                code: 511
            });
        } else {
            var isvaliableLang = true;
            for (var i in valiableType) {
                if (i === lang) {
                    isvaliableLang = false;
                    break;
                }
            }
            if (isvaliableLang) {
                res.json({
                    code: 512
                });
            } else {
                mongoose.connect(config.mongoURL, function() {
                    var png = util.uuid();
                    new CodeModel({
                        codeid: util.uuid(),
                        uid: req.session.uid,
                        intro: intro,
                        tags: tags.split(','),
                        lang: lang,
                        codecon: code,
                        png: png
                    }).save(function() {
                        res.json({
                            code: 200
                        });
                    });
                });
            }
        }
    } else {
        res.json({
            code: 200
        });
    }
}
