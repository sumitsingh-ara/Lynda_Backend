const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser")
const connectWithMongodb = require("./configs/db")
const app = express();
app.use(express.json());

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/images", express.static(__dirname + "public/images"));

app.set("view engine", "ejs");
app.use(express.urlencoded());
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//for launching website from signup page
app.get("/signup",async (req, res) => {
  
  res.render("Register",{x: ""});
});
//for merging with href addresses
app.get('/signin',async (req, res)=>{
  res.render("signin")
})
//for merging with home href
app.get('/home',async (req, res)=>{
  res.render("home")
})


const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");
app.use("/users",userController);
app.use("/products",productController);



app.listen(3838, async (req, res) => {
  await connectWithMongodb();
  console.log("listen to port 3838");
});
