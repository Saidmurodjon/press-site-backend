const express=require('express')
const router =express.Router()

const user=require('./user')
router.route('/').get(user.getUser)
// router.route('/').post(uploadMulter,user.addPupils)
// router.route('/:id').put(uploadMulter,user.updatePupils)
// router.route('/:id').delete(user.deletePupils)
// router.route('/pay/:id').put(user.payPupils)



module.exports=router