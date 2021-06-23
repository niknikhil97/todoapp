const mongoose = require("mongoose");

const mongooseLink =
  "mongodb+srv://MainUser:Parker@cluster0.ongcz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(mongooseLink, {
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
