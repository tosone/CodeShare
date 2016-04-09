"use strict";
module.exports = (mongoose) => {
    const Schema = mongoose.Schema;
    return mongoose.model("codeLike", new Schema({
        code: { type: Schema.Types.ObjectId, ref: 'code' }, //代码片段唯一性id
        user: { type: Schema.Types.ObjectId, ref: 'user' }, //用户ID
        timestamp: { //时间戳
            type: Date,
            default: Date.now
        }
    }, {
        versionKey: false
    }));
}
