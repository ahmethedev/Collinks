const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    userName: {
        type: String,
        required: true
    },

})

userSchema.pre("save", async function(next){
    try {
        const user = this
        if(!user.isModified("password")){
            next()
        } else {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(user.password,salt)
            this.password = hashedPassword
            next()
        }
    } catch (error) {
        console.error(error)
        next()
    }
})

module.exports = mongoose.model("User",userSchema)