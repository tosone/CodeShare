'use strict';
module.exports = (req, res) => {
    const valiableLang = req.valiableLang;
    const Code = req.model.code;
    let codeid = req.query.id;

    if (req.session.name) {
        Code.remove({
            _id: codeid
        }, function(err) {
            if (err) {
                console.log(err);
                res.json({
                    code: 500
                });
            } else {
                res.json({
                    code: 200
                });
            }
        });
    } else {
        res.json({
            code: 500
        });
    }
}
