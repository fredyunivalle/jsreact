import React from 'react';
import { useAsignFruit } from '../hooks/useAsignFruit'
import './Estilo.css'

export const ParcialHanier = ()  => {
    const {asignFruit, createMap} = useAsignFruit()
    const fruitList = ["Banana", "Platano"]
    const personList = ["Hanier", "Hider"]

    return (
        <>        
        <h1>CounterCustomHook : {asignFruit}</h1>  
        <button onClick={() => createMap(fruitList, personList)} className="btn"> Presioname! para cambiar</button>     
         
        </>

    )
}