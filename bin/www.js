const app = require("../app");
const models = require("../models/index");

const PORT = 3000;

models.sequelize
  .sync()
  .then(() => {
    console.log("🚀🚀  DB 연결 성공  🚀🚀");
    app.listen(PORT, async () => {
      console.log(`🚀🚀  Server listening at http://localhost:${PORT} 🚀🚀`);
    });
  })
  .catch((err) => {
    console.log("연결 실패");
    console.log(err);
  });
