import { useState } from "react";

export const useNombrePersona = (initialState='') => {
    const [nombre, setStateNombre] = useState(initialState);
    const [caracteres, setStateLength] = useState(0);
    const mayusNombre = ()=>{
        setStateNombre(initialState.toUpperCase);
        setStateLength(initialState.length);
    }
    return {
        nombre,
        caracteres,
        mayusNombre
    }
}