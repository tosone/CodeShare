'use strict';

module.exports = function(req, res) {
    const User = req.model.user;
    const qiniu = req.qiniu;
    const util = req.util;
    const name = util.uuid() + ".png";
    qiniu.upFile(req.body.img, name).then(function() {
        console.log("erert")
        User.findByIdAndUpdate(req.session.userid, {
            headFace: name
        }, (err, val) => {
            console.log("sdf")
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
