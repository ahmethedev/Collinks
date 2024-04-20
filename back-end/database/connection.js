const mongoose = require('mongoose')

module.exports = async() => {
    try {
        mongoose.connect("mongodb+srv://jakerkane99:I8XCHs0mjKjHuSs3@collinkscluster.hy76kgg.mongodb.net/", {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => console.log("Connected to DB!!"))
.catch((err) => console.log(err))
    } catch (error) {
        console.log('Errorrrr')
        console.log(error)
        process.exit(1)
    }
}