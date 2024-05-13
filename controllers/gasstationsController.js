const GasStation = require("../models/gasstationModel.js");

module.exports = {
  getGasStationsAll(req, res, next) {
    GasStation.getAll()
      .then((data) =>
        res.status(200).json({ success: true, gasstations: data }),
      )
      .catch((err) => res.status(400).json({ err }));
  },
  getGasStationById(req, res, next) {
    const { id } = req.body;
    GasStation.getById(id)
      .then((data) =>
        res.status(200).json({ success: true, gasstations: data }),
      )
      .catch((err) => res.status(400).json({ err }));
  },
  deleteGasStation(req, res, next) {
    const { id } = req.body;
    GasStation.delete(id)
      .then((data) =>
        res.status(200).json({ success: true, gasstations: data }),
      )
      .catch((err) => res.status(400).json({ err }));
  },
  createGasStation(req, res, next) {
    const { id, address, x, y } = req.body;
    GasStation.create(id, address, x, y)
      .then((data) =>
        res.status(200).json({ success: true, gasstations: data }),
      )
      .catch((err) => res.status(400).json({ err }));
  },
  updateGasStation(req, res, next) {
    const { id, address, x, y } = req.body;
    GasStation.update(id, address, x, y)
      .then((data) =>
        res.status(200).json({ success: true, gasstations: data }),
      )
      .catch((err) => res.status(400).json({ err }));
  },
};
