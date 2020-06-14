const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const meals = require("./routes/meals");
const orders = require("./routes/orders");
const app = express();

app.use(bodyParser.json());

//Variable de entorno
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/meals", meals);
app.use("/api/orders", orders);

module.exports = app;
