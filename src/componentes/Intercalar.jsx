import React, { useState } from 'react'
import intercalarCadena from '../funcionIntercalar'

const TextoIntercalado = ({texto}) => {

    const [cadena, setCadena] = useState(texto)
  return (
    <>
        <h1>Nombre: {cadena}</h1>
        <button onClick={() => setCadena(intercalarCadena(cadena))}>Intercalar Nombre</button>
    </>
  )
}

export default TextoIntercalado