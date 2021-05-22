const { Router } = require("express");
const AuthenticateController = require("../controllers/authenticateController");

const auth = require("../middlewares/auth");

const router = Router();

router.post("/sign-in", AuthenticateController.signIn);

router.post("/login", auth.local, AuthenticateController.login);

module.exports = router;
