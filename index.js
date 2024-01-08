const express = require("express");
const app = express();
app.use(express.json()); // middlewhere
const users = [
  {
    name: "John",
    kidenys: [
      {
        healthy: "false",
      },
    ],
  },
];
app.get("/", function (req, res) {
  const johKideney = users[0].kidenys;
  const totalKideny = johKideney.length;
  const healthKideny = johKideney.filter((kid) => {
    return kid.healthy == true;
  });
  const heltsize = healthKideny.length;
  const unheltsize = totalKideny - heltsize;
  return res.json({
    totalKideny,
    heltsize,
    unheltsize,
  });
});
app.post("/", function (req, res) {
  const healthKid = req.body.healthKid;
  users[0].kidenys.push({
    healthy: healthKid,
  });
  res.json({
    msg: "DONE!!",
  });
});
app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidenys.length; i++) {
    if (users[0].kidenys[i].healthy != true) {
      users[0].kidenys[i].healthy = true;
    }
  }
  res.json({
    msg: "DONE",
  });
});
app.delete("/", function (req, res) {
  const arr = users[0].kidenys;
  const goodKed = arr.filter((ked) => {
    return ked.healthy == true;
  });
  users[0].kidenys = goodKed;
  res.json({
    msg: "kideny deleted",
  });
});
app.listen(3000);
