'use strict';

/** 
 *  @swagger
 *  components:
 *      schemas:
 *          User:
 *              type: object
 *              required:
 *                  - email
 *                  - password
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the user.
 *                  email:
 *                      type: string
 *                      description: The email of your user.
 *                  password:
 *                      type: string
 *                      description: The password of your user.
 *                  role:
 *                      type: string
 *                      description: The role of your user.
 *                  createdAt:
 *                      type: integer
 *                      format: timestamptz
 *                      description: The date of the record creation.
 *                  updatedAt:
 *                      type: integer
 *                      format: timestamptz
 *                      description: The date of the record modification.
 */

const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/users.controller');
const userMiddleware = require('../middleware/auth_token')

/**
 *  @swagger
 *  /users/register/admin:
 *      post:
 *          description:  User with admin role registration
 *          tags: [Users]
 *          requestBody:
 *              required: true
 *              content:
 *                  'multipart/form-data':
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *                      examples:
 *                          dila:
 *                              summary: User Admin1
 *                              value:
 *                                  email: admin1@email.com
 *                                  password: passAdmin1
 *          responses:
 *              '200':
 *                  description: JSON Web Token
 *                  content:
 *                      application/json: {}
 */
router.post('/register/admin', userMiddleware.checkUser('superadmin'), userControllers.registerUserAdmin);

/**
 *  @swagger
 *  /users/register/member:
 *      post:
 *          description: User with member role registration
 *          tags: [Users]
 *          requestBody:
 *              required: true
 *              content:
 *                  'multipart/form-data':
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *                      examples:
 *                          dila:
 *                              summary: User Member1
 *                              value:
 *                                  email: member1@email.com
 *                                  password: passMember1
 *          responses:
 *              '200':
 *                  description: JSON Web Token
 *                  content:
 *                      application/json: {}
 */
router.post('/register/member', userControllers.registerUserMember);

/**
 *  @swagger
 *  /users/login:
 *      post:
 *          description: Login user to the system
 *          tags: [Users]
 *          requestBody:
 *              required: true
 *              content:
 *                  'multipart/form-data':
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *                      examples:
 *                          Admin1:
 *                              summary: User Admin1
 *                              value:
 *                                  email: admin1@email.com
 *                                  password: passAdmin1
 *          responses:
 *              '200':
 *                  description: JSON Web Token
 *                  content:
 *                      application/json: {}
 */
router.post('/login', userControllers.loginUser);

/**
 *  @swagger
 *  /users/current-user:
 *      get:
 *          description: Returns current user token.
 *          tags: [Users]
 *          responses:
 *              '200':
 *                  description: 
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/User'
 */
router.get('/current-user', userMiddleware.checkUser(), userControllers.activeUser);

module.exports = router;