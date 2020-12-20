const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let detail = new Schema({
  name: {
    type: String
  },
  age: {
    type:String
  },
  _id: {
    type: String
  },
  id: {
    type: String
  },
  URL_LENGTH: {
    type: Number
  },
  NUMBER_SPECIAL_CHARACTERS: {
    type: Number
  },
  CHARSET: {
      type:String
  },
   SERVER: {
       type:String
   } ,
   CONTENT_LENGTH : {
       type:Number
   },
   WHOIS_COUNTRY :  {
       type:String
   },
   WHOIS_STATEPRO : {
       type:String
   } ,
   WHOIS_REGDATE : {
       type:String
   } ,
   WHOIS_UPDATED_DATE : {
       type:String
   } ,
   TCP_CONVERSATION_EXCHANGE : {
       type:Number
   },
   DIST_REMOTE_TCP_PORT : {
       type:Number
   },
   REMOTE_IPS : {
       type:Number
   },
   APP_BYTES : {
       type:Number
   },
   SOURCE_APP_PACKETS : {
       type:Number
   },
   REMOTE_APP_PACKETS : {
       type:Number
   },
   SOURCE_APP_BYTES : {
       type:Number
   },
   REMOTE_APP_BYTES : {
       type:Number
   },
   APP_PACKETS :  {
       type:Number
   },
   DNS_QUERY_TIMES : {
       type:Number
   },
   Type : {
       type:Number
   }
});




module.exports = mongoose.model("detail", detail);
