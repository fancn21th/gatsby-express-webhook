const express = require("express");

// Set up the express app
const app = express();

let in_process = false;

// get all todos
app.get("/api/v1/todos", (req, res) => {
  if (in_process) {
    res.status(500).send({
      success: "false",
      message: "todos retrieved successfully",
    });
  }
  res.status(200).send({
    success: "true",
    message: "todos retrieved successfully",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
