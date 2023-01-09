const express = require("express");
const app = express();
let connection = require("./sqlConnect");
let { people } = require("./data");

app.get("/", (req, res) => {
  let sql = `SELECT * FROM products.products`;
  connection.query(sql, (err, results) => {
    res.send(results);
  });
});
app.listen(5000, () => {
  console.log("The server is runnin on port 5000.....");
});
