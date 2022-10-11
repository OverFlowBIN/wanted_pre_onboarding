"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Jobpostings",
      [
        {
          company_id: 1,
          position: "back-end development",
          compensation: "1000000",
          content: "원티드에서 백엔드 개발자를 모집합니다.",
          skill: "python",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company_id: 1,
          position: "front-end development",
          compensation: "500000",
          content: "원티드에서 프론트엔드 개발자를 모집합니다.",
          skill: "Javascript",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company_id: 1,
          position: "big-data development",
          compensation: "500000",
          content: "원티드에서 빅데이터 개발자를 모집합니다.",
          skill: "python",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company_id: 1,
          position: "server development",
          compensation: "500000",
          content: "원티드에서 서버 개발자를 모집합니다.",
          skill: "node.js",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company_id: 2,
          position: "back-end development",
          compensation: "1000000",
          content: "삼성에서 백엔드 개발자를 모집합니다.",
          skill: "python",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company_id: 2,
          position: "front-end development",
          compensation: "500000",
          content: "삼성에서 프론트엔드 개발자를 모집합니다.",
          skill: "Javascript",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company_id: 5,
          position: "big-data development",
          compensation: "500000",
          content: "삼성에서 빅데이터 개발자를 모집합니다.",
          skill: "python",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company_id: 5,
          position: "server development",
          compensation: "500000",
          content: "삼성에서 서버 개발자를 모집합니다.",
          skill: "node.js",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Jobpostings", null, {});
  },
};
