const express = require("express");
const GasStationsController = require("../controllers/gasstationsController.js");

const gasStationsRouter = express.Router();

gasStationsRouter.get("/", GasStationsController.getGasStationsAll);

module.exports = gasStationsRouter;
