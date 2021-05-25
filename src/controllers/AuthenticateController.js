const { jwt } = require("../../utils/tokens");
const { User } = require("../models");
const bcrypt = require("bcrypt");

class AuthenticateController {
	static async signUp(req, res) {
		const { email, password, role } = req.body;

		try {
			const passwordHash = await bcrypt.hash(password, 12);
			const user = await User.query().insert({
				email,
				password: passwordHash,
				role: role || "user",
			});

			res.status(201).json(user);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	static async login(req, res) {
		const id = req.user.id;
		const accessToken = jwt.create({ id });

		res.json({ accessToken });
	}
}

module.exports = AuthenticateController;
