const { Router } = require("express");

const auth = require("../middlewares/auth");
const role = require("../middlewares/role");

const router = Router();

router.use("/admin/authors", [
	router.get("/", [auth.bearer, role.admin], (req, res) =>
		res.json("/authors test")
	),
]);

module.exports = router;
