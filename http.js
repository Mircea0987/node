const http = require("http");

const server = http.createServer((req, res) => {
  //incoming request responds sending back
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("here is about page");
  }
  res.end(
    `<h1>Ooops!</h1>
    <p>Wrong page!</p>
    <a href ="/">back home</a>`
  );
});
server.listen(5000);
