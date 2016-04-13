var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    const api = req.api;

    api.codeList({}, { like: 'desc' }, 1).then((likeCodes) => {
        api.codeList({}, { timestamp: 'desc' }, 1).then((newCodes) => {
            api.langs({}).then((langs) => {
                api.codeList({ lang: 'c_cpp' }, { timestamp: 'desc' }, 1).then((CCodes) => {
                    api.codeList({ lang: 'javascript' }, { timestamp: 'desc' }, 1).then((JSCodes) => {
                        api.codeList({ lang: 'python' }, { timestamp: 'desc' }, 1).then((PyCodes) => {
                            api.codeList({ lang: 'java' }, { timestamp: 'desc' }, 1).then((JavaCodes) => {
                                api.codeList({ lang: 'matlab' }, { timestamp: 'desc' }, 1).then((MatlabCodes) => {
                                    res.render('index/index', {
                                        title: "CodeSnippets - 首页",
                                        user: req.session.name,
                                        id: req.session.id,
                                        likeCodes: likeCodes,
                                        newCodes: newCodes,
                                        langs: langs,
                                        CCodes: CCodes,
                                        JSCodes: JSCodes,
                                        PyCodes: PyCodes,
                                        JavaCodes: JavaCodes,
                                        MatlabCodes: MatlabCodes
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

module.exports = router;
