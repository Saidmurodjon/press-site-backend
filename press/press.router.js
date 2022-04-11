const express=require('express')
const router =express.Router()

const press=require('./press')
router.route('/').get(press.getPress)
router.route('/').post(press.addPress)
// router.route('/:id').put(press.updatepress)
router.route('/:id').delete(press.deletePress)
// router.route('/pay/:id').put(press.paypress)



module.exports=router