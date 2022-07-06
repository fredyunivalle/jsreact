import React from 'react';
import useNombrePersona from '../hooks/useNombrePersona.js';

const NombrePersona = (props)=>{
    const {nombre,caracteres,mayusNombre} = useNombrePersona(props.name);
    return(
        <div>  
            <button onClick={mayusNombre}>ClickMe</button>
            <h1>Nombre: {nombre}</h1>
            <h2># caracteres: {caracteres}</h2>
        </div>
    );
}
export { NombrePersona }
