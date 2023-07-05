const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){
    if(req.methods == "options"){
        next()
    }
    try{
        const token = req.headers.authorization.split('')[1]
        if(!token){
            return res.status(401).json({message: "Not authorised"})
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()

    }catch(e){
        res.status(401).json({message: "Not authorised"})
    }
}