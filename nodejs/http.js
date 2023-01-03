const http = require("http");

const server = http.createServer((req, res) => {
  //incoming request responds sending back
  if (req.url === "/") {
    return res.write("Welcome to our home page");
  }
  if (req.url === "/about") {
    return res.write("here is about page");
  }
  return res.write(
    `<h1>Ooops!</h1>
    <p>Wrong page!</p>
    <a href ="/">back home</a>`
  );
});
server.listen(5000);
