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
  reactions: mongoose.Schema.Types.Mixed,
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = BlogPost;
