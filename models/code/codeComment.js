module.exports = mongoose => {
  return mongoose.model('CodeComment', {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    reply: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    code: { type: mongoose.Schema.Types.ObjectId, ref: 'code' },
    div: String, // 评论块的ID
    first: { type: Boolean, default: false },
    content: String, // 评论内容
    createAt: { type: Date, default: Date.now },
    deleteAt: { type: Date, default: null }
  });
};
