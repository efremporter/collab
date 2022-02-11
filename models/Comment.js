const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  beat: {
    type: Schema.Types.ObjectId,
    ref: 'beats'
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  file: {
    type: Object,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Comment = mongoose.model('comment', CommentSchema);
module.exports = Comment;