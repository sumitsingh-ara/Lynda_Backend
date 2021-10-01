const { render } = require('ejs');
const express = require('express');
const Login = require('../models/login.model')
const User = require('../models/user.models')
const router = express.Router();

router.post('',async(req,res)=>{
    try {
        if(!req.body.email){
            return res.render("signin",{
                y:"Please fill email address !"
            })
        }
        else if(!req.body.password){
            return res.render("signin",{
                y:"Please fill password !"
            })
        }
        else{
            const user = await User.find({email_or_phone:req.body.email}).lean().exec();
            if(user.length){
               user.forEach(({password,first_name,_id})=>{
                   if(password == req.body.password){
                    return res.render("home")
                    
                   }else{
                       return res.render("signin",{y:"User Credentials not matched"})
                   }
               })
            }else{
                res.render("signin",{y:"User not found ! Email id not registered"});
                return
            }
        }
    }
    catch(err) {
        res.status(400).send(err.message);
    }
})

router.get("/got/:loginid",async(req, res)=>{
    const user = await User.find({email_or_phone:req.params.loginid}).lean().exec();
    return res.status(200).send({user});
})



module.exports = router;