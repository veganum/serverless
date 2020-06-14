const express = require("express");

const router = express.Router();

//Listar
router.get("/", (req, res) => {
  res.send("hola soy orders");
});
//Buscar un elemento en particular
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});
//Crear
router.post("/", (req, res) => {
  res.send("soy post");
});
//Remplazar
router.put("/:id", (req, res) => {
  res.send("soy put");
});
//Borrar
router.delete("/:id", (req, res) => {
  res.send("soy delete");
});

module.exports = router;
