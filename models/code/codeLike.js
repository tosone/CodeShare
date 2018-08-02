module.exports = mongoose => {
  return mongoose.model('CodeLike', {
    code: { type: mongoose.Schema.Types.ObjectId, ref: 'code' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    createAt: { type: Date, default: Date.now }
  });
};
