'use strict';
module.exports = function(req, res) {
    let userid = req.session.userid;
    let api = req.api;

    api.langs({ user: userid }).then(languages => {
        api.tags({ user: userid }).then(tags => {
            api.codeList({ user: userid }, { 'timestamp': 'desc' }, 1).then(newCodes => {
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
