const express = require("express");
// Set up the express app
const app = express();
const pack = require("./pack");
// let in_process = false;

app.post("/api/gatsbyBuild", async (req, res) => {
  const result = await pack();
  res.status(200).send({
    message: `Build ${result ? "success" : "fail"}`,
    success: result ? true : false,
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
