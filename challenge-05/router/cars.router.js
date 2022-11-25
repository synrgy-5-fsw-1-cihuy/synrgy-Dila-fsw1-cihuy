'use strict';

const express = require('express');
const router = express.Router();

const carsController = require('../controller/cars.controller');

router.get('/', carsController.getAll)

router.get('/:id', carsController.getOne)

router.post('/', carsController.insertOne)

router.put('/:id', carsController.updateFull)

router.patch('/:id', carsController.updatePartially)

router.delete('/:id', carsController.delete)

module.exports = router;