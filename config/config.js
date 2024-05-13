// Whenever there is a database interaction within
// a route, we want to console log it
const options = {
	query: e => {
		console.log(e.query);
	}
}

const pgp = require("pg-promise")(options)

const databaseConfig = {
  "host": "localhost",
  "port": 5432,
  "database": process.env.PG_DB_NAME,
  "user": process.env.PG_USERNAME,
  "password": process.env.PG_PASSWORD
};

//const connectionString = process.env.DATABASE_URL;
const db = pgp(databaseConfig);

module.exports = db;