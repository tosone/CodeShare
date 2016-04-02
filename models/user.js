'use strict';
module.exports = (mongoose) => {
    const Schema = mongoose.Schema;
    return mongoose.model("user", new Schema({
        uid: String, //登录名
        pwd: String, //密码
        email: { //邮箱
            email: String,
            active: {
                type: Boolean,
                default: false
            },
            activeString: String
        },
        qq: String, //QQ
        tel: String, //电话
        headFace: String, //头像
        score: { //网站内的score
            type: Number,
            default: 0
        },
        timestamp: { //注册时间
            type: Date,
            default: Date.now
        }
    }, {
        versionKey: false
    }));

}
