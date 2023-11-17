const { Router } = require("express");

const PlatesController = require("../controllers/PlatesController");

const platesController = new PlatesController();

const platesRoutes = Router();

platesRoutes.post("/", platesController.create);
platesRoutes.get("/:id", platesController.show);

module.exports = platesRoutes;