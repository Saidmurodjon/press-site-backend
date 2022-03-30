const express=require('express')
const router =express.Router()

const user=require('./user')
router.route('/').get(user.getUser)
// router.route('/').post(user.addUser)
// router.route('/:id').put(user.updateUser)
// router.route('/:id').delete(user.deleteUser)
// router.route('/pay/:id').put(user.payUser)



module.exports=router