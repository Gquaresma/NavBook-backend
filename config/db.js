const mongoose = require("mongoose");
const { database_url } = require("../env");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(database_url, options).then(
  () => {
    console.log("Database Connected!");
  },
  (err) => {
    console.log(`Database error connection due to ${err}`);
  }
);
