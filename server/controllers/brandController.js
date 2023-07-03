const { Brand } = require("../models/models")


class BrandController{
    async create(req,res){
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getAll(req,res){
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async delete(req, res) {
        const { id } = req.body;
      
        const brand = await Brand.findByPk(id);
        if (!brand) {
          return res.status(404).json({ error: 'Brand not found' });
        }
      
        await brand.destroy();
      
        return res.json(brand);
      }
      
}


module.exports = new BrandController()