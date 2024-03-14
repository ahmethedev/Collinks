const express = require("express")

const StartServer = async() => {
    const app = express()

    app.listen(5000,() => {
        console.log('Server Started')
    }).on('error',(error) => {
        console.log(error)
        process.exit()
    })

}