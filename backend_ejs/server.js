const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.set("views", "./views");
app.set("view engine", "ejs");
app.get("/users", (req, res) => {
  res.render("Register");
});

const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/backend");
};

app.listen(3838, async (req, res) => {
  await connect();
  console.log("listen to port 3898");
});
