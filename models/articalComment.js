"use strict";
module.exports = (mongoose) => {
    const Schema = mongoose.Schema;
    return mongoose.model("articalComment", new Schema({
        user: [{ type: Schema.Types.ObjectId, ref: 'user' }], //用户ID
        artical: [{ type: Schema.Types.ObjectId, ref: 'artical' }],
        div: String, //评论块的ID
        first: {
            type: Boolean,
            default: false
        },
        reply: [{ type: Schema.Types.ObjectId, ref: 'user' }],
        content: String, //评论内容
        timestamp: { //时间戳
            type: Date,
            default: Date.now
        }
    }, {
        versionKey: false
    }));
}
