'use strict';
module.exports = function(req, res) {
    let userid = req.session.userid;
    let api = req.api;
    api.userLangs(userid).then(languages => {
        api.userTags(userid).then(tags => {
            api.newCodeList(userid, 1).then(newCodes => {
                api.pages({ user: userid }).then(page => {
                    res.render('code/list', {
                        title: '代码片段列表',
                        lang: languages,
                        user: req.session.name,
                        newCode: newCodes,
                        tags: tags,
                        page: page
                    });
                })
            })
        });
    });
}
