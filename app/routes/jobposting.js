var express = require("express");
var router = express.Router();
var controller = require("../controllers/jobposting");

// get all jobpostings
router.get("/", controller.alljobposting.get);

// get search jobpostings
router.get("/search", controller.jobposting.get);

module.exports = router;
