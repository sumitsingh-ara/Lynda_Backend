const mongoose = require('mongoose');

const savedSchema = new mongoose.Schema({
    title:{type:String,required:true},
    name:{type:String,required:true},
    by:{type:String,required:true},
    date:{type:String,required:true},
    video:{type:String,default: true},
    image:{type:String,default:false},
    wikipediaLink:{type:String,required:true},
    time:{type:String,required:true},
    price:{type:String,required:false}
},{
    versionKey:false,
    timestamps:false
})

const Saved = mongoose.model('saved',savedSchema);
module.exports = Saved;