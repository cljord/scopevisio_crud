const express = require("express")

const app = express()

app.use(express.json())

const gasStationDataUrl = "https://geoportal.stadt-koeln.de/arcgis/rest/services/verkehr/gefahrgutstrecken/MapServer/0/query?where=objectid+is+not+null&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson";

const db = require("./config/config.js");

const saveGasStationDataToDatabase = (url) => {
	fetch(url)
		.then((response) => response.json())
		.then((gasStationData) => {
			return gasStationData.features
		})
		.then((features) => {
			features.forEach((feature) => {
				const {objectid: id, adresse: address} = feature.attributes;
				const {x, y} = feature.geometry;
				// console.log(id, address, x, y);
				db.none(`insert into gasstations values (${id}, '${address}', ${x}, ${y});`);
			})
		}).catch((err) => console.error("Couldn't save gas station data to database, ", err))
}

app.listen(3000, () => {
	saveGasStationDataToDatabase(gasStationDataUrl)
})