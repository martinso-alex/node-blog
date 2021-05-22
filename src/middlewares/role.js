module.exports = {
	admin: (req, res, next) => {
		if (req.user.role !== "admin")
			res.status(403).json("Insuficient privileges.");
		else next();
	},
};
