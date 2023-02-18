const mongoose = require("mongoose");

const data_schema = new mongoose.Schema({
  name: String,
  data: String,
});

const data_model = new mongoose.model("data", data_schema);
module.exports = data_model;
