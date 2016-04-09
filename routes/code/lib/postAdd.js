'use strict';
module.exports = function(req, res) {
    const Code = req.model.code;
    const CodeContent = req.model.codeContent;
    const valiableLang = req.valiableLang;
    const util = req.util;
    if (req.session.name) {
        let intro = req.body.intro,
            tags = req.body.tags,
            lang = req.body.lang,
            content = req.body.code;
        if (intro.length > 300) {
            res.json({
                code: 511
            });
        } else if (tags.split(',').length > 5) {
            res.json({
                code: 511
            });
        } else {
            var isvaliableLang = true;
            for (var i in valiableLang) {
                if (i === lang) {
                    isvaliableLang = false;
                    break;
                }
            }
            if (isvaliableLang) {
                res.json({
                    code: 512
                });
            } else {
                let icodeContent = new CodeContent({
                    content: content
                });
                let icode = new Code({
                    user: req.session.userid,
                    intro: intro,
                    tags: tags.split(','),
                    lang: lang,
                    content: [icodeContent._id]
                });
                icodeContent.save((err) => {
                    if (err) {
                        console.log(err);
                        res.json({
                            code: 500
                        });
                    } else {
                        icode.save((err) => {
                            if (err) {
                                console.log(err);
                                res.json({
                                    code: 500
                                });
                            } else {
                                res.json({
                                    code: 200
                                });
                            }
                        });
                    }
                });
            }
        }
    } else {
        res.json({
            code: 501
        });
    }
}
