const express = require('express');
const User = require('../models/user.models')
const router = express.Router();

router.get('',async(req,res)=>{
    const users = await User.find().lean().exec();

    res.status(200).send({users})
})
router.get('/getone/:id',async(req,res)=>{

    const user = await User.findById(req.params.id).lean().exec();
    res.status(200).send({user})

})
router.patch('/update/:id',async(req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
    console.log(user);
    return res.status(200).send({user})
})

router.post('',async(req,res)=>{
    try{
        if(req.body.first_name && req.body.email_or_phone && req.body.password){
            const usersList = await User.find({email_or_phone:req.body.email_or_phone}).lean().exec();
            if(usersList.length != 0){
                res.render("Register",{
                    x:"User id already exists!",
                });
                return
            }else{
                const users = await User.create(req.body)
              res.redirect("signin")
              return
            }
        }else if(!req.body.first_name){
            res.render("Register",{
                x:"Name is missing !",
            });
            return
        }else if(!req.body.email_or_phone){
            res.render("Register",{
                x:"Email is missing !",
            });
            return
        }
        else if(!req.body.password){
            res.render("Register",{
                x:"Password is missing !",
            });
            return
        }
    }
    catch(err){
        res.status(400).send(err.message);
    }
 
    
   
})
router.delete("/:deleteid",async(req,res)=>{
    const user = await User.findByIdAndDelete(req.params.deleteid)

    return res.status(200).send("User deleted successfully")
})

module.exports = router;