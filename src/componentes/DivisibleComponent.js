import React, {useEffect} from 'react'
import {useDivisible } from '../hooks/useDivisible'


export const DivisibleComponent = () => {
    const {response, divisbleBy3And5} = useDivisible(0)
    useEffect(() => {
        divisbleBy3And5(20);
    },[])
    return (
        <div>
           <h1>Un dictionario describiendo la cantidad de numeros divisibles por 3 y los divisibles por 5, ej: 20</h1> 
           <h2>${response}</h2>
        </div>
    )
}
