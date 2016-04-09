'use strict';
module.exports = (req, res) => {
    const valiableLang = req.valiableLang;
    const Code = req.model.code;
    let codeid = req.query.id;
    if (req.session.name) {
        Code.findById(codeid, (err, val) => {
            if (err) {
                console.log(err);
                res.json({
                    code: 500
                });
            } else {
                res.render('code/edit', {
                    title: '修改代码',
                    valiableLang: valiableLang,
                    user: req.session.name,
                    content: val.content,
                    lang: val.lang,
                    intro: val.intro,
                    id: val._id,
                    tags: val.tags
                });
            }
        });
    } else {
        res.redirect("");
    }
}
