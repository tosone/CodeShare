'use strict';
module.exports = (req, res) => {
    const Code = req.model.code;
    let codeid = req.query.id;

    Code.findById({ _id: codeid }).populate({
        path: 'content',
        options: {
            sort: { timestamp: "desc" },
            limit: 1
        }
    }).exec((err, code) => {
        let codeversion = code.content[0]._id;
        let icode = new Code({
            user: req.session.userid,
            intro: code.intro,
            tags: code.tags,
            lang: code.lang,
            content: [codeversion]
        });
        icode.save((err) => {
            if (err) {
                console.log(err);
                res.json({ code: 500 });
            } else {
                res.json({
                    code: 200,
                    msg: icode._id
                })
            }
        })
    });

    // , function(err,code) {
    //     if (err) {
    //         console.log(err);
    //         res.json({
    //             code: 500
    //         });
    //     } else {
    //         res.json({
    //             code: 200
    //         });
    //     }
    // });
}
