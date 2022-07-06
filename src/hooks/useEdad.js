import {useState} from 'react'

export const useEdad = ( dia, mes, anio) => {
    const[actual, edad] = useState()

    const CalcularEdad = () => {
        edad(actual-anio)
    }
    
    return{
        CalcularEdad
    }
}

