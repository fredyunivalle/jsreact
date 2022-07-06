import { useState } from "react";

export const useFrut = (frutas, personas) => {

    const [frutas, setStateFruta] = useState([]);
    const [persona, setStatePerson] = useState([]);


    const aleatorio = (frutas) => {
        var copia = frutas;

          for(i =0; i<copia.lenght;i++){
            copia[i] =  Math.floor(math.random() * (copia.lenght-1) );

            setStateFruta(copia)
    

          }

      


    }

    return {

        aleatorio,
        frutas
    }
}











