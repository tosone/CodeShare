'use strict';
//返回某个标签下的代码列表
module.exports = function(req, res) {
    const tag = req.query.tag;
    const api = req.api;
    const userid = req.query.id;
    const condition = userid ? { user: userid, tags: tag }:{tags: tag};
    api.codeList({ user: userid, tags: tag }, { 'timestamp': 'desc' }, req.query.page || 1).then(codelist => {
        api.pages(condition).then(page => {
            res.json({
                codelist: codelist,
                page: page
            });
        });
    });
}
