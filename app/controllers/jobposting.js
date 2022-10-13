const { Company, Jobposting } = require("../../models");

module.exports = {
  // 채용공고 목록 가져오기(최신순)
  alljobposting: {
    get: async (req, res) => {
      try {
        let allJobPosting = await Jobposting.findAll({
          include: [
            {
              model: Company,
              attributes: ["name", "nation", "city"],
            },
          ],
          attributes: ["id", "position", "compensation", "skill"],
          order: [["id", "DESC"]],
        });

        res.status(200).send(allJobPosting);
      } catch {
        res.status(400).send({ message: "Invalid request" });
      }
    },
  },

  jobposting: {
    get: async (req, res) => {
      let { company, nation, skill } = req.query;

      try {
        let allJobPosting = await Jobposting.findAll({
          raw: true,
          attributes: ["id", "company_id", "position", "compensation", "skill"],
        });

        for (el of allJobPosting) {
          el.company_id = await Company.findOne({
            where: { id: el.company_id },
            attributes: ["name", "nation", "city"],
          });
        }

        // filterSearch
        let result = allJobPosting.filter((el) => {
          if (company && el.company_id.name === company) return true;
          else if (nation && el.company_id.nation === nation) return true;
          else if (skill && el.skill === skill) return true;
          return false;
        });

        res.status(200).send(result);
      } catch {
        res.status(400).send({ message: "Invalid request." });
      }
    },
  },
};

// [
//   {
//       "id": 1,
//       "company_id": {
//           "name": "원티드",
//           "nation": "한국",
//           "city": "서울"
//       },
//       "position": "updated position5",
//       "compensation": 1000000,
//       "skill": "python"
//   },
//   {
//       "id": 2,
//       "company_id": {
//           "name": "원티드",
//           "nation": "한국",
//           "city": "서울"
//       },
//       "position": "front-end development",
//       "compensation": 500000,
//       "skill": "Javascript"
//   },
//   {
//       "id": 3,
//       "company_id": {
//           "name": "원티드",
//           "nation": "한국",
//           "city": "서울"
//       },
//       "position": "big-data development",
//       "compensation": 500000,
//       "skill": "python"
//   },
//   {
//       "id": 4,
//       "company_id": {
//           "name": "원티드",
//           "nation": "한국",
//           "city": "서울"
//       },
//       "position": "server development",
//       "compensation": 500000,
//       "skill": "node.js"
//   },
//   {
//       "id": 5,
//       "company_id": {
//           "name": "삼성",
//           "nation": "한국",
//           "city": "안양"
//       },
//       "position": "back-end development",
//       "compensation": 1000000,
//       "skill": "python"
//   },
//   {
//       "id": 6,
//       "company_id": {
//           "name": "삼성",
//           "nation": "한국",
//           "city": "안양"
//       },
//       "position": "front-end development",
//       "compensation": 500000,
//       "skill": "Javascript"
//   },
//   {
//       "id": 7,
//       "company_id": {
//           "name": "삼성",
//           "nation": "한국",
//           "city": "안양"
//       },
//       "position": "big-data development",
//       "compensation": 500000,
//       "skill": "python"
//   },
//   {
//       "id": 8,
//       "company_id": {
//           "name": "삼성",
//           "nation": "한국",
//           "city": "안양"
//       },
//       "position": "server development",
//       "compensation": 500000,
//       "skill": "node.js"
//   }
// ]
