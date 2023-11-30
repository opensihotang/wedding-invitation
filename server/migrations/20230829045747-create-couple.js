'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Couples', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namaPria: {
        type: Sequelize.STRING
      },
      namaWanita: {
        type: Sequelize.STRING
      },
      imageProfilPria: {
        type: Sequelize.STRING
      },
      imageProfilWanita: {
        type: Sequelize.STRING
      },
      infoPria: {
        type: Sequelize.STRING
      },
      infoWanita: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Couples');
  }
};