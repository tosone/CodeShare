'use strict';
const moment = require("moment");

module.exports = (req, res) => {
    const Code = req.model.code;
    const CodeContent = req.model.codeContent;
    const valiableLang = req.valiableLang;
    if (req.session.name) {
        let codeid = req.query.id;
        let historyid = req.query.historyid;
        req.api.codeByVersion(codeid, historyid).then((code) => {
            res.render('code/history', {
                title: 'Tosone',
                user: req.session,
                content: code.content[0].content,
                like: code.like,
                codeid: codeid,
                lang: code.lang
            });
        });
    } else {
        res.redirect("/");
    }

}
