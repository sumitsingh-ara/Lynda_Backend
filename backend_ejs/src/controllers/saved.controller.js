const express = require('express');
const Saved = require('../models/saved.models')
const router = express.Router();

router.get('',async(req,res)=>{
    const saved = await Saved.find().lean().exec();

    res.status(200).send({saved})
})

router.post('',async(req,res)=>{
    
    const product = await Saved.create(req.body);
    return res.status(201).send("Product Data Posted Successfully")
})
router.delete('/:savedid',async(req,res)=>{
    const product = await Saved.findByIdAndDelete(req.params.savedid).lean().exec();

    return res.status(200).send("Product Data Deleted Successfully")
})

module.exports = router;