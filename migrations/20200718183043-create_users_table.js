"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER(10),
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
          type: Sequelize.STRING(15),
          allowNull: false
      },
      password: {
          type: Sequelize.STRING(255),
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