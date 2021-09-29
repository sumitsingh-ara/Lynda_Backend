const mongoose = require("mongoose");
const express = require("express");
const connectWithMongodb = require("./configs/db")
const app = express();
app.use(express.json());

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/images", express.static(__dirname + "public/images"));

app.set("view engine", "ejs");
app.use(express.urlencoded());


app.get("/launch",async (req, res) => {
  let data = await User.find().lean().exec();
  res.render("Register",{data});
});

const userController = require("./controllers/user.controller");
const User = require("./models/user.models");
app.use("/users",userController);



app.listen(3838, async (req, res) => {
  await connectWithMongodb();
  console.log("listen to port 3838");
});
