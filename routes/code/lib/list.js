'use strict';
const moment = require('moment');

module.exports = function(req, res) {
    const userid = req.query.id;
    const api = req.api;
    const User = req.model.user;

    User.findById(userid, (err, userinfo) => {
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
                            page: page,
                            moment: moment,
                            userinfo: userinfo
                        });
                    })
                })
            });
        });
    });
}
