const express = require("express");
// Set up the express app
const app = express();
const pack = require("./pack");
app.post("/api/gatsbyBuild", async (req, res) => {
  if (global.packInProcess) {
    res.status(403).send({
      message: "Reject build,there are currently ongoing build projects",
      success: false,
    });
    return
  }
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
