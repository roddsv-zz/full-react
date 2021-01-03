import "./index.css";
import ReactDOM from "react-dom";
import React from "react";
import First from "../src/components/basics/First";
import WithParameter from './components/basics/WithParameter';

/*Importando o index.css (cuidado com o ./ por conta da pasta onde o mesmo se encontra.*/

ReactDOM.render(
  <div id="app">
    <First />
    <WithParameter 
      titulo="Situação do Aluno" 
      aluno="Pedro" nota={6.9} />
      <WithParameter 
      titulo="Situação do Aluno" 
      aluno="Maria" nota={9.9} />
  </div>,
  document.getElementById("root")

  /*Seguir a sintaxe para referenciar o Component como uma tag <Nome_do_Component /> ou <Nome_do_Component></Nome_do_Component>
  dentro do ReactDOM.render.*/
);
