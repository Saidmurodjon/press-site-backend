const express=require('express')
const router=express.Router()
const path=require('path')
// barcha so'rovlar githubda yozilgan !!!
const users=require('./users/user.router')
const press=require('./press/press.router')
const auth=require('./jwt/auth')
// const jwtVerify=require('./jwt/jwtVerify')


router.use('/login',auth)
// router.use(jwtVerify)
router.use('/users',users)
router.use('/press',press)
module.exports=router