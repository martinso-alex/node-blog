const jwt = require("jsonwebtoken");

function createJWTToken(payload, expiresIn) {
	return jwt.sign({ payload }, process.env.CHAVE_JWT, { expiresIn });
}

function verifyJWTToken(token) {
	return jwt.verify(token, process.env.CHAVE_JWT);
}

module.exports = {
	jwt: {
		expiresIn: "1d",
		create(payload) {
			return createJWTToken(payload, this.expiresIn);
		},
		contents(token) {
			return verifyJWTToken(token);
		},
	},
};
