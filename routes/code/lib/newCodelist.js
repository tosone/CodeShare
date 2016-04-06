'use strict';
module.exports = function(req, res) {
    const userid = req.session.userid;
    const api = req.api;
    api.newCodeList(userid, req.query.page || 1).then(codelist=>{
        api.pages(userid).then(page=>{
            res.json({
                codelist: codelist,
                page: page
            });
        });
    });
}
