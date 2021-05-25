/**
 * @swagger
 * definitions:
 *   Author:
 *     type: object
 *     required:
 *       - name
 *       - picture
 *     properties:
 *       name:
 *         type: string
 *       picture:
 *         type: string
 *     example:
 *       name: Jhon Doe
 *       picture: test.com/picture
 *
 */
const { Router } = require("express");

const { auth, role } = require("../middlewares");

const { AuthorsController } = require("../controllers");

const router = Router();

/**
 *  @swagger
 *  /api/admin/authors:
 *    get:
 *      summary: Returns a list with all authors.
 *      tags:
 *        - Author
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/Author'
 */
router.get("/admin/authors", [auth.bearer, role.admin], AuthorsController.list);

/**
 *  @swagger
 *  /api/admin/authors/:id:
 *    get:
 *      summary: Return the author with the given id.
 *      tags:
 *        - Author
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: author's id
 *          schema:
 *            type: number
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/Author'
 */
router.get(
	"/admin/authors/:id",
	[auth.bearer, role.admin],
	AuthorsController.findById
);

/**
 *  @swagger
 *  /api/admin/authors:
 *    post:
 *      summary: Creates an author.
 *      tags:
 *        - Author
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: body
 *          name: author
 *          description: author's object
 *          schema:
 *            $ref: '#/definitions/Author'
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/Author'
 */
router.post(
	"/admin/authors",
	[auth.bearer, role.admin],
	AuthorsController.create
);

/**
 *  @swagger
 *  /api/admin/authors/:id:
 *    put:
 *      summary: Updates an author.
 *      tags:
 *        - Author
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: author's id
 *          schema:
 *            type: number
 *        - in: body
 *          name: author
 *          description: author's object
 *          schema:
 *            $ref: '#/definitions/Author'
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/Author'
 */
router.put(
	"/admin/authors/:id",
	[auth.bearer, role.admin],
	AuthorsController.update
);

/**
 *  @swagger
 *  /api/admin/authors/:id:
 *    delete:
 *      summary: Deletes an author.
 *      tags:
 *        - Author
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: author's id
 *          schema:
 *            type: number
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/Author'
 */
router.delete(
	"/admin/authors/:id",
	[auth.bearer, role.admin],
	AuthorsController.delete
);

module.exports = router;
