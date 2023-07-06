const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')


router.post('/', basketController.removeFromBasket)
// router.get('/', basketController.getAll)
// router.delete('/', basketController.delete)

module.exports = router