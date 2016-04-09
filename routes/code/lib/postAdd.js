'use strict';
module.exports = function(req, res) {
    const Code = req.model.code;
    const valiableLang = req.valiableLang;
    if (req.session.name) {
        let intro = req.body.intro,
            tags = req.body.tags,
            lang = req.body.lang,
            codeContent = req.body.code;
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
                new Code({
                    user: req.session.userid,
                    intro: intro,
                    tags: tags.split(','),
                    lang: lang,
                    content: codeContent
                }).save(function() {
                    res.json({
                        code: 200
                    });
                });
            }
        }
    } else {
        res.json({
            code: 200
        });
    }
}
