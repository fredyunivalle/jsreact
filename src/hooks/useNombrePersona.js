import { useState } from "react";

const useNombrePersona = (initialState) => {
    const [nombre, setStateNombre] = useState(initialState);
    const [caracteres, setStateLength] = useState(0);
    const mayusNombre = ()=>{
        initialState!==''?setStateNombre(initialState.toUpperCase()):setStateNombre('');
        setStateLength(initialState.length);
    }
    return {
        nombre,
        caracteres,
        mayusNombre
    }
}
export default useNombrePersona ;