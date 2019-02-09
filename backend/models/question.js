const mongoose = require('mongoose');

const qusSchema = mongoose.Schema({
  title:  { type: String },
  detail: { type: String },
  tags:   [{ type: String }],
  user:   { type: String },
  time:   { type : Date, default: Date.now }
});

module.exports = mongoose.model('Question', qusSchema, 'questions');