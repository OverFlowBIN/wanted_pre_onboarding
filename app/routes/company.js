var express = require("express");
var router = express.Router();
var controller = require("../controllers/company");

// get test (findAll compaies)
router.get("/test", controller.test.get);

// post jobposting (Create)
router.post("/:company_id/jobposting/new", controller.jobpostingCreate.post);

// patch jobposting (Update)
router.patch("/:id/jobposting/update", controller.jobpostingUpdate.patch);

// delete jobposting (Delete)
router.delete("/:id/jobposting/delete", controller.jobpostingDelete.delete);

module.exports = router;
