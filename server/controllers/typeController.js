const {Type} = require('../models/models')
const ApiError = require('../error/apiError')

class TypeController{
    async create(req,res){
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req,res){
        const types = await Type.findAll()
        return res.json(types)
    }

    async delete(req, res) {
        const { id } = req.body;
      
        const type = await Type.findByPk(id);
        if (!type) {
          return res.status(404).json({ error: 'Type not found' });
        }
      
        await type.destroy();
      
        return res.json(type);
      }
}


module.exports = new TypeController()