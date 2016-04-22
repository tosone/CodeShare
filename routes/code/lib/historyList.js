'use strict';
const moment = require("moment");

module.exports = (req, res) => {
    const Code = req.model.code;
    const CodeContent = req.model.codeContent;
    const valiableLang = req.valiableLang;
    if (req.session.name) {
        let codeid = req.query.id;

        Code.findById(codeid)
            .populate({
                path: 'content',
                options: { sort: { timestamp: "desc" } }
            }).exec((err, code) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(code);
                    res.render('code/historyList', {
                        title: 'Tosone',
                        valiableLang: valiableLang,
                        user: req.session,
                        historys: code.content,
                        like: code.like,
                        moment: moment,
                        codeid: codeid
                    });
                }
            });
    } else {
        res.redirect("/");
    }
}
