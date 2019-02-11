const mongoose = require('mongoose');

const comSchema = mongoose.Schema({
  postid:  { type: String },
  comment: { type: String },
  user:    { type: String },
  email:   { type: String },
  time:    { type : Date, default: Date.now }
});

module.exports = mongoose.model('Comment', comSchema, 'comments');