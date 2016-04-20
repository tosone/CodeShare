'use strict';
const co = require('co');

module.exports = (context) => {
    const Code = context.model.code;
    const codeList = require('./codeList')(context);
    const config = context.config;
    let codes = [];

    return () => {
        return new Promise(function (resolve, reject) {
            Code.aggregate()
                .group({ _id: "$lang", total: { $sum: 1 } })
                .limit(6)
                .sort({
                    total: "desc"
                })
                .exec(function (err, langs) {
                    co(function* () {
                        for (let lang of langs) {
                            let code = yield codeList({ lang: lang._id }, { timestamp: 'desc' }, 1)
                            codes.push(code);
                        }
                    }).then(() => {
                        resolve(codes);
                    });
                });
        });
    }
}