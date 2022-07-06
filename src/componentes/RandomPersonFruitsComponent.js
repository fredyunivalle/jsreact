import React from 'react';
import { useRef } from 'react';

import { useRandomPersonFruits } from '../hooks/useRandomPersonsFruits'


function RandomPersonFruitsComponent() {

    const { fruits_persons, fruits, personNames, addFruit,addPersonName,randomPersonsFruits} = useRandomPersonFruits();
    const inputPersonRef = useRef(null); 
    const inputFruitRef = useRef(null); 


    const handleAddPerson = (ev) => {
        addPersonName(inputPersonRef.current.value);
    }

    const handleAddFruit = (ev) => {
        addFruit(inputFruitRef.current.value);
    }

    return (
        <div>
            <div className='text-center'>
                <h1>PARCIAL 1 - DESARRROLLO DE SOFTWARE 2</h1>
            </div>

            <div className='text-center row mt-5'>
                <div className="col-6">
                    <h2>AGREPAR PERSONAS</h2>

                    <div className='d-flex justify-content-around'>
                        <div>
                            <label htmlFor="addPerson">Persona</label>
                            <input type="text" name="addPerson" className='ms-2' ref={inputPersonRef}/>
                        </div>
                        <button onClick={ev => handleAddPerson()}>AÑADIR PERSONA</button>
                    </div>
                </div>

                <div className="col-6">
                    <h2>AGREPAR FRUTAS</h2>

                    <div className='d-flex justify-content-around'>
                        <div>
                            <label htmlFor="addPerson">Frutas</label>
                            <input type="text" name="addPerson" className='ms-2' ref={inputFruitRef}/>
                        </div>
                        <button onClick={ev => handleAddFruit()}>AÑADIR FRUTA</button>
                    </div>
                </div>
            </div>
            <div className='row text-center mt-5'>
                <div className="col-6">
                    <h2>NOMBRES DE PERSONAS</h2>
                    <ul>
                        {personNames.personNames.map( name =><li className='text-decoration-none'>{name}</li>
                        )}
                    </ul>

                </div>
                <div className="col-6">
                    <h2>NOMBRES DE FRUTAS</h2>
                    <ul>
                        {fruits.fruits.map( fruit =><li>{fruit}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default RandomPersonFruitsComponent;