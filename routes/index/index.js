"use strict";
const express = require('express');
const router = express.Router();
const co = require('co');

router.get('/', function (req, res) {
    const api = req.api;
    const model = req.model;

    co(function* () {
        let likeCodes = yield api.codeList({}, { like: 'desc' }, 1);
        let newCodes = yield api.codeList({}, { timestamp: 'desc' }, 1);
        let hotLangContent = yield api.hotLangContent();
        let hotLangList = yield api.hotLangList();
        let userinfo = req.session.name ? (yield model.user.findById(req.session.userid)) : null;
        res.render('index/index', {
            title: "CodeSnippets - 首页",
            user: req.session.name,
            id: req.session.id,
            likeCodes: likeCodes,
            newCodes: newCodes,
            codes: hotLangContent,
            langs: hotLangList,
            userinfo: userinfo
        });
    });
});

router.get('/list', function (req, res) {
    const api = req.api;
    const model = req.model;

    co(function* () {
        let likeCodes = yield api.codeList({}, { like: 'desc' }, 1);
        let newCodes = yield api.codeList({}, { timestamp: 'desc' }, 1);
        let hotLangContent = yield api.hotLangContent();
        let hotLangList = yield api.hotLangList();
        res.render('index/list', {
            title: "CodeSnippets - 首页",
            user: req.session.name,
            id: req.session.id,
            likeCodes: likeCodes,
            newCodes: newCodes,
            codes: hotLangContent,
            langs: hotLangList
        });
    });
})

module.exports = router;
