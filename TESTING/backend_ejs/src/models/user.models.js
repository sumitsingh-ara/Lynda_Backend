const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:false},
    email_or_phone:{type:String,required:true},
    password:{type:String,required:true},
    flag:{type:Boolean,default: false},
    payment_flag:{type:Boolean,default:false},
},{
    versionKey:false,
    timestamps:true
})

const User = mongoose.model('user',signupSchema);
module.exports = User;