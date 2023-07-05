const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMidleware = require('../middleware/AuthMidleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMidleware, userController.check)


module.exports = router