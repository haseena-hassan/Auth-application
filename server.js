
//create express app
const express = require("express")
const app = express()


// bodyparser middleware
const bodyParser = require("body-parser")
app.use( bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// DB connection
require('./database/connection')


// backend api routing
const users = require('./routes/api/users')
app.use("/api/users", users)


//server listening to port
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server up and running on port ${port} !`))