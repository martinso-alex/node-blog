exports.seed = (knex) => {
	return knex("authors").del()
		.then(() => knex("authors").insert([
      {
        name: "Teste da Silva",
        picture: "http://site.com",
      },
      {
        name: "Teste da Silva 2",
        picture: "http://site.com",
      },
      {
        name: "Teste da Silva 3",
        picture: "http://site.com",
      },
    ])
  );
};
