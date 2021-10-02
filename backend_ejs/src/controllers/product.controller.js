const express = require('express');
const Products = require('../models/product.models')
const router = express.Router();

router.get('',async(req,res)=>{
    const products = await Products.find().lean().exec();

    res.status(200).send({products})
})

router.post('',async(req,res)=>{
    
    const product = await Products.create(req.body);
    return res.status(201).send("Product Data Posted Successfully")
})
router.delete('/:prodid',async(req,res)=>{
    const product = await Products.findByIdAndDelete(req.params.prodid).lean().exec();

    return res.status(200).send("Product Data Deleted Successfully")
})

module.exports = router;