import {useState} from 'react'

export const useRandomPersonFruits = () => {
    
    const [fruits_persons, setState] = useState({fruits_persons: []});
    const [fruits, setFruits] = useState({fruits: []});
    const [personNames, setPersonNames] = useState({personNames: []});

    
    const randomPersonsFruits = () => {
        const fruitsAmount = fruits.lenght;
        const namesAmount = personNames.lenght;
        const newState = {fruits_persons: []};

        personNames.forEach(name => {
            const randomFruit = Math.floor((Math.random() * (fruitsAmount-1)));
            const fruit = fruits[randomFruit];
            newState.fruits_persons.push({name, fruit});
        });
        
        setState(newState);
    }

    const addFruit = newFruit => {
        console.log(newFruit);
        const newFruits = {fruits: [...(fruits.fruits)]};
        newFruits.fruits.push(newFruit);
        setFruits(newFruits);
    }

    const addPersonName = newPersonName => {
        const newPersonNames = {personNames: [...(personNames.personNames)]};
        newPersonNames.personNames.push(newPersonName);
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