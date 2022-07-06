import {useState} from 'react'
export const useFruitsPeople = (fruits, people) => {

    const [peopleHook, setPeople] = useState([]);

    const generatePeople = (a) => {

        const peopleLenght = people.lenght;

        people.forEach((element) => {
            
            const positionPeople = Math.floor(Math.random()*peopleLenght);
            const setP = [...peopleHook];
            setP.push(people[positionPeople]);
            setPeople(setP);

        });

    }

    const generateFruitsPeople = (b) => {

        let fruits_array = ["Manzana", "Mango", "Durazno", "Uvas", "Fresas"];
        let people_array = ["José", "Carlos", "Diego", "Camilo", "Juan"];
        const newFruitPeople = {};

        fruits.forEach((elemento, position) => {
            
            if (elemento == null) {
                
                newFruitPeople[fruits_array[position]] = people_array[position];
                console.log(elemento);

            } else {

                newFruitPeople[elemento] = people[position];
                
            }

        });

        return newFruitPeople;

    }

    return {

        generatePeople,
        generateFruitsPeople

    };

};