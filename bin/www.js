const app = require("../app");
const models = require("../models/index");

const PORT = 3000;

models.sequelize
  .sync()
  .then(() => {
    console.log("đđ  DB ě°ę˛° ěąęłľ  đđ");
    app.listen(PORT, async () => {
      console.log(`đđ  Server listening at http://localhost:${PORT} đđ`);
    });
  })
  .catch((err) => {
    console.log("ě°ę˛° ě¤í¨");
    console.log(err);
  });
