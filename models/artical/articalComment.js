module.exports = mongoose => {
  return mongoose.model('ArticalComment', {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    reply: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    artical: { type: mongoose.Schema.Types.ObjectId, ref: 'artical' },
    div: String, // 评论块的 ID
    first: { type: Boolean, default: false },
    content: String, // 评论内容
    createAt: { type: Date, default: Date.now }, // 时间戳
    deleteAt: { type: Date, default: Date.now }
  });
};
