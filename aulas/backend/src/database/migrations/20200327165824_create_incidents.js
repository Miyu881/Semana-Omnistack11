
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

// tem q saber qual on criou esse incident: Vai ser criado um campo tipo string, pois o id da ong (PK) tbm é string
    table.string ('ong_id').notNullable();
// agora achave estrangeira, sempre que o ong_id estiver preenchido, ele precisa estar cadastrado dentro da tabela ong.    
    table.foreign('ong_id').references('id').inTable('ongs');
    // a coluna ong id vai referenciar a coluna id na tabela ongs.

    });


};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
