import React from 'react';
import { useRef } from 'react';

import { useRandomPersonFruits } from '../hooks/useRandomPersonsFruits'


function RandomPersonFruitsComponent({proPersons, propFruits}) {

    const { fruits_persons, fruits, personNames, addFruit,addPersonName,randomPersonsFruits} = useRandomPersonFruits(proPersons,propFruits);
    const inputPersonRef = useRef(null); 
    const inputFruitRef = useRef(null); 


    const handleAddPerson = () => {
        addPersonName(inputPersonRef.current.value);
    }

    const handleAddFruit = () => {
        addFruit(inputFruitRef.current.value);
    }

    const handleGenerateRandom = () => {
        randomPersonsFruits();
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
            
            <div className="row mt-5">
                <div className="col-6">
                    <div className='row text-center'>
                        <div className="col-6">
                            <h2>PERSONAS</h2>
                            <ul className='list-unstyled'>
                                {personNames.map( (name,index) =><li>{index+1}. {name}</li>
                                )}
                            </ul>

                        </div>
                        <div className="col-6">
                            <h2>FRUTAS</h2>
                            <ul className='list-unstyled'>
                                {fruits.map( (fruit,index) =><li>{index+1}. {fruit}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <button onClick={ev => handleGenerateRandom()}>Generar asignaciones</button>

                    <table className='w-100'>
                        <thead>
                            <th>Posicion</th>
                            <th>Nombre</th>
                            <th>Fruta</th>
                        </thead>
                        <tbody>
                            {fruits_persons.map(
                                ({name, fruit}, index) => {
                                    return <tr>
                                        <td>{index + 1}</td>
                                        <td>{name}</td>
                                        <td>{fruit}</td>
                                    </tr>
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default RandomPersonFruitsComponent;