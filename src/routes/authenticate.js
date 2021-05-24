const { Router } = require("express");

const { auth } = require("../middlewares");

const { AuthenticateController } = require("../controllers");

const router = Router();

router.post("/sign-up", AuthenticateController.signIn);

router.post("/login", auth.local, AuthenticateController.login);

module.exports = router;
