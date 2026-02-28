const express = require("express");
const http = require("http");

const app = express();

app.get("/", (req, res) => {
  console.log("Route hit");
  res.send("WORKING");
});

const server = http.createServer(app);

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});