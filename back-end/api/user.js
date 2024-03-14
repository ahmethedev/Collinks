const UserService = require('../services/user-service')

module.exports = (app) => {
    const service = new UserService()


    app.post('/user/register',async(req,res,next) => {
        try {
            const result = await service.SignUp(req.body.email,req.body.password,req.body.userName)
            if(result == 0){
                return res.status(400).json({error: 'User Cannot Register'})
            } else {
                return res.json(result)
            }
        } catch (error) {
            next(error)
        }
    })

    app.post('/user/login',async(req,res,next) => {
        try {
            const result = await service.SignIn(req.body.email,req.body.password)
            if(result == 0){
                return res.status(400).json({error: 'Cannot Login'})
            } else {
                return res.json(result)
            }
        } catch (error) {
            next(error)
        }
    })
}