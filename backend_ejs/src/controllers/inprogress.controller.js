const express = require('express');
const Inprogress = require('../models/inprogress.models')
const router = express.Router();

router.get('',async(req,res)=>{
    const inprogress = await Inprogress.find().lean().exec();

    res.status(200).send({inprogress})
})

router.post('',async(req,res)=>{
    
    const product = await Inprogress.create(req.body);
    return res.status(201).send("Product Data Posted Successfully")
})
router.delete('/:inprogressid',async(req,res)=>{
    const product = await Inprogress.findByIdAndDelete(req.params.inprogressid).lean().exec();

    return res.status(200).send("Product Data Deleted Successfully")
})

module.exports = router;