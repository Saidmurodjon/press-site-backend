const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    firstName:String,
    surName:String,
    address:[{
        country:String,
        sity:String
    }],
    birth:String,
    degree:String,
    login:String,
    password:String,
    passwordCop:String,
    role:{
        type:String,
        default:"user"
    }
    
})
const UserModel = mongoose.model('UserModel', userSchema)
module.exports = UserModel