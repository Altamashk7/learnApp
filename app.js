
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

require('dotenv').config()

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// const classroomSchema = new mongoose.Schema({
    
// });

// const Classroom = new mongoose.model("Classroom",classroomSchema);

app.get("/", function(req,res){
    res.send("Api is working properly !");
});

app.listen("3000", function(){
    console.log("Server is running on port 3000");
});