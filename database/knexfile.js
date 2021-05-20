module.exports = {
	development: {
		client: "pg",
		connection: {
			host: "db",
			database: "challenge",
			user: "postgres",
			password: "postgres",
		},
		migrations: {
			directory: "./database/migrations",
			tableName: "knex_migrations",
		},
		seeds: {
			directory: "./database/seeds",
		},
	},

	staging: {
		client: "pg",
		connection: {
      host: "db",
			database: "my_db",
			user: "username",
			password: "password",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},

	production: {
		client: "pg",
		connection: {
      host: "db",
			database: "my_db",
			user: "username",
			password: "password",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},
};
