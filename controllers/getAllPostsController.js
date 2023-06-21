const Post = require("../models/Post");

const getAllPostsController = async (req, res, next) => {
  try {
    // Retrieve all posts
    const posts = await Post.find().populate("author", "name email");
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllPostsController;
