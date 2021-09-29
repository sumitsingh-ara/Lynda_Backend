const mongoose = require('mongoose');

const connectWithMongodb =()=>{
    return mongoose.connect(' mongodb://127.0.0.1:27017/wepart')
}

module.exports = connectWithMongodb;