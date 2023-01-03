const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("content/first.txt", "utf8");
const second = readFileSync("content/subfolder/text.txt", "utf8");
console.log(first, second);
const newFile = writeFileSync(
  "content/subfolder/new-file.txt",
  "this is the new file created by writeFileSync",
  { flag: "d" }
);
