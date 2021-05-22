exports.up = (knex) => {
	return knex.schema
		.createTable("authors", (table) => {
			table.increments("id").primary();

			table.string("name").notNullable();
			table.string("picture");
		})
		.createTable("users", (table) => {
			table.increments("id").primary();

			table.string("email").unique().notNullable();
			table.string("password").notNullable();
			table.string("role").notNullable();
		})
		.createTable("articles", (table) => {
			table.increments("id").primary();

			table.string("category").notNullable();
			table.string("title").notNullable();
			table.string("summary").notNullable();
			table.string("firstParagraph").notNullable();
			table.string("body").notNullable();

			table
				.integer("authorId")
				.unsigned()
				.references("id")
				.inTable("authors")
				.onDelete("SET NULL")
				.index()
        .notNullable();
		})
};

exports.down = (knex) => {
	return knex.schema
		.dropTableIfExists("articles")
		.dropTableIfExists("authors")
		.dropTableIfExists("users");
};
