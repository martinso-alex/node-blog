const express = require("express");
const db = require("../database");

const app = express();

app.get("*", async (req, res) => {
  const articles = await db.select().from('articles');
  const authors = await db.select().from('authors');
  const users = await db.select().from('users');

  const agregate = {
    users: users,
    authors: authors,
    articles: articles,
  };

	res.json(agregate);
});

app.listen(process.env.PORT || "8080");
