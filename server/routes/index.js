const express = require('express')
const router = express.Router()
const coupleController = require('../controllers/coupleController')
const authentication = require('../middleware/authentication')
const adminController = require('../controllers/adminController')



router.post('/register', adminController.registerAdmin)
router.post('/login', adminController.handleLoginAdmin)


router.post("/google-login", coupleController.handleGoogleLogin)
router.post('/couple', coupleController.postCouple)
router.post('/gallery', coupleController.postGallery)
router.post('/info', coupleController.postInfo)
router.post('/story', coupleController.postStory)
router.get('/couple', coupleController.getCouple)
router.get('/couple/:id', coupleController.getCoupleById)

router.post('/guest', coupleController.postGuest)
router.get('/guest', coupleController.getGuestList)
router.use(authentication) 
router.post('/generate-midtrans-token', coupleController.generateMidtransToken)




module.exports = router