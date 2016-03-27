'use strict';
module.exports = (mongoose) => {
    const Schema = mongoose.Schema;
    return mongoose.model("user", new Schema({
        uuid: String, //唯一性id
        uid: String, //登录名
        pwd: String, //密码
        email: {
            email: String,
            active: {
                type: Boolean,
                default: false
            },
            activeStr: String
        }, //邮箱
        qq: String, //QQ
        tel: String, //电话
        headFace: String, //头像
        //关注的人
        following: {
            type: Number,
            default: 0
        },
        //关注我的人
        followers: {
            type: Number,
            default: 0
        },
        //代码片段数量
        codeSnippets: {
            type: Number,
            default: 0
        },
        //网站内的score
        score: {
            type: Number,
            default: 0
        },
        //文章数
        artical: {
            type: Number,
            default: 0
        },
        //注册时间
        timestamp: {
            type: Date,
            default: Date.now
        }
    }, {
        versionKey: false
    }));

}