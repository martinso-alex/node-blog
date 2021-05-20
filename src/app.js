const express = require("express");
const app = express();

const knex = require("../database/knex");
const { Model } = require("objection");
Model.knex(knex);

app.use(express.json());

const routes = require("./routes");
routes(app);

app.get("/", async (req, res) => res.json("Hello, world!"));

app.listen(process.env.PORT || "8080");

module.exports = app;
