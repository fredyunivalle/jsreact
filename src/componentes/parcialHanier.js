import React from "react";
import { useAsignFruit } from '../hooks/useAsignFruit'

export const asignFruitHook = ()  => {
    const [asignFruit, createMap] = useAsignFruit();
    const fruitPersonList = ["Banana", "Hanier"];

    return (
        <>
        hola
        <h1>CounterCustomHook : {asignFruit}</h1>  
        <button onClick={createMap(fruitPersonList)} className="btn"> hola</button>       
        </>

    )
}