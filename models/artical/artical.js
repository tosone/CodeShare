module.exports = mongoose => {
  return mongoose.model('Artical', {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }, // who wrote this artical
    intro: String, // artical intro
    title: String, // artical title
    tags: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }, // artical tags
    content: String, // artical content
    like: { type: Number, default: 0 },
    lookOver: { type: Number, default: 0 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    deleteAt: { type: Date, default: null }
  });
};
