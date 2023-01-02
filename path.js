const path = require("path");

const file = path.join("/content", "subfolder", "text.txt");
console.log(file);

const base = path.basename(file);
console.log(base);

const absolute = path.resolve(__dirname);
console.log(absolute);
