const { Model } = require("objection");

class User extends Model {
	static get tableName() {
		return "users";
	}

	static get jsonSchema() {
		return {
			type: "object",
			required: ["email", "password", "role"],

			properties: {
				id: { type: "integer" },
				email: { type: "string" },
				password: { type: "string" },
				role: { type: "string" },
			},
		};
	}
}

module.exports = User;
