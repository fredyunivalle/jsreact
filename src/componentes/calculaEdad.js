import React from 'react'
import {useEdad} from '../hooks/useEdad'

//import './Estilo.css'
export const CalculaEdad = (dia, mes, anio) => {
    
    const {edad} = useEdad()
    
    return (
        <>
        <h1>CalculaEdad : {edad}</h1>
        <hr/>
        
        <label for="dia">dia nacimiento</label>
        <input type="text" id="dia" name="dia" />
        <label for="mes">mes nacimiento</label>
        <input type="text" id="mes" name="mes" />
        <label for="Anio">Año nacimiento</label>
        <input type="text" id="Anio" name="Anio" />

        <label>Calcular <input type="text" id={edad} name={edad} /></label>
        <button onClick={edad} className="btn">calcular edad</button>            
        </>

    )
}