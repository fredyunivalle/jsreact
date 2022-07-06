import {useState} from 'react'

export const useRandomPersonFruits = (initialPersons, initialFruits) => {
    
    const [fruits_persons, setState] = useState([]);
    const [fruits, setFruits] = useState(initialFruits);
    const [personNames, setPersonNames] = useState(initialPersons);

    
    const randomPersonsFruits = () => {
        const fruitsAmount = fruits.length;
        const newState = [];
        personNames.forEach(name => {
            const randomFruit = Math.floor((Math.random() * (fruitsAmount-1)));
            const fruit = fruits[randomFruit];
            newState.push({name, fruit});
        });
        console.log(newState);

        setState(newState);
    }

    const addFruit = newFruit => {
        console.log(newFruit);
        const newFruits = [...(fruits)];
        newFruits.push(newFruit);
        setFruits(newFruits);
    }

    const addPersonName = newPersonName => {
        const newPersonNames = [...(personNames)];
        newPersonNames.push(newPersonName);
        setPersonNames(newPersonNames);
    }


    return {
        fruits_persons,
        fruits,
        personNames,
        addFruit,
        addPersonName,
        randomPersonsFruits
    }
}