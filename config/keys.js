require('dotenv').config()

module.exports = {
    port: process.env.PORT,
    secretOrKey: process.env.SECRET_KEY,
    db: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASS
}