const { Router } = require("express");

const { auth, role } = require("../middlewares");

const { ArticlesController } = require("../controllers");

const router = Router();

router.get(
	"/admin/articles",
	[auth.bearer, role.admin],
	ArticlesController.list
);

router.get(
	"/admin/articles/:id",
	[auth.bearer, role.admin],
	ArticlesController.findById
);

router.post(
	"/admin/articles",
	[auth.bearer, role.admin],
	ArticlesController.create
);

router.put(
	"/admin/articles/:id",
	[auth.bearer, role.admin],
	ArticlesController.update
);

router.delete(
	"/admin/articles/:id",
	[auth.bearer, role.admin],
	ArticlesController.delete
);

router.get("/articles", ArticlesController.categorySlug);

router.get(
	"/articles/:id",
	auth.optionalBearer,
	ArticlesController.findByIdOptionalBearer
);

module.exports = router;
