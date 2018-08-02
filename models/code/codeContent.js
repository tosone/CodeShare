module.exports = mongoose => {
  return mongoose.model('CodeContent', {
    code: String,
    content: String,
    createAt: { type: Date, default: Date.now },
    deleteAt: { type: Date, default: null },
  });
};
