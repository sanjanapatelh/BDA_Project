
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
app.use(cors());

let detail = require("./model");
const bodyParser=require('body-parser');
const router = express.Router();
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb://127.0.0.1:27017/details", {
  useNewUrlParser: true,
  useUnifiedTopology:true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});



app.use("/", router);

router.route("/getData").get(function(req, res) {
  detail.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.route("/insertdata").post(function(req, res) {
  console.log(req)
  detail.insertMany(
    [
      {name:req.body.name,
        age:req.body.age,
        type:req.body.type
      }
    ],
    function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});


router.route("/remove").delete(function(req, res) {
  detail.deleteMany({"name":req.body.name}, function(err, result) {
  if (err) {
    console.err(err);
  } else {
    res.json(result);
  }
});
});


router.route("/find").get(function(req, res) {
  detail.find(
    { "name":req.body.name },
    function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    }
  );
});



router.route("/update").put(function(req, res) {
  detail.updateOne({ name: req.body.name }, { age:req.body.age }, function(
    err,
    result
  ) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});


app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
