'use strict';

module.exports = (context) => {
    const Code = context.model.code;
    const codeList = require('./codeList')(context);
    const config = context.config;
    const valiableLang = context.valiableLang;
    let retLangs = [];
    
    return () => {
        return new Promise(function (resolve, reject) {
            Code.aggregate()
                .group({ _id: "$lang", total: { $sum: 1 } })
                .limit(6)
                .sort({
                    total: "desc"
                })
                .exec(function (err, langs) {
                    langs.map((lang) => {
                        retLangs.push(valiableLang[lang._id]);
                    });
                    resolve(retLangs);
                });
        });
    }
}
