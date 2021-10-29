const blogPostControllers = require("../controllers/blogPostControllers")

module.exports = function (app) {
  app.get("/api/allPosts", (req, res) => {
    blogPostControllers.getAllPosts(req,res)
  });

  app.post("/api/addPost", (req, res)=> {
    blogPostControllers.savePost(req,res)
  })
 
  app.post("/api/addReaction", (req, res)=> {
    blogPostControllers.addReaction(req, res)
  })

  app.post("/api/updatePost", (req, res)=> {
    blogPostControllers.updatePost(req,res)
  })
};
