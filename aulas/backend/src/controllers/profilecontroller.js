const connection = require('../database/connection');


// é responsável pelo perfil de uma entidade/ ong
module.exports = { 
    async index(request,response){
// acessar os dados da ong q tá logada. 
    const ong_id = request.headers.authorization;

    const incidents = await connection ('incidents') // buscando todos os incidentes que tal ong criou
        .where('ong_id', ong_id)
        .select('*'); 
    return response.json(incidents);

    }


}