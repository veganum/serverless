const express = require("express");
const mongoose = require("mongoose");
const app = express();

//Variable de entorno
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Users = mongoose.model("User", new mongoose.Schema({ name: String }));

Users.create({ name: "provando cosas" });

app.get("*", (req, res) => {
  Users.find().then((x) => res.send(x));
});

module.exports = app;
