const mongoose = require('mongoose')
const pressSchema = mongoose.Schema({
    userId:String,
    title:String,
    genre:String,   
    tags:String,
    theme:String,
    text:String,
    view:Number,
    commit:[{
        text:String,
        email:String,
        name:String,
        date:String
    }],
    role:{
        type:String,
        default:"user"
    }
    
})
const PressModel = mongoose.model('PressModel', pressSchema)
module.exports = PressModel