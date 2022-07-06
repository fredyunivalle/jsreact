import React, { useState } from 'react';
import useNombrePersona from '../hooks/useNombrePersona.js';
import PropTypes from 'prop-types';


const NombrePersona = (props)=>{
    const {nombre,caracteres,mayusNombre} = useNombrePersona(props.name).mayusNombre();
    return(
        <>  
            {mayusNombre()}
            <h1>Nombre: {nombre}</h1>
            <h2># caracteres: {caracteres}</h2>
        </>
    );
}

NombrePersona.propTypes = {
    name:PropTypes.string.isRequired
}

export { NombrePersona };
