const express = require('express')
const user = require('./api/user')

module.exports = async (app) => {
    
    app.use(express.json())
    app.use(express.urlencoded(true))

    // API's
    user(app) // User API
    
}