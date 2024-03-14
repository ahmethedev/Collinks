const {CreateToken,ValidatePassword} = require('../utils/jwt-hash')
const {UserRepository} = require('../database')

class UserService{
    constructor(){
        this.repository = new UserRepository()
    }

    async SignIn(email,password){
        try {
            const user = await this.repository.FindUser(email)
            if(user){
                const isValid = await ValidatePassword(password,user.password)
                console.log(isValid)
                if(isValid){
                    const token = await CreateToken({email: user.email,_id:user._id})
                    return {id:user._id, token}
                }
            }
            return 0
        } catch (error) {
            console.log(error)
        }
    }

    async SignUp(email,password,userName){
        try {
            const isSignedUp = await this.repository.FindUser(email)
            if(isSignedUp == null){
                const user = await this.repository.CreateUser(email,password,userName)
                const token = await CreateToken({email:user.email,_id:user._id})
                return {id:user._id,token:token}
            }
            return 0    
        } catch (error) {
            console.log(error)
        }
    }

    async GetUserProfile(userId){
        try {
            const user = await this.repository.FindUserById(userId)
            return user
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = UserService