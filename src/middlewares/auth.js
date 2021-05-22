const passport = require("passport");

module.exports = {
	local: (req, res, next) => {
		passport.authenticate("local", { session: false }, (error, user, info) => {
			if (error && error.name === "InvalidArgumentError")
				return res.status(401).json({ error: error.message });

			if (error) return res.status(500).json({ error: error.message });

			if (!user) return res.status(401).json();

			req.user = user;
			next();
		})(req, res, next);
	},
};