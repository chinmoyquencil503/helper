var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var data_model = require("../model/data");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/add", async (req, res, next) => {
  const { name, data } = req.body;
  console.log(req.body);
  var details = new data_model({
    name: name,
    data: data,
  });
  details.save((err, result) => {
    if (!err) res.send("success User added successfully!");
    else console.log("Error during record insertion : " + err);
  });
});

router.get("/show-all", async (req, res, next) => {
  const name = req.body;
  await data_model.find({}, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});
module.exports = router;
