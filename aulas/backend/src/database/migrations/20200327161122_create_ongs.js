
exports.up = function(knex) { // sempre vai ser responsável pela criação da tabela.
    return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary();
        table.string('name').notNullable(); // não pode ser nulo, tem que ter.
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable(); // uf só tem 2 caracteres, pode passar o número.
// comando para criar npx knex migrate:latest
    });
  
};

exports.down = function(knex) { // desfazer tabelas
    return knex.schema.dropTable('ongs');
  
};
