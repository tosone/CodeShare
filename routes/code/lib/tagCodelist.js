//返回某个标签下的代码列表
module.exports = function(req, res, next) {
    require('api/tagCodelist')(req.session.uid, req.query.tag, req.query.page || 1).then(function(codelist) {
        require('api/pages')('code', {
            uid: req.session.uid,
            tags: req.query.tag
        }).then(function(page) {
            res.json({
                codelist: codelist,
                page: page
            });
        });
    });
}
