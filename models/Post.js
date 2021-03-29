const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },
});

module.exports = mongoose.model('Post', postSchema);
