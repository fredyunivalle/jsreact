import React from 'react';
import {useFruitsPeople} from '../hooks/useFruitsPeople'
import './Estilo.css';

export const ComponentFruitsPeople = () => {

    let fruits_array = ["Manzana", "Mango", "Durazno", "Uvas", "Fresas"];
    let people_array = ["José", "Carlos", "Diego", "Camilo", "Juan"];

    const {generatePeople, generateFruitsPeople} = useFruitsPeople(fruits_array, people_array);

    return (

        <div>

            <h1> PERSONAS Y FRUTAS </h1>
                
                <hr/>

                <div className="alert alert-success" role ="alert"> {JSON.stringify(generateFruitsPeople())} </div>

                <button onClick={generatePeople} type="button" className="btn btn-primary"> AleatorioPersonasYFrutas </button>

        </div>

    );

}
