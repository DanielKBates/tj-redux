const mongoose = require("mongoose");

const blogPostSchema = mongoose.Schema({
  id: String,
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  user: String,
  date: Date,
  reactions: {
    thumbsUp: {
      type: Number,
      default: 0,
    },
    heart: {
      type: Number,
      default: 0,
    },
    thumbsDown: {
      type: Number,
      default: 0,
    },
    eyes: {
      type: Number,
      default: 0,
    },
    dislike: {
      type: Number,
      default: 0,
    },
  },
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = BlogPost;
