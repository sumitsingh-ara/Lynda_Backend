const mongoose = require ("mongoose");
//imports
const express = require("express");
const app = express();
app.use(express.json());



const connect =()=>{
    return (mongoose = connect(" mongodb://127.0.0.1:27017/test"));

}

app.listen(3333,async (req,res)=>{
    await connect()
    console.log("success to port 3333");
})