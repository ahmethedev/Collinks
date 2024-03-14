const {ValidateToken} = require('../../utils/jwt-hash')

module.exports = async(req,res,next) => {
    const isAuthorized = await ValidateToken(req)

    if(isAuthorized){
        return next()
    }

    return res.status(403).json({error:'User Not Authorized'})
}