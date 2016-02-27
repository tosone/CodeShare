//返回某种语言的代码列表
module.exports = function(req, res, next) {
    require('api/languageCodelist')(req.session.uid, req.query.lang, req.query.page || 1).then(function(codelist) {
        require('api/pages')('code', {
            uid: req.session.uid,
            lang: req.query.lang
        }).then(function(page) {
            res.json({
                codelist: codelist,
                page: page
            });
        });
    });
}
