const mongoose = require("mongoose");

require("dotenv").config();
const url = process.env.URL;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once("open", () => {
    console.log("connected");
  })
  .on("error", (error) => {
    console.log("error ", error);
  });
mongoose.set("strictQuery", true);
