const { Router } = require("express");

const { auth, role } = require("../middlewares");

const { AuthorsController } = require("../controllers");

const router = Router();

router.use("/admin/authors", [
	router.get("/", [auth.bearer, role.admin], AuthorsController.list),
	router.get("/:id", [auth.bearer, role.admin], AuthorsController.findById),
	router.post("/", [auth.bearer, role.admin], AuthorsController.create),
	router.put("/:id", [auth.bearer, role.admin], AuthorsController.update),
	router.delete("/:id", [auth.bearer, role.admin], AuthorsController.delete),
]);

module.exports = router;
