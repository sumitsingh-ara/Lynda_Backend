const mongoose = require('mongoose');

const connectWithMongodb =()=>{
    return mongoose.connect('"mongodb+srv://ranjan:LYNDA123@cluster0.s0wxp.mongodb.net/lyndabackend?retryWrites=true&w=majority"')
}

module.exports = connectWithMongodb;