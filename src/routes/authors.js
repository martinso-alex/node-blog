const { Router } = require("express");

const { auth, role } = require("../middlewares");

const { AuthorsController } = require("../controllers");

const router = Router();

router.get("/admin/authors", [auth.bearer, role.admin], AuthorsController.list);

router.get(
	"/admin/authors/:id",
	[auth.bearer, role.admin],
	AuthorsController.findById
);

router.post(
	"/admin/authors",
	[auth.bearer, role.admin],
	AuthorsController.create
);

router.put(
	"/admin/authors/:id",
	[auth.bearer, role.admin],
	AuthorsController.update
);

router.delete(
	"/admin/authors/:id",
	[auth.bearer, role.admin],
	AuthorsController.delete
);

module.exports = router;
