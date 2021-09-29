const express = require('express');
const User = require('../models/user.models')
const router = express.Router();

router.get('/getting',async(req,res)=>{
    const users = await User.find().lean().exec();

    console.log(users);

    // const name= users.first_name;
    // const email= users.email_or_phone;
    // const password= users.password;

    return
   // res.status(200).send({users})
})

router.post('',async(req,res)=>{
    const users = await User.create(req.body)
    res.send({users})
})

module.exports = router;