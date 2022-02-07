const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const express = require("express");
const app = express();
const users = require("./routes/api/users");
const beats = require("./routes/api/beats");
const bodyParser = require('body-parser');
const User = require('./models/User')

mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

  // app.get("/", (req, res) => {
  //   const user = new User({
  //     handle: "zack",
  //     email: "zack@gmail.com",
  //     password: "123456"
  //   })
  //   user.save();
  //   res.send("Hello World!");
  // })

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use("/api/users", users);
app.use("/api/beats", beats);