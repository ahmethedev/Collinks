const mongoose = require('mongoose')

module.exports = async() => {
    try {
        mongoose.connect("mongodb+srv://ktc4131:itsjustashotaway99@knowthecitycluster.iwlarxp.mongodb.net/", {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => console.log("Connected to DB!!"))
.catch((err) => console.log(err))
    } catch (error) {
        console.log('Errorrrr')
        console.log(error)
        process.exit(1)
    }
}