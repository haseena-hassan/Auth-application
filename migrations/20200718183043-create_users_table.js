"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
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
          type: Sequelize.INTEGER(10),
          allowNull: false
      },
      password: {
          type: Sequelize.STRING(20),
          allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  }
};