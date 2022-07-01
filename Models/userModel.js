const mongoose = require("../database");
 
// create an schema
var userSchema = new mongoose.Schema({
            model: String,
            color:String,
            company: String,
            price: Number
        });
 
var userModel=mongoose.model('users',userSchema);
 
module.exports = mongoose.model("Users", userModel);

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userModel = require('../models/userModel');