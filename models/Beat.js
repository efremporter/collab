const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeatSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  file: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Beat = mongoose.model('beat', BeatSchema);
module.exports = Beat;