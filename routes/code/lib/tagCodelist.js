//返回某个标签下的代码列表
module.exports = function(req, res) {
    const tag = req.query.tag;
    const api = req.api;
    const userid = req.session.userid;
    api.tagCodeList(userid, tag, req.query.page || 1).then(codelist => {
        api.pages({
            tags: tag,
            user: userid
        }).then(page => {
            res.json({
                codelist: codelist,
                page: page
            });
        });
    });
}
