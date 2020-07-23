const Sequelize = require("sequelize");
const { db , host , dbUser , dbPassword } = require('../config/keys')

const sequelize = new Sequelize(db, dbUser, dbPassword, {
  host: host,
  dialect: "mysql"
});

module.exports = sequelize;
global.sequelize = sequelize;