const { readFile, writeFile } = require("fs");

readFile("content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }
  const first = result;
  readFile("content/newFile", "utf8", (err, res) => {
    if (err) {
      console.log(err);
      return null;
    }
    console.log(res);
    const second = res;
    writeFile(
      "content/subfolder/new-file.txt",
      `Here is the results for ${first}, ${second} `,
      "utf8",
      (err) => {
        if (err) {
          return null;
        }
      }
    );
  });
});
