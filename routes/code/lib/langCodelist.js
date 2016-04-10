//返回某种语言的代码列表
module.exports = function(req, res) {
    const lang = req.query.lang;
    const api = req.api;
    const userid = req.session.userid;
    api.codeList({ user: userid, lang: lang }, { 'timestamp': 'desc' }, req.query.page || 1).then(codelist => {
        api.pages({
            uid: req.session.uid,
            lang: req.query.lang
        }).then(page => {
            res.json({
                codelist: codelist,
                page: page
            });
        })
    });
}
