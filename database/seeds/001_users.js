exports.seed = (knex) => {
  return knex("users").del()
    .then(() => knex("users").insert([
      {
        email: 'test@test.com',
        password: '1234',
        role: 'admin'
      },
      {
        email: 'test2@test.com',
        password: '1234',
        role: 'user'
      },
      {
        email: 'test3@test.com',
        password: '1234',
        role: 'user'
      },
    ]));
};