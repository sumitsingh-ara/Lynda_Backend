const mongoose = require("mongoose");
const express = require("express");
const bodyParsers = require("body-parser")
const connectWithMongodb = require("./configs/db")
const app = express();
app.use(express.json());

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/images", express.static(__dirname + "public/images"));

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(bodyParsers.urlencoded({extended: true}));

//for launching website from signup page
app.get("/signup",async (req, res) => {
  let data = await User.find({}).lean().exec();
  res.render("Register",{data});
});
//for merging with href addresses
app.get('/signin',async (req, res)=>{
  res.render("signin")
})

const userController = require("./controllers/user.controller");
const User = require("./models/user.models");
app.use("/users",userController);



app.listen(3838, async (req, res) => {
  await connectWithMongodb();
  console.log("listen to port 3838");
});
