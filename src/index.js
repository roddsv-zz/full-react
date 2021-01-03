import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

/*Importando o index.css (cuidado com o ./ por conta da pasta onde o mesmo se encontra.*/
  
const tag = <strong>Olá React!</strong>

ReactDOM.render(
   <div>
     { tag }
    </div>,
    document.getElementById('root')
)