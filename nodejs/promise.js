const { readFile, writeFile } = require("fs"); // poti sa folosesti .promise
const util = require("util");

const readFileUtil = util.promisify(readFile);
const writeFileUtil = util.promisify(writeFile);

const start = async () => {
  try {
    const firstFile = await readFile("content/first.txt", "utf8");
    console.log(firstFile);
    await writeFile("content/newFile", `This is the data: ${firstFile}`, {
      flag: "a",
    });
  } catch (err) {
    console.log(err);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, res) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(res);
//     });
//   });
// };
