const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Root route hit");
  res.send("WORKING PERFECTLY");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("TEST SERVER RUNNING");
});