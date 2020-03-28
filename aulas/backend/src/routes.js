const express = require('express'); 
//const crypto = require('crypto');
const Ongcontroller = require ('./controllers/Ongcontroller');
// const connection = require('./database/connections');
const incidentcontroller = require('./controllers/incidentcontroller');
const profilecontroller = require('./controllers/profilecontroller');
const sessioncontroller = require('./controllers/sessioncontroller');
const routes = express.Router(); // está desacoplando o módulo de rotas do express em uma nova varíavel.



routes.post('/sessions',sessioncontroller.create);
// criar rota para listar todas as onngs do banco.
//routes.get('/ongs', async (request,response) => { // mostrar na tela a ong que foi armazenada no banco.
   // const ongs = await connection ('ongs').select('*');

  //  return response.json (ongs);

//})
routes.get('/ongs',Ongcontroller.index);
/** Tem que deixar as rotas disponíveis para q a aplicação "index" possa acessá-las
 
 */
// async funçao assincrona.
routes.post('/ongs',Ongcontroller.create); // abstrai a lógica p dentro do controller
routes.get('/profile', profilecontroller.index);
routes.get('/incidents',incidentcontroller.index);
routes.post('/incidents', incidentcontroller.create); 
routes.delete('/incidents/:id',incidentcontroller.delete);

// quer listar os usuários. Vai na parte de users do banco e lista eles.
// const { name, email, whatsapp, city, uf } = request.body;
 //const id = crypto.randomBytes(4).toString('HEX');
// await = qdo o node chegar no codigo, ele vai aguardar  o código finalizar para então continuar.
 //await connection ('ongs').insert({ // todas as colunas q se quer inserir
  //  id,
 //   name,
  //  email,
  //  whatsapp,
  //  city,
 //   uf,
 
 //}) // nome da tabela que quer inserir dados
// console.log(data);
// o que vai ser devolvido de resposta ao cliente?
// qdo a ong se cadastra na aplicaçao ela tem q saber o id q foi gerado p ela , como se fosse um cpf dessa ong dentro do sistema. é com esse id que ela vai se conectar dentro da aplicação.
    //const body = request.body; // obter acesso á variável name. 
    //console.log(body);    
 


module.exports = routes; // as rotas vão ser exportadas, é dessa forma que exporta uma varíavel de dentro de um arquivo

