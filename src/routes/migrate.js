const { Router } = require("express");
const { migrate } = require("../../database");
const { Article, Author, User } = require("../models");

const router = Router();

router.get("/migrate", async (req, res) => {
	const result = await migrate();

	res.json({ result });
});

router.get("/database-dump", async (req, res) => {
	const agregate = {
		model_users: await User.query().select().limit(1),
		model_authors: await Author.query().select().limit(1),
		model_articles: await Article.query().withGraphFetched("author").limit(1),
	};

	res.json(agregate);
});

router.get("/dump-users", async (req, res) => {
	const users = await User.query().select();

	res.json(users);
});

module.exports = router;
