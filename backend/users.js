const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let users = new Schema({
  userName: {
    type: String
  },
  phone: {
    type: String
  },
  active: {
    type: Boolean
  },
  emailAddress:{
    type: String,
    lowercase: true,
  },
  email_verified: {
    type: Boolean,
    default:false
  },
  email_verify_token: {
    type: String,
    default:null
  },
  password: {
    type: String,
  },
  password_reset_token: {
    type: String,
    default:null
  },
  phone:{ 
    type: String,
    default:''
  },
  phone_verified: {
    type: Boolean,
    default:false
  },
  totalPoints: {
    type: Number,
    default: 0
  },
  acct_created_at: { 
    type: Date, 
    default: Date.now 
  },
});

module.exports = mongoose.model("users", users);