const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name:     { type: String, require: true },
  email:    { type: String, require: true },
  password: { type: String, require: true },
  bio:      { type: String, require: true },
  dept:     { type: String, require: true },
  batch:    { type: String, require: true },
  dob:      { type: String, require: true },
  tags:     [{type: String, require: true }],
  posts:    [{type: String, require: true }],
  answers:  [{type: String, require: true }]
});

module.exports = mongoose.model('User', userSchema, 'users');