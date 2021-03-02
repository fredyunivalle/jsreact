import React , {useState} from 'react'
import PropTypes from 'prop-types'

//Andrés Felipe Rojas
//1741787



const ComponenteContador = ( {valorInicial} ) =>{

    const [conteo,setConteo]=useState(valorInicial)
    


    return (

        <>
        <h1>Valor Inicial: {valorInicial}</h1>
        <br/>
        <h2>Valor Del Contador: {conteo}</h2>

        <button className="sumar" onClick={(e)=> setConteo(conteo+1)}>
            Sumar
        </button>

        <button onClick={(e)=> setConteo(conteo-1)}>
            Restar            
        </button>

        <button onClick={(e)=> setConteo(valorInicial)}>
            Resetear            
        </button>

        </>

    )
}

ComponenteContador.propTypes ={
    valorInicial: PropTypes.number.isRequired
}

export default ComponenteContador
