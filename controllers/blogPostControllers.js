const { BlogPost } = require("../models");

module.exports = {
  savePost: async (req, res) => {
    console.log(req.body)
    const { id, title, content, user, date, reactions } = req.body
    const dbRes = await BlogPost.create({ id, title, content, user, date, reactions})
    res.status(200).json(dbRes)
  },
  getAllPosts: async (req, res) => {
      const dbRes = await BlogPost.find({})
      res.status(200).json(dbRes)
  }
};
