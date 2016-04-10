'use strict';
module.exports = function(req, res) {
    const userid = req.session.userid;
    const api = req.api;
    api.codeList({ user: userid }, { 'timestamp': 'desc' }, req.query.page || 1).then(codelist => {
        api.pages({ user: userid }).then(page => {
            res.json({
                codelist: codelist,
                page: page
            });
        });
    });
}
