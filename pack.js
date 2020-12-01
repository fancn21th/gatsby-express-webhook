const { execFile } = require("child_process");
const path = require("path");
const createPackLog = require("./log");

function createPackPromise() {
  return new Promise((resolve, reject) => {
    const sh = execFile(
      "npm",
      ["run", "build"],
      {
        cwd: path.resolve(__dirname, "../cflp-spike-client"),
      },
      (error, stdout, stderr) => {
        createPackLog(path.resolve(__dirname, "./log.txt"), stdout);
        if (error) {
          reject(false);
          return;
        }
        resolve(true);
      }
    );
  })
    .catch((error) => {
      throw new Error(error);
    })
    .catch((error) => {
      console.error(error);
    });
}
module.exports = async function () {
  return await createPackPromise();
};
