const os = require("os");

const user = os.userInfo();
console.log(os.uptime());

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  ip: os.networkInterfaces(),
};

console.log(currentOs);
let ip = os.networkInterfaces().Ethernet;
console.log(ip);
