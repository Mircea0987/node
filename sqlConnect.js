const mysql = require("mysql2");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ybUsH9FUpB7m3uA",
  database: "products",
});
module.exports = connection;
