exports.seed = (knex) => {
	return knex("authors").del()
		.then(() => knex("authors").insert([
      {
        id: 1,
        name: "Teste da Silva",
        picture: "http://site.com",
      },
      {
        id: 2,
        name: "Teste da Silva 2",
        picture: "http://site.com",
      },
      {
        id: 3,
        name: "Teste da Silva 3",
        picture: "http://site.com",
      },
    ])
  );
};
