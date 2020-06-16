
exports.up = function(knex){
  return knex.schema.createTable('ideas', table=>{
    table.increments('id').primary();
    table.string("image").notNullable();
    table.string("title").notNullable(); 
    table.string("category").notNullable();
    table.string("description").notNullable();
    table.string("link").notNullable();
  })
}
exports.down = function(knex) {
   knex.schema.dropTable('ideas');
}
