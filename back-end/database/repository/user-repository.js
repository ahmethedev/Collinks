const UserModel = require('../models/User')

class UserRepository{
    async CreateUser(email, password,userName){
        try {
            const user = await UserModel.create({
                email,
                password,
                userName
            })
            return user
        } catch (error) {
            console.log(error)
        }
    }
    async FindUser(email){
        try {
            const user = await UserModel.findOne({email:email})
            return user
        } catch (error) {
            console.log(error)
        }
    }
    async FindUserById(id){
        try {
            const user = await UserModel.findUserById(id)
            return user
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = UserRepository