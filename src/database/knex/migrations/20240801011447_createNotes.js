
exports.up = knex => knex.schema.createTable("notes", table => {
  table.increments("id");
  table.text("title");
  table.text("description");
  /*Chave estrangeira - pega id da tabela users */
  table.integer("user_id").references("id").inTable("users")

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());

});
  


exports.down = knex => knexx.schema.dropTable("notes");
