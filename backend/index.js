
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
      {id:req.body.id,
        URL_LENGTH:req.body.URL_LENGTH,
        NUMBER_SPECIAL_CHARACTERS:req.body.NUMBER_SPECIAL_CHARACTERS,
        CHARSET:req.body.CHARSET,
        SERVER:req.body.SERVER,
        CONTENT_LENGTH:req.body.CONTENT_LENGTH,
        WHOIS_COUNTRY:req.body.WHOIS_COUNTRY,
        WHOIS_STATEPRO:req.body.WHOIS_STATEPRO,
        WHOIS_REGDATE:req.body.WHOIS_REGDATE,
        WHOIS_UPDATED_DATE:req.body.WHOIS_UPDATED_DATE,
        TCP_CONVERSATION_EXCHANGE:req.body.TCP_CONVERSATION_EXCHANGE,
        DIST_REMOTE_TCP_PORT:req.body.DIST_REMOTE_TCP_PORT,
        REMOTE_IPS:req.body.REMOTE_IPS,
        APP_BYTES:req.body.APP_BYTES,
        SOURCE_APP_PACKETS:req.body.SOURCE_APP_PACKETS,
        REMOTE_APP_PACKETS:req.body.REMOTE_APP_PACKETS,
        SOURCE_APP_BYTES:req.body.SOURCE_APP_BYTES,
        REMOTE_APP_BYTES:req.body.REMOTE_APP_BYTES,
        APP_PACKETS:req.body.APP_PACKETS,
        DNS_QUERY_TIMES:req.body.DNS_QUERY_TIMES,
        Type:req.body.Type
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
  detail.deleteMany({"id":req.body.id}, function(err, result) {
  if (err) {
    console.err(err);
  } else {
    res.json(result);
  }
});
});


router.route("/find").get(function(req, res) {
  detail.find(
    { "id":req.body.id },
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
  detail.updateOne({ id: req.body.id }, { Type:req.body.Type }, function(
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
