var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  post_text: String,
  publisher: String,
  votes: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', PostSchema);
