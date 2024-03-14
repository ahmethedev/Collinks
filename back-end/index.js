const express = require("express")
const expressApp = require('./express-app')
const {databaseConnection} = require('./database')

const StartServer = async() => {
    const app = express()

    await databaseConnection()

    await expressApp(app)

    app.listen(5000,() => {
        console.log('Server Started')
    }).on('error',(error) => {
        console.log(error)
        process.exit()
    })
}

StartServer()