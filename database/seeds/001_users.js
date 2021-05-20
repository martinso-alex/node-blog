exports.seed = (knex) => {
  return knex("users").del()
    .then(() => knex("users").insert([
      {
        id: 1,
        email: 'test@test.com',
        password: '1234',
        role: 'admin'
      },
      {
        id: 2,
        email: 'test2@test.com',
        password: '1234',
        role: 'user'
      },
      {
        id: 3,
        email: 'test3@test.com',
        password: '1234',
        role: 'user'
      },
    ]));
};