const express = require("express");
const Meals = require("../models/Meals");

const router = express.Router();

/*
Buscar todos
Exec es para ejecutar la query
Then es para enviar la promesa
Status para indicar el codigo de la peticion
*/

//Listar
router.get("/", (req, res) => {
  Meals.find()
    .exec()
    .then((x) => res.status(200).send(x));
});
//Buscar un elemento particular
router.get("/:id", (req, res) => {
  Meals.findById(req.params.id)
    .exec()
    .then((x) => res.status(200).send(x));
});
//Crear
router.post("/", (req, res) => {
  Meals.create(req.body).then((x) => res.status(201).send(x));
});
//Remplazar
router.put("/:id", (req, res) => {
  Meals.findOneAndUpdate(req.params.id, req.body).then(() =>
    res.sendStatus(204)
  );
});
//Borrar
router.delete("/:id", (req, res) => {
  Meals.findOneAndDelete(req.params.id).exec.then(() => res.sendStatus(204));
});

module.exports = router;
