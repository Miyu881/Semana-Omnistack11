const connection = require('../database/connection');

module.exports = {
    async create (request,response){
    // ela só vai verificar se a ong realmente existe. 
    const { id } = request.body;
    
    const ong = await connection ('ongs')
        .where('id', id)
        .select ('name')
        .first();

    if (!ong){ // se a ong não existir 
        return response.status(400).json({ error: 'No Ong found with this ID'}); 
    
    }
    return response.json(ong); 

// a tela de logout nao precisa existir, pois ela é basicamente enviar o usuário para a tela de login.

    }


}