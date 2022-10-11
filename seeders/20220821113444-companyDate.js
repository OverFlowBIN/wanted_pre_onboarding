"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Companies",
      [
        {
          name: "wanted",
          nation: "한국",
          city: "서울",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "samsung",
          nation: "한국",
          city: "안양",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "lg",
          nation: "한국",
          city: "수원",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "hyundai",
          nation: "한국",
          city: "광주",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "naver",
          nation: "한국",
          city: "성남",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Companies", null, {});
  },
};
