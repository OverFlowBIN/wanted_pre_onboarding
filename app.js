var express = require("express");

var indexRouter = require("./app/routes/index");
var companyRouter = require("./app/routes/company");
var jobpostingRouter = require("./app/routes/jobposting");

var app = express();

// view engine setup

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/company", companyRouter);
app.use("/jobposting", jobpostingRouter);

module.exports = app;
