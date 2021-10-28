const express = require("express");
const mongoose = require("mongoose");
const { mongoURI } = require("./config/keys");

const app = express();
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/routes")(app);

// Connect to mongoose, init express on port 3001
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log(`MongoDB connected at @ ${mongoURI}`);
    app.listen(3001, () => console.log("Server running on port 3001"));
  })
  .catch((error) => console.log(error));
