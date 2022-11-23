import {useState} from 'react'
import {divisbleBy3And5} from '../divisibleBy3And5'

export const useDivisible = () => {
    
    const [response, setResponse] = useState(initialState)
    
    const divisibleBy3And5 = (number) => {
        setResponse(divisbleBy3And5(number))
    }



    return {
        response,
        divisbleBy3And5
    }
}
