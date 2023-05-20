const mongoose = require('mongoose')

const info = new mongoose.Schema({
    
     
     
        fname:{
                type:String,
                required:true
            },

            lname:{
                type:String,
                required:true
            },

            fullName: {
                type :String,
                required:true 
            }
            
    
})

module.exports = mongoose.model('info',info)