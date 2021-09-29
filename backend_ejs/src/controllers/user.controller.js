const express = require('express');
const User = require('../models/user.models')
const router = express.Router();

router.get('',async(req,res)=>{
    const users = await User.find().lean().exec();

    res.status(200).send({users})
})

router.post('',async(req,res)=>{
    const users = await User.create(req.body)
    if(users.first_name == null){
        res.render("First")
    }
    res.render("signin")
})

module.exports = router;