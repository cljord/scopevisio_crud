const db = require("../config/config.js");

module.exports = {
  create(id, address, x, y) {
    return db.none(`insert into gasstations values ($1, $2, $3, $4);`, [
      id,
      address,
      x,
      y,
    ]);
  },
  getAll() {
    return db.any("select * from gasstations;");
  },
  getById(id) {
    return db.any(`select * from gasstations where id = $1;`, [id]);
  },
  update(id, address, x, y) {
    return db.none(
      `update gasstations
              set
                  address = coalesce($2, address),
                  x = coalesce($3, x),
                  y = coalesce($4, y)
              where
                  id = $1;`,
      [id, address, x, y],
    );
  },
  delete(id) {
    return db.none(`delete from gasstations where id = $1;`, [id]);
  },
};
