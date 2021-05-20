const { Model } = require("objection");

class Author extends Model {
	static get tableName() {
		return "authors";
	}

	static get jsonSchema() {
		return {
			type: "object",
			required: ["name"],

			properties: {
				id: { type: "integer" },
				name: { type: "string" },
				picture: { type: "string" },
			},
		};
	}

	static get relationMappings() {
		const Article = require("./Article");

		return {
			articles: {
				relation: Model.HasManyRelation,
				modelClass: Article,
				join: {
					from: "authors.id",
					to: "articles.authorId",
				},
			},
		};
	}
}

module.exports = Author;
