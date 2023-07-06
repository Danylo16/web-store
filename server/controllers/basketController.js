const uuid = require('uuid')
const path = require('path')
const {Basket, BasketDevice} = require('../models/models')
const ApiError = require('../error/apiError');


class BasketController {
    async removeFromBasket(req, res, next) {
        const { userId, deviceId } = req.body;
    
        try {
          const basket = await Basket.findOne({ where: { userId } });
    
          if (!basket) {
            return  next(ApiError.badRequest('No such basket'))
          }
    
          const basketDevice = await BasketDevice.findOne({ where: { basketId: basket.id, deviceId } });
    
          if (!basketDevice) {
            return next(ApiError.badRequest('No such product'));
          }
    
          await basketDevice.destroy();
    
          return res.json({ message: 'The product has been removed' });
        } catch (e) {
          return next(ApiError.badRequest(e.message));
        }
      }
}
  
  module.exports = new BasketController();