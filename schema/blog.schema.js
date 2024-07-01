const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is Required"],
  },
  author: {
    type: String,
    required: [true, "Author is Required"],
  },
  content: {
    type: String,
    required: [true, "Content is Required"],
  },
  comment: {
    type: Array,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const blogModel = new mongoose.model("blog", blogSchema);
module.exports = blogModel;
