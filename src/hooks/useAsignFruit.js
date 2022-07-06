import {useState} from 'react'
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
export const useAsignFruit = () => {
    const dictionary = new Map(); 
    const [asignFruit, setState] = useState()
    
    
    const createMap = (fruitList, personList) => {
        
        
        dictionary.set(fruitList[0],personList[getRandomInt(2)] );
        dictionary.set(fruitList[1],personList[getRandomInt(2)] );
        setState(dictionary)
    }

    return {
        asignFruit,
        createMap
    }
}
