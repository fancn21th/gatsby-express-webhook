const express = require("express");
// Set up the express app
const app = express();
const { execFile } = require("child_process");
const path = require("path");
// const pack = require("./build");
// let in_process = false;

app.post("/api/gatsbyBuild", async (req, res) => {
  // const result = await pack();
  // console.log(result);
  // if (!result.success) {
  //   res.status(500).send(result);
  //   return;
  // }
  // res.status(200).send(result);
  const sh = execFile(
    "gatsby",
    ["build"],
    {
      cwd: path.resolve(__dirname, "../cflp-spike-client"),
    },
    (error, stdout, stderr) => {
      if (error) {
        res.status(500).send({ message: "Build fail", success: false });
        console.log("build error:", error);
        return;
      }
      res.status(200).send({ message: "Build success", success: true });
      console.log("build success:", stdout);
    }
  );
  sh.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
