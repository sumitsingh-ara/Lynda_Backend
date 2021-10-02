const express = require('express');
const Search = require('../models/searcproducts.models')
const router = express.Router();

router.get('',async(req,res)=>{
    const search = await Search.find().lean().exec();

   return res.status(200).send({search})
})
router.get('/title/:titleid',async(req,res)=>{
    const searches = await Search.find({title:req.params.titleid}).lean().exec();

    return res.status(200).send({searches})
})

router.post('',async(req,res)=>{
    
    const search = await Search.create(req.body);
    return res.status(201).send("Product Data Posted Successfully")
})
router.delete('/:searchid',async(req,res)=>{
    const search = await Search.findByIdAndDelete(req.params.searchid).lean().exec();

    return res.status(200).send("Product Data Deleted Successfully")
})

module.exports = router;