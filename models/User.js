import Sequelize from 'sequelize'

module.exports = sequelize.define("User", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING(25),
        allowNull: false,
        unique: true
    },
    phone: {
        type: Sequelize.NUMBER(10),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
})
