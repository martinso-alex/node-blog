/**
 * @swagger
 * definitions:
 *   Article:
 *     type: object
 *     required:
 *       - title
 *       - category
 *       - summary
 *       - firstParagraph
 *       - body
 *       - authorId
 *     properties:
 *       title:
 *         type: string
 *       category:
 *         type: string
 *       summary:
 *         type: string
 *       firstParagraph:
 *         type: string
 *       body:
 *         type: string
 *       authorId:
 *         type: number
 *     example:
 *       id: 1
 *       category: "vacation"
 *       title: "Welcome to Brazil"
 *       summary: "Here we'll tell you the best beaches to go when you're around"
 *       firstParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
 *       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
 *              tempus felis ipsum, in fermentum augue iaculis non. Sed non felis
 *              non arcu condimentum sodales."
 *       authorId: 1
 *
 */
const { Router } = require("express");

const { auth, role } = require("../middlewares");

const { ArticlesController } = require("../controllers");

const router = Router();

/**
 *  @swagger
 *  /api/admin/articles:
 *    get:
 *      summary: Returns a list with all articles.
 *      tags:
 *        - Article
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/definitions/Article'
 */
router.get(
	"/admin/articles",
	[auth.bearer, role.admin],
	ArticlesController.list
);

/**
 *  @swagger
 *  /api/admin/articles/:id:
 *    get:
 *      summary: Return the article with the given id.
 *      tags:
 *        - Article
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: articles's id
 *          schema:
 *            type: number
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/Article'
 */
router.get(
	"/admin/articles/:id",
	[auth.bearer, role.admin],
	ArticlesController.findById
);

/**
 *  @swagger
 *  /api/admin/articles:
 *    post:
 *      summary: Creates an article.
 *      tags:
 *        - Article
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: body
 *          name: article
 *          description: article's object
 *          schema:
 *            $ref: '#/definitions/Article'
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/Article'
 */
router.post(
	"/admin/articles",
	[auth.bearer, role.admin],
	ArticlesController.create
);

/**
 *  @swagger
 *  /api/admin/articles/:id:
 *    put:
 *      summary: Updates an article.
 *      tags:
 *        - Article
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: article's id
 *          schema:
 *            type: number
 *        - in: body
 *          name: article
 *          description: article's object
 *          schema:
 *            $ref: '#/definitions/Article'
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/Article'
 */
router.put(
	"/admin/articles/:id",
	[auth.bearer, role.admin],
	ArticlesController.update
);

/**
 *  @swagger
 *  /api/admin/articles/:id:
 *    delete:
 *      summary: Deletes an article.
 *      tags:
 *        - Article
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: article's id
 *          schema:
 *            type: number
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/Article'
 */
router.delete(
	"/admin/articles/:id",
	[auth.bearer, role.admin],
	ArticlesController.delete
);

/**
 *  @swagger
 *  /api/articles:
 *    get:
 *      summary: Returns a list with all articles, by category
 *      tags:
 *        - Article
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/Article'
 */
router.get("/articles", ArticlesController.categorySlug);

/**
 *  @swagger
 *  /api/articles/:id:
 *    get:
 *      summary: Return the article with the given id.
 *      tags:
 *        - Article
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: articles's id
 *          schema:
 *            type: number
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/Article'
 */
router.get(
	"/articles/:id",
	auth.optionalBearer,
	ArticlesController.findByIdOptionalBearer
);

module.exports = router;
