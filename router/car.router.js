const express = require('express');

const router = express.Router();
const carController = require('../controller/car.controller');

// Create

router.post("/cars", carController.createCarHandler);
// get all car

router.get("/cars", carController.getAllCarHandler);

// get car by id

router.get("/cars/:id", carController.getCarByIdHandler);

module.exports = router;