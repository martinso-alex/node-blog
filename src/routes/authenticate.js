/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - email
 *       - password
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 *     example:
 *       email: test@test.com
 *       password: 1234
 *
 *   Access-token:
 *     type: object
 *     example:
 *       accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoxM30sImlhdCI6MTYyMTgyMzMxOSwiZXhwIjoxNjIxOTA5NzE5fQ.o9L3r7cR_6j_Epvg5CKJbG0yk7p1lN-7jOcI59C_mEo
 *
 */
const { Router } = require("express");

const { auth } = require("../middlewares");

const { AuthenticateController } = require("../controllers");

const router = Router();

/**
 *  @swagger
 *  /api/sign-up:
 *    post:
 *      summary: Creates the user for a given email.
 *      tags:
 *        - Authenticate
 *      parameters:
 *        - in: body
 *          name: user
 *          description: user to be created
 *          schema:
 *            $ref: '#/definitions/User'
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/User'
 */
router.post("/sign-up", AuthenticateController.signUp);

/**
 *  @swagger
 *  /api/login:
 *    post:
 *      summary: Tries to login with a given user.
 *      tags:
 *        - Authenticate
 *      parameters:
 *        - in: body
 *          name: user
 *          description: user to login
 *          schema:
 *            $ref: '#/definitions/User'
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/Access-token'
 */
router.post("/login", auth.local, AuthenticateController.login);

module.exports = router;
