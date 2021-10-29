const { BlogPost } = require("../models");

module.exports = {
  savePost: async (req, res) => {
    console.log(req.body);
    const { id, title, content, user, date, reactions } = req.body;
    const dbRes = await BlogPost.create({
      id,
      title,
      content,
      user,
      date,
      reactions,
    });
    res.status(200).json(dbRes);
  },
  getAllPosts: async (req, res) => {
    const dbRes = await BlogPost.find({});
    res.status(200).json(dbRes);
  },
  addReaction: async (req, res) => {
    const { id, reaction } = req.body;
    const dbRes = await BlogPost.findOneAndUpdate(
      { id },
      {
        $inc: { [`reactions.${reaction}`]: 1 },
      },
      { new: true }
    );

    res.status(200).json(dbRes);
  },
  updatePost: async (req, res) => {
    const { id, title, content } = req.body;
    console.log(req.body)
    const dbRes = await BlogPost.findOneAndUpdate(
      { id },
      { title: title, content: content },
      { new: true }
    );
    console.log(dbRes);
    res.status(200).json(dbRes);
  },
};
