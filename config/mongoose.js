const mongoose = require("mongoose");
const { mongoURI } = require("../environment");

mongoose
  .connect(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((response) => {
    console.log("Successfullly Connected to mongo DB server ", response);
  })
  .catch((error) => {
    console.log("**ERROR while connecting to mongo DB server ::", error);
  });

const db = mongoose.connection;

module.exports = db;
