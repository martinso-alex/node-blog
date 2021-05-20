const knex = require("./knex");

knex.migrate.latest()
  .then(() => knex.seed.run());

module.exports = knex;