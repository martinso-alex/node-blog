const { Model } = require("objection");

class Article extends Model {
	static get tableName() {
		return "articles";
	}

	static get jsonSchema() {
		return {
			type: "object",
			required: [
				"title",
				"category",
				"summary",
				"firstParagraph",
				"body",
				"authorId",
			],

			properties: {
				id: { type: "integer" },
				title: { type: "string" },
				category: { type: "string" },
				summary: { type: "string" },
				firstParagraph: { type: "string" },
				body: { type: "string" },
				authorId: { type: ["integer", "null"] },
			},
		};
	}

	static get relationMappings() {
		const Author = require("./Author");

		return {
			author: {
				relation: Model.BelongsToOneRelation,
				modelClass: Author,
				join: {
					from: "articles.authorId",
					to: "authors.id",
				},
			},
		};
	}
}

module.exports = Article;
