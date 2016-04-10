'use strict';
//返回指定代码片段指定版本的内容
module.exports = (context) => {
    const Code = context.model.code;
    const CodeContent = context.model.codeContent;

    return (codeid, version) => {
        return new Promise((resolve, reject) => {
            Code.findById(codeid)
                .populate({
                    path: 'content',
                    match: { _id: version }
                }).exec((err, code) => {
                    if (err) {
                        console.log(err);
                        reject(err)
                    } else {
                        resolve(code);
                    }
                });
        })
    }
}
