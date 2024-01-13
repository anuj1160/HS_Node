const express = require("express");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://ajsmarty2001:anuj123@cluster0.rwqnyel.mongodb.net/usernewapp?retryWrites=true&w=majority"
);
const app = express();
app.use(express.json());

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const existUser = await User.findOne({ email: username });

  if (existUser) {
    return res.status(400).send("Username already in use");
  }
  const user = new User({
    name: name,
    email: username,
    password: password,
  });
  user.save();
  res.json({
    msg: "User created Successfully",
  });
});

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     // return a list of users other than this username from the database
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

app.listen(3000);
