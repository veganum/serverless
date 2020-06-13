const express = require("express");
const mongoose = require("mongoose");
const app = express();

//Variable de entorno
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("*", (req, res) => {
  res.send("Hola mundo");
});

module.exports = app;
