//将点赞的人添加的like表，增加点赞数目
var CodeModel = require('model/code');
var LikeModel = require('model/codelike');
module.exports = function (req, res, next) {
    //查看点赞的人是否点过赞
    LikeModel.find({ codeid: req.query.codeid, uid: req.session.uid }, function (err, val) {
        if (val === null) {

        } else {
            res.json({ code: 501 });
        }
    });
    new CodeModel({

    })
    require('api/languageCodelist')(req.session.uid, req.query.lang, req.query.page || 1).then(function (codelist) {
        require('api/pages')('code', {
            uid: req.session.uid,
            lang: req.query.lang
        }).then(function (page) {
            res.json({
                codelist: codelist,
                page: page
            });
        });
    });
}