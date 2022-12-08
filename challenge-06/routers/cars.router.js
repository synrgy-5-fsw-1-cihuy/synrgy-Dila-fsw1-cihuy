'use strict';
/** 
 *  @swagger
 *  components:
 *      schemas:
 *          Car:
 *              type: object
 *              required:
 *                  - name
 *                  - rentPerDay
 *                  - capacity
 *                  - image
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the car.
 *                  name:
 *                      type: string
 *                      description: The name of your car.
 *                  rentPerDay:
 *                      type: integer
 *                      description: Rent cost per day of your car.
 *                  capacity:
 *                      type: integer
 *                      description: The capacity of your car.
 *                  image:
 *                      type: string
 *                      description: The image url of your car.
 *                  createdAt:
 *                      type: integer
 *                      format: timestamptz
 *                      description: The date of the record creation.
 *                  updatedAt:
 *                      type: integer
 *                      format: timestamptz
 *                      description: The date of the record update.
 */

const express = require('express');
const router = express.Router();

const carsController = require('../controllers/cars.controller');
const carsMiddleware = require('../middleware/auth_token');

/**
 *  @swagger
 *  /cars:
 *      get:
 *          description: Returns all cars from the system
 *          tags: [Cars]
 *          responses:
 *              '200':
 *                  description: Cars list
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Car'
 */

router.get('/', carsController.getAll)

/**
 *  @swagger
 *  /cars/{id}:
 *      get:
 *          description: Returns one car from the system
 *          tags: [Cars]
 *          parameters:
 *              - name: id
 *                in: path
 *                description: show car by id.
 *                required: true
 *          responses:
 *              '200':
 *                  description: Car object
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Car'
 */
router.get('/:id', carsController.getOne)

/**
 *  @swagger
 *  /cars:
 *      post:
 *          description: Insert one car to the system by authorized user
 *          tags: [Cars]
 *          requestBody:
 *              required: true
 *              content:
 *                  'multipart/form-data':
 *                      schema:
 *                          $ref: '#/components/schemas/Car'
 *                      examples:
 *                          bugatti:
 *                              summary: Bugatti Veyron Car.
 *                              value:
 *                                  name: Mobil A
 *                                  rentPerDay: 300000
 *                                  capacity: 4
 *                                  image: 
 *          responses:
 *              '200':
 *                  description: Car object inserted
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Car'
 */
router.post('/', carsMiddleware.checkUser('admin'), carsController.insertOne)

/**
 *  @swagger
 *  /cars:
 *      put:
 *          description: update one car's all attributes to the system by authorized user
 *          tags: [Cars]
 *          requestBody:
 *              required: true
 *              content:
 *                  'multipart/form-data':
 *                      schema:
 *                          $ref: '#/components/schemas/Car'
 *                      examples:
 *                          bugatti:
 *                              summary: Bugatti Veyron Car.
 *                              value:
 *                                  name: Mobil YZ
 *                                  rentPerDay: 400000
 *                                  capacity: 5
 *                                  image: 
 *          responses:
 *              '200':
 *                  description: Car object inserted
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Car'
 */
router.put('/:id', carsMiddleware.checkUser('admin'), carsController.updateFull)

/**
 *  @swagger
 *  /cars:
 *      put:
 *          description: update one car's attributes to the system by authorized user
 *          tags: [Cars]
 *          requestBody:
 *              required: true
 *              content:
 *                  'multipart/form-data':
 *                      schema:
 *                          $ref: '#/components/schemas/Car'
 *                      examples:
 *                          bugatti:
 *                              summary: Bugatti Veyron Car.
 *                              value:
 *                                  name: Mobil XYZ
 *                                  rentPerDay: 400000
 *                                  capacity: 4
 *                                  image: 
 *          responses:
 *              '200':
 *                  description: Car object inserted
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Car'
 */
router.patch('/:id', carsMiddleware.checkUser('admin'), carsController.updatePartially)

/**
 *  @swagger
 *  /cars/{id}:
 *      delete:
 *          description: Delete one car from the system
 *          tags: [Cars]
 *          parameters:
 *              - name: id
 *                in: path
 *                description: Id of car to get.
 *                required: true
 *          responses:
 *              '200':
 *                  description: Success Message
 *                  content:
 *                      application/json: {}
 */
router.delete('/:id', carsMiddleware.checkUser('admin'), carsController.delete)

module.exports = router;