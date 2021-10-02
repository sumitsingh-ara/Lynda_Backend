const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
    title:{type:String,required:true},
    name:{type:String,required:true},
    by:{type:String,required:true},
    date:{type:String,required:true},
    video:{type:String,default: true},
    image:{type:String,default:true},
    wikipediaLink:{type:String,required:true},
    time:{type:String,required:true},
    price:{type:String,required:true}
},{
    versionKey:false,
    timestamps:false
})

const Search = mongoose.model('searchproducts',searchSchema);
module.exports = Search;