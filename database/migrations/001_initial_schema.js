exports.up = (knex) => {
	return knex.schema
		.createTable("authors", (table) => {
			table.increments("id").primary();

			table.string("name");
			table.string("picture");
		})
		.createTable("users", (table) => {
			table.increments("id").primary();

			table.string("email");
			table.string("password");
			table.string("role");
		})
		.createTable("articles", (table) => {
			table.increments("id").primary();

			table.string("category");
			table.string("title");
			table.string("summary");
			table.string("firstParagraph");
			table.string("body");

			table
				.integer("authorId")
				.unsigned()
				.references("id")
				.inTable("authors")
				.onDelete("SET NULL")
				.index();
		});
};

exports.down = (knex) => {
	return knex.schema
		.dropTableIfExists("articles")
		.dropTableIfExists("authors")
		.dropTableIfExists("users");
};
