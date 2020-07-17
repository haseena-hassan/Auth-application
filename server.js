const express = require("express")
const bodyParser = require("body-parser")
const path = require('path')
const router = express.Router()

//create express app
const app = express()

// bodyparser middleware
app.use( bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// DB connection
require('./database/connection')


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server up and running on port ${port} !`))