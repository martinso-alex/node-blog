require("dotenv").config();

const express = require("express");
const app = express();

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerConfig = require("../swagger.json");

const specs = swaggerJsdoc(swaggerConfig);
app.use(
	"/api/docs",
	swaggerUi.serve,
	swaggerUi.setup(specs, { explorer: true })
);

const knex = require("../database/knex");
const { Model } = require("objection");
Model.knex(knex);

require("./middlewares/auth-strategy");

app.use(express.json());

const routes = require("./routes");
routes(app);

app.listen(process.env.PORT || "8080");

module.exports = app;
