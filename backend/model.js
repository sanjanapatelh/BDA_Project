const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let detail = new Schema({
  name: {
    type: String
  },
  age: {
    type:String
  },
  type:{
    type:Number
  }
});

module.exports = mongoose.model("detail", detail);
