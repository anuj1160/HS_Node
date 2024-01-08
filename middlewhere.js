const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());
app.post("/heatlh-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  console.log(__dirname);
  const len = kidneys.length;
  res.send("You have" + len + " kidneys");
});

app.use(function (err, req, res, next) {
  res.json({
    msg: "Sorry something went wrong",
  });
});
app.listen(3000);
