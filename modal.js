const mongoose = require('mongoose')

const data = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('data',data)