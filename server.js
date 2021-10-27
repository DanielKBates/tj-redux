const express = require("express");

const app = express();
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/routes")(app)


// Listen on port 3000
app.listen(3001, function() {
    console.log("Server running on port 3001");
  });