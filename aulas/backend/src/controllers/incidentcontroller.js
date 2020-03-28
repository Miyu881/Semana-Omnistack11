const connection = require('../database/connection');


module.exports = { 

    async index(request, response){
        const { page = 1 } = request.query; // query parms que pode enviar usando pontos de interrogação

        const [count] = await connection ('incidents').count();
           //[count] é para retornar apenas 1 
        console.log(count);
// paginação

        const incidents = await connection ('incidents')
        .join('ongs','ongs.id','=','incidents.ong_id')// ta comparando o ong id, e trazendo os dados da ong relacionados
        .limit(5)
        .offset((page - 1 )*5)
        .select(['incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf']); // qro todos os dados da tabela incidents , porem da ong tem q selecionar os dados q quero

        response.header('X-Total-Count',count['count(*)']);
            return response.json(incidents);


    },



    async create (request,response) {
        const { title, description, value } = request.body;
       // request.headers // td vem atravez do cabeçalho da requisição e não do corpo.
        // guarda informações do contexto da requisição. vem dados da autenticaçao do user, localização, mensagens.
        const ong_id = request.headers.authorization;

        const [id] = await connection ('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete (request,response){
        const { id } = request.params;
        const ong_id = request.headers.authorization; // precisa verificar se o incident que ta pedindo pra ser deletado realmente foi criado pela ong que ta querendo deletar ele.

        const incident = await connection('incidents')
        .where('id', id) // so vai retornar um registro, pq so tem um incidente com o id.
        .select('ong_id')
        .first() //retorna um só resultado 

        if (incident.ong_id != ong_id) {
            return response.status(401).json({error:'Operation not permitted'}) // 401 é não autorizado
        }
        // Se passou, vai ser deletado do banco
        await connection ('incidents').where('id', id).delete(); // vai deletar os registros de dentro da tabela do banco
        return response.status(204).send();
        // status 204, quando vai retornar uma resposta pro frontend que nao tem conteudo, o status pode ser esse 204
    }

};