const express = require('express')
const { testUserController } = require('../controllers/testController')

//router object
const router = express.Router()

//routes Get | Post |Update | Delete
router.get('/test-user',testUserController )

//export
module.exports = router