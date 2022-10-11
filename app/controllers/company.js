const { Company, Jobposting } = require("../../models");

module.exports = {
  test: {
    get: async (req, res) => {
      Jobposting.findAll().then((data) => res.status(200).json(data));
    },
  },

  jobpostingCreate: {
    post: async (req, res) => {
      let company_id = req.params.company_id;
      let { position, compensation, content, skill } = req.body;

      try {
        await Jobposting.create({
          company_id,
          position,
          compensation,
          content,
          skill,
        });

        let result = await Jobposting.findAll({
          order: [["id", "DESC"]],
          where: { company_id },
          limit: 1,
        });

        res.status(200).send(result);
      } catch {
        res.status(400).send({ message: "Invalid request." });
      }
    },
  },

  jobpostingUpdate: {
    patch: async (req, res) => {
      let id = req.params.id;
      let { position, compensation, content, skill } = req.body;
      console.log(req.body);

      try {
        if (position) await Jobposting.update({ position }, { where: { id } });
        if (compensation)
          await Jobposting.update({ compensation }, { where: { id } });
        if (content) await Jobposting.update({ content }, { where: { id } });
        if (skill) await Jobposting.update({ skill }, { where: { id } });

        let result = await Jobposting.findOne({ where: { id } });

        res.status(200).send(result);
      } catch {
        res.status(400).send({ message: "Invalid request." });
      }
    },
  },

  jobpostingDelete: {
    delete: async (req, res) => {
      let id = req.params.id;
      console.log(id);

      try {
        await Jobposting.destroy({ where: { id } });

        res
          .status(200)
          .send({ message: `Deleted your job posting (ID Number ${id})` });
      } catch {
        res.status(400).send({ message: "Invalid request." });
      }
    },
  },
};
