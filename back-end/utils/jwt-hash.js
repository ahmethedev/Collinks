const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.ValidatePassword = async (inputPassword,savedPassword) => {
    try {
         const result = await bcrypt.compare(inputPassword,savedPassword)
         return result
    } catch (error) {
        console.log("Error validating password")
        console.log(error)
    }
}

module.exports.CreateToken = async (payload) => {
    try {
        return await jwt.sign(payload,'thisisjwtkey',{expiresIn:'3h'})
    } catch (error) {
        console.error(error)
        console.log('Error creating token')
    }
}


module.exports.ValidateToken = async (req) => {
    try {
        const user = await jwt.verify(req.headers.token,"thisisjwtkey")
        if(user){
            req.user = user._id
            return true
        }
        return false
    } catch (error) {
        console.log('Error Validating Token')
        return false
    }
}
