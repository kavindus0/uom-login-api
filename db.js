var sqlite3 = require("sqlite3").verbose();
var md5 = require("md5");

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("=======================================");
    console.log("== Connected to the SQLite database. ==");
    console.log("=======================================");
    db.run(
      "CREATE TABLE IF NOT EXISTS customer (customerid INTEGER PRIMARY KEY , name TEXT, address TEXT,email TEXT, dateOfBirth TEXT, gender TEXT, age INTEGER,cardHolderName TEXT, CardHoldNo INTEGER, exp TEXT,cvv INTEGER, timeStamp TEXT)",
      (err) => {
        if (err) {
          console.error(err.message);
        }
      }
    );
    console.log("=======================================");
    console.log("======  Database Already Created ======");
    console.log("=======================================");
  }
});

module.exports = db;
