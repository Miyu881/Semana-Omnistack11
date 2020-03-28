const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // é necessário usar ./ para o programa não achar q é um pacote
// importar no index as rotas.


const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

//  A partir que isso foi adicionado ao código, está sendo falado para antes das outras
//requisições, é importante que venha antes das rodas. para o express ir lá para o corpo da requisição e converter o json em um objeto do javascript.
// algo entendentivel pela aplicação.


/**
 * Rota/Recurso 
 * 
 */

/**
 * Métodos HTTP:
 * Rotas do back-end.
 * GET: Quando queremos buscar/listar uma informação do backend. Sempre que for criar uma rota que o Backend for retornar
 * alguma informação,uma listagem, dado de algum usuário.. Qualquer tipo de retorno vai ser usado o método GET.
 * Quando você vai no browser e aperta enter, o brownser executa o método GET. 
 * 
 * POST: Sempre que quiser criar uma informação no backend.Ex: Você vai criar uma rota que vai criar um novo
 * usuário .A rota vai receber os dados do nome do usuario, e-mail, senha e esta rota vai criar um usuário. Então
 * no lugar do GET será o post. 
 * 
 * PUT: Quando quer alterar uma informaçao do backend 
 * 
 * DELETE: Deletar uma informação no backend.
 * 
 * O unico método que aparece no navegador é o GET. Para ver os outros existe um software chamado insomnia.
 * No insomnia você consegue criar requisições que funcionam como se fossem acessos do brownser, porem usando
 * qualquer método http que queira. Como get, post, put e delete. 
 * 
 */

/** Tipos de parametros que pode enviar para uma rota: 
 * 
 * Query parms:são paramentros nomeados que a gente envia dentro da url. Ex: Listar os usuários apenas que começam
 * ou que tenham o nome "diego". Então a gente envia esses dados do nome junto com a url. ('/users?name=Diego')
 * Usados após o simbolo de ? (filtros, paginação?page=2&nome=Diego&idade=25)
 * 
 * 
 * Route parms: são parametros utilizados para identificar recursos. * a parte ('/users') é um recurso
 * pois, qual é a entidade/ tabela que se deseja buscar os dados *users* . É usado para identificar um unico recurso
 * Ex: Buscar dados de um único usuário ('/users/:id) O :id está dizendo para a rota que tudo que vem depois da / 
 * vai ser nomeado como id. vai ser o id do usuário.  ('/users/1) está buscando o usuário do id 1. 
 * Os Routes parms não são acessados por query,  e sim através de params. request.params
 * não se pode enviar parametros a mais do que está sendo esperado. 
 * 
 * 
 * Request Body: Imagina que a pessoa quer criar um novo usuário, é necessário informar o nome do usuário,
 * e mail, senha .
 * É o corpo da requisição, usado para criar ou alterar recursos. Se for criar ou alterar algum usuário  
 * 
 * O request guarda todos os dados que vem através da requisição e o response é o responsável
 * por retornar uma resposta ao usuário.  
 */

 /**    SQL: Mysql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server *UNIVERSAL*
  * sql é o formato que utilizamos para nos comunicar com o banco de dados , para buscar dados, escrever...
  *     NoSQL: MongoDB, CouchDB, etc
  *     SQlite é armazenado como um arquivo dentro da aplicação.
  * 
  *   Para fazer a comunicação com o banco, tem 3 formas principais:
  *     Driver: pacote oficial do banco de dados para node. Busca de usuários SELECT * FROM USERS
  *     Query builder: vai escrever as querys usando javascript. 
  *     table ('users'). select ('*').where()
  * 
  */

/**app.post('/users', (request,response) =>  { // quer listar os usuários. Vai na parte de users do banco e lista eles.
    const body = request.body; // obter acesso á variável name. 
    console.log(body);
return response.json({
        Evento: 'Semana Omnistack',
        Aluna: 'bia'
    });


})
*/

app.listen(3333);

/** Para não precisar sempre que realizar uma mudança, é legal instalar um pacote chamado npm install nodemon -D
 * -D, se acessar o package.json, que é o arquivo que armazena as dependencias da aplicação, ao inves de salvar o nodemon
 * como uma dependencia da aplicação, ele salvou como uma dependencia de DEV, de desenvolvimento.
 * é uma biblioteca que vai ser utilizada somente enquanto estiver desenvolvendo a aplicação. Qd jogar
 * ela online em um servidor, não vai ser necessário ficar monitorando a aplicação.
 * Depois dela instalada, toda vez que alterar alguma coisa na aplicação, ele vai restartar a aplicação.
 * Sempre que precisar do backend sendo executado, precisa executar npm.start 
 * 
 * 
 */

