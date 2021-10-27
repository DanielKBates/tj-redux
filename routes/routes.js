module.exports = function (app) {
  app.get("/api/ping", (req, res) => {
    res.status(200).json("helloWorld");
  });

 
};
