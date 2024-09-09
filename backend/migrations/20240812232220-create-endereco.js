'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pessoas', {
      Id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      Nome: {
          type: Sequelize.STRING,
          allowNull: false
      },
      CPF: {
          type: Sequelize.STRING,
          allowNull: false
      },
      Telefone: {
          type: Sequelize.STRING,
          allowNull: false
      },
    });
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('pessoas');
  }
};
