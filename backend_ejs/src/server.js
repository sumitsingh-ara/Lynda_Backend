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



//for launching website from signup page
app.get("/signup",async (req, res) => {
  
  res.render("index",{x: ""});    
});
//for merging with href addresses
app.get('/signin',async (req, res)=>{
  res.render("signin",{y:""})
})
//for merging with home href
app.get('/home',async (req, res)=>{
  res.render("home")
})
/////////////////---------------------------------------///////////////////////
app.get("/addToCart",async(req,res)=>{
  res.render("addToCart")
})

app.get("/businessContent",async(req,res)=>{
  res.render("businessContent")
})
app.get("/creativeContent",async(req,res)=>{
  res.render("creativeContent")
})
app.get("/technologyContent",async(req,res)=>{
  res.render("technologyContent")
})
app.get("/main",async(req,res)=>{
  res.render("main")
})
app.get("/payment",async(req,res)=>{
  res.render("payment")
})
app.get("/government",async(req,res)=>{
  res.render("government")
})
app.get("/business",async(req,res)=>{
  res.render("business")
})
app.get("/higherEducation",async(req,res)=>{
  res.render("higherEducation")
})
app.get("/myLearning",async(req,res)=>{
  res.render("myLearning")
})
app.get("/saved",async(req,res)=>{
  res.render("saved")
})
app.get("/subscription",async(req,res)=>{
  res.render("subscription")
})
app.get("/proMembership",async(req,res)=>{
  res.render("proMembership")
})


const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");
const loginController = require("./controllers/login.controller");
const searchController = require("./controllers/search.controller");
const savedController = require("./controllers/saved.controller");
const inprogressController = require("./controllers/inprogress.controller");
app.use("/users",userController);
app.use("/products",productController);
app.use('/login',loginController);
app.use('/search',searchController);
app.use('/savedvideos',savedController);
app.use('/inprogress',inprogressController);



app.listen(3838, async (req, res) => {
  await connectWithMongodb();
  console.log("listening to port 3838");
});
