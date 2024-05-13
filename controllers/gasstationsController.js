const GasStation = require("../models/gasstationModel.js");

module.exports = {
	getGasStationsAll(req, res, next) {
		GasStation.getAll()
			.then(data => res.status(200).json({ success: true, gasstations: data }))
			.catch(err => res.status(400).json({ err }))
	}
}