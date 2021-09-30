const express = require('express');
const User = require('../models/user.models')
const router = express.Router();

router.get('',async(req,res)=>{
    const users = await User.find().lean().exec();

    res.status(200).send({users})
})

router.post('',async(req,res)=>{
    
    if(req.body.first_name && req.body.email_or_phone && req.body.password){
        const usersList = await User.find({email_or_phone:req.body.email_or_phone}).lean().exec();
        if(usersList.length != 0){
            console.log(usersList.length)
            res.render("Register",{
                x:"ID Exists!",
            });
        }else{
            const users = await User.create(req.body)
            return res.redirect("signin")
        }
    }else{
        res.send("Email,Name or Password is missing");
    }
    return
   
})

module.exports = router;