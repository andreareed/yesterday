exports.up = async knex => {
  await knex.schema.alterTable('users', table => {
    table.timestamp('updated_at');
    table.string('github_token');
  });
};

exports.down = async knex => {
  await knex.schema.alterTable('users', table => {
    table.dropColumn('github_token');
  });
};
