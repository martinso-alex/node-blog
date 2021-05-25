exports.seed = (knex) => {
	return knex("users")
		.del()
		.then(() =>
			knex("users").insert([
				{
					email: "test@test.com",
					password:
						"$2b$12$VQHYXjuW1oaRg2fFRxpSpOdCZfALrQ.KNKIshKi2fRzPt/owp/NfG",
					role: "admin",
				},
				{
					email: "test2@test.com",
					password:
						"$2b$12$VQHYXjuW1oaRg2fFRxpSpOdCZfALrQ.KNKIshKi2fRzPt/owp/NfG",
					role: "user",
				},
				{
					email: "test3@test.com",
					password:
						"$2b$12$VQHYXjuW1oaRg2fFRxpSpOdCZfALrQ.KNKIshKi2fRzPt/owp/NfG",
					role: "user",
				},
			])
		);
};
