import React from 'react';
//import React, { useState } from 'react';
// a variavel counter vai começar com o valor de 0, depois o valor dela vai mudando 


//import Logon from './pages/Logon'; // qdo procura uma pasta, ele smp procura o arquivo index dentro dela.
import './global.css'; 
import Routes from './routes';


function App() {
  //const [counter,setCounter] = useState(0);
  // o metodo useState nos retorna como comentário um array com duas posiçoes : 1 = valor da variavel. 2= finçao de atualizaçao do valor, ela consegue trocar o valor. [counter,setCounter] o valor de coubnter e uma funçao q vai ser responsavel por alterar o valor de counter
// se o counter for uma const nao dá p alterar o valor dele ,então tem q trocar para LET
 // function increment(){
  //  setCounter(counter+1); // valor anterior mais um da função 
  //  console.log(counter); 
//  }
return (
    <Routes />
    // chaves em volt sempre qe for usar uma variavel dentro do html
   // <div>
     // <Header>Contador: {counter} </Header>
   //   <button onClick={increment}>Incrementar</button> 
   // </div>
    // qdo o usuarui clicar em incrementar, tem q ir aumentando os numeros. 
   // <Header>
    //  SemanaOmnistack
   // </Header>
   //<Header  title ="Semana Omnistack"/> // pode fechar a tag nele mesmo, pq não tem nenhum conteúdo
  // onClick sempre que o usuario clicar no botao, vai chamar a funçao increment
   );


}

export default App;
