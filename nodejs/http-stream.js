const http = require("http");
const fs = require("fs");
// stream pentru fisiere mari
const server = http.createServer((req, res) => {
  const fileSteam = fs.createReadStream("content/newFile", "utf8");
  fileSteam.on("open", () => {
    fileSteam.pipe(res);
  });
  fileSteam.on("error", (err) => {
    return res.end(err);
  });
});
server.listen(5000);
