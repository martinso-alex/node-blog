require("dotenv").config();

const express = require("express");
const app = express();

const knex = require("../database/knex");
const { Model } = require("objection");
Model.knex(knex);

require("./middlewares/auth-strategy");

app.use(express.json());

const routes = require("./routes");
routes(app);

app.listen(process.env.PORT || "8080");

module.exports = app;
