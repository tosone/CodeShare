module.exports = mongoose => {
  return mongoose.model('MailLog', {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    email: String,
    type: { type: String, default: '' },
    success: { type: Boolean, default: true },
    timestamp: { type: Date, default: Date.now }
  });
};
