


var express=require("express");
var bodyParser=require("body-parser");
const path = require('path');

// MongoDb Connection here
const mongoose = require('mongoose');
const cors=require("cors")
mongoose.connect("mongodb://localhost:27017/express");
var db = mongoose.connection;
db.on('Error', console.log.bind(console, 'Error in Connection'));
db.once('Open', function(callback)
{
    console.log('Connection Successfull');
});
 // 
var app=express()
  
  
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.get("/",cors(),async(req,res)=>{res.send("THIS IS WORKING")})


  
app.post('/sign_up', function(req,res){
    var model = req.body.model;
    var color =req.body.color;
    var company = req.body.company;
    var price =req.body.price;
  
    var data = {
        "model": model,
        "color":color,
        "company":company,
        "price":price
    }
    // MongoDb Collection code here
db.collection('cars').insertOne(data, function(err, collection)
{
    if (err) throw err;
    console.log('Data Inserted Successfully');
})
    
    //
    res.sendFile(path.join(__dirname+'/insert_success.html'));     

})


  
app.get('/',function(req,res){
res.set({
    'Access-control-Allow-Origin': '*'
    });
    res.sendFile(path.join(__dirname+'/index.html'));
}).listen(3000)
  
  
console.log("server listening at port 3000");