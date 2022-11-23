import React from 'react'
import {useAlterno } from '../hooks/useAlterno'
import './Estilo.css'
export const AlternoCustomHook = () => {
    
    const {alterna, convertidor} = useAlterno("revelo")


    return (
        <>
        <h1>AlternoCustomHook : {alterna}</h1>
        <hr/>
        <button onClick={convertidor} className="btn">convertir</button>         
        </>

    )
}
