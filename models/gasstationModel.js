const db = require("../config/config.js");

// Use this empty object for exporting the functions below
const GasStation = {};

GasStation.create = (id, address, x, y) => {
  return db.none(
    `insert into gasstations values (${id}, '${address}', ${x}, ${y});`,
  );
};

GasStation.getAll = () => {
  return db.any("select * from gasstations;");
};

GasStation.getById = (id) => {
  return db.any(`select * from gasstations where id = ${id};`);
};

GasStation.delete = (id) => {
  return db.none(`delete from gasstations where id = ${id};`);
};

module.exports = GasStation;
