module.exports = function(req, res, next){
    if(req.methods = "options"){
        next()
    }
    try{

    }catch(e){
        res.status(401).json({message: "Not authorised"})
    }
}