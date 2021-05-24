const { Article } = require("../models");

class ArticlesController {
	static async list(req, res) {
		try {
			const list = await Article.query().select();

			res.status(200).json(list);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	static async findById(req, res) {
		const { id } = req.params;

		try {
			const article = await Article.query().findById(id);

			if (article) res.status(200).json(article);
			else res.status(404).json("article not found.");
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	static async create(req, res) {
		const { category, title, summary, firstParagraph, body, authorId } =
			req.body;

		try {
			const article = await Article.query().insert({
				category,
				title,
				summary,
				firstParagraph,
				body,
				authorId,
			});

			res.status(201).json(article);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	static async update(req, res) {
		const { category, title, summary, firstParagraph, body, authorId } =
			req.body;
		const { id } = req.params;

		try {
			await Article.query().findById(id).patch({
				category,
				title,
				summary,
				firstParagraph,
				body,
				authorId,
			});

			const article = await Article.query().findById(id);

			res.status(200).json(article);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	static async delete(req, res) {
		const { id } = req.params;

		try {
			await Article.query().findById(id).delete();

			res.status(204).json();
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	static async categorySlug(req, res) {
		const { category } = req.query;

		try {
			if (category) {
				const list = await Article.query()
					.withGraphFetched("author")
					.select("category", "title", "summary")
					.where({ category });

				res.status(200).json(list);
			} else {
				res.status(400).json("missing category parameter");
			}
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	static async findByIdOptionalBearer(req, res) {
		const { id } = req.params;
		const user = req.user;

		try {
			const article = await Article.query()
				.findById(id)
				.withGraphFetched("author");

			if (user && article)
				res.status(200).json({
					author: {
						name: article.author.name,
						picture: article.author.picture,
					},
					category: article.category,
					title: article.title,
					summary: article.summary,
					firstParagraph: article.firstParagraph,
					body: article.body,
				});
			else if (article)
				res.status(200).json({
					author: {
						name: article.author.name,
						picture: article.author.picture,
					},
					category: article.category,
					title: article.title,
					summary: article.summary,
					firstParagraph: article.firstParagraph,
				});
			else res.status(404).json("article not found.");
		} catch (error) {
			res.status(500).json(error.message);
		}
	}
}

module.exports = ArticlesController;
