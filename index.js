const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello From Njr");
});

app.listen(3000, () => {
  console.log("server running on port 3000..");
});
