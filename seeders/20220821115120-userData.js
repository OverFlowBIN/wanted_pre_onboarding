"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          userId: "bin11788",
          fullname: "김영빈",
          email: "bin11788@gmail.com",
          password: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "overflowBIN",
          fullname: "김승빈",
          email: "overflowbin@gmail.com",
          password: "2345",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "test",
          fullname: "김태빈",
          email: "test@gmail.com",
          password: "3456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
