const knex = require("./knex");

const migrate = async () => {
	return await knex.migrate
		.latest()
		.then(() => knex.seed.run())
		.then(() => "Dados criados com sucesso.")
		.catch((error) => error.message);
};

module.exports = {
	knex,
	migrate,
};
