var valiableType = require('util/valiableLang');
var mongoose = require("mongoose");
var CodeModel = require('model/code');
var config = require('webconfig.js');
module.exports = function(req, res, next) {
    if (req.session.name) {
        require('api/userLanguages')(req.session.uid).then(function(language) {
            require('api/userTags')(req.session.uid).then(function(tags) {
                require('api/newCodelist')(req.session.uid, 1).then(function(newCode) {
                    require('api/pages')('code', {
                        uid: req.session.uid
                    }).then(function(page) {
                        res.render('code/list', {
                            title: '代码片段列表',
                            lang: language,
                            user: req.session.name,
                            newCode: newCode,
                            tags: tags,
                            page: page
                        });
                    });
                });
            });
        });
    } else {
        res.redirect("/");
    }
}
