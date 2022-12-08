'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Cars',[
      {
        name: "DBH-3491",
        rentPerDay: 200000,
        capacity: 2,
        image: "https://res.cloudinary.com/daq5yihdj/image/upload/v1669363048/cars/wqybtmnmqvns0quecip0.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "WXB-3984",
        rentPerDay: 800000,
        capacity: 6,
        image: "https://res.cloudinary.com/daq5yihdj/image/upload/v1669363048/cars/wqybtmnmqvns0quecip0.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Cars', null, {});
  }
};
