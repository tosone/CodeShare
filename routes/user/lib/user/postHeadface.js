'use strict';

module.exports = function(req, res) {
    const User = req.session.user;
    const qiniu = req.qiniu;
    const util = req.util;
    const name = util.uuid() + ".png";
    qiniu.upFile(bucket, req.body.img, name).then(function() {
        user.findByIdAndUpdate(req.session.userid, {
            headFace: name
        }, (err, val) => {
            if (err) {
                res.json({ "code": 500 });
            } else {
                if (val) {
                    res.json({ "code": 200 });
                } else {
                    res.json({ "code": 500 });
                }
            }
        });
    });
}
