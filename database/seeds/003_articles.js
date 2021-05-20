exports.seed = (knex) => {
	return knex("articles").del()
		.then(() => knex("articles").insert([
      {
        id: 1,
        title: "teste",
        category: "teste",
        summary: "teste",
        firstParagraph: "teste",
        body: "testetestetestetestetestetesteteste",
        authorId: 1,
      },
      {
        id: 2,
        title: "teste 2",
        category: "teste",
        summary: "teste",
        firstParagraph: "teste",
        body: "testetestetestetestetestetesteteste",
        authorId: 1,
      },
      {
        id: 3,
        title: "teste 3",
        category: "teste",
        summary: "teste",
        firstParagraph: "teste",
        body: "testetestetestetestetestetesteteste",
        authorId: 3,
      },
    ])
  );
};
