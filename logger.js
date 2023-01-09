const os = require("os");
const logger = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const hostname = os.hostname();
  console.log(url, method, hostname);
  next();
};
module.exports = logger;
