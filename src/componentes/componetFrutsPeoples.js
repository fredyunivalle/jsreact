import React from 'react'
import './Estilo.css'
import {hookFP } from '../hooks/frutsAndPeoples'



export default function componenteFrutas(frutas, personas){
    const {aleatorio} = hookFP(frutas)
hookFP

let listado = [{
"fruta" : "",

"persona" : ""
}
]

for(i=0;i<frutas.length;i++){

listado.push(
    {
        "fruta" : hookFP.frutas[i],
        
        "persona" : personas[i]
        }

)
    }



    return (

<div>

<h1>Lista de personas y sus frutas</h1>

<JSON>{
    {listado}
    }</JSON>
<button  onClick={aleatorio}>Mostrar listado</button>
</div>
        
    )



} 
