'use strict';
module.exports = (mongoose) => {
    var Schema = mongoose.Schema;
    return mongoose.model("mailLog", new Schema({
        user: [{ type: Schema.Types.ObjectId, ref: 'user' }],
        content: {
            type: String,
            default: ""
        },
        success: {
            type: Boolean,
            default: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }, {
        versionKey: false
    }));
}
