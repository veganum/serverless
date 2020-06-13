const express = require("express");
const mongoose = require("mongoose");
const app = express();

//Variable de entorno
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hola soy la raiz");
});

app.use("/plates", router);

module.exports = app;
