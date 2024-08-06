
exports.up = knex => knex.schema.createTable("tags", table => {
  table.increments("id");
  table.text("name").notNullable();
  /*Chave estrangeira - pega id da tabela users */
  table.integer("user_id").references("id").inTable("users");
  /*Chave estrangeira - pega id da tabela notes + apagar tag em caso de delete na tabela notes */
  table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE")

});
  


exports.down = knex => knexx.schema.dropTable("tags");
