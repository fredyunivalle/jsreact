import {useState} from 'react'

export const useAsignFruit = () => {
    
    const [asignFruit, setState] = useState()
    
    
    const createMap = (fruitPersonList) => {
        
        const dictionary = new Map();
        
        dictionary.set(fruitPersonList[0],fruitPersonList[1] );
        console.log(dictionary.keys);
        setState(dictionary.keys)
    }

    return {
        asignFruit,
        createMap
    }
}
