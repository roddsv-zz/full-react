import React from "react";

export default function WithParameter(props) {
    const status = props.nota >= 7 ? "Aprovado" : "Reprovado"
    return (
    <div>
      <h2>{props.titulo}</h2>
        <strong>{props.aluno} </strong>
        tem nota
        <strong> {props.nota} </strong>
        e foi
        <strong> {status}</strong>
    </div>
  );

  /* O props faz com que o DOM renderize com o JSX após chamada do componente com a propriedade e declaração
  da mesma no componente Parent.*/
  /* Como a const status está dentro do mesmo parâmetro, não precisa colocar o props.*/
}
