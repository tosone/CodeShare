module.exports = function(req, res, next) {
    require('api/newCodelist')(req.session.uid, req.query.page || 1).then(function(codelist) {
        require('api/pages')('code', {
            uid: req.session.uid
        }).then(function(page) {
            res.json({
                codelist: codelist,
                page: page
            });
        });
    });
}
