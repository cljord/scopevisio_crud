const express = require("express");
const GasStationsController = require("../controllers/gasstationsController.js");

const gasStationsRouter = express.Router();

gasStationsRouter.get("/", GasStationsController.getGasStationsAll);
gasStationsRouter.get("/gasstation", GasStationsController.getGasStationById);
gasStationsRouter.delete("/gasstation", GasStationsController.deleteGasStation);
gasStationsRouter.post("/gasstation", GasStationsController.createGasStation);
gasStationsRouter.put("/gasstation", GasStationsController.updateGasStation);

module.exports = gasStationsRouter;
