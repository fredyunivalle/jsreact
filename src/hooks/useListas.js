import { useState } from "react";

export const useListas = (frutas, personas) => {
  const [fruta, setFruta] = useState([]);

  const randomFrutas = (e) => {
    const len = frutas.length;
    setFruta(frutas[Math.floor(Math.random() * len)]);

    frutas.forEach((n) => {
      const index = Math.floor(Math.random() * len);
      const nuevoEstado = [...fruta];
      nuevoEstado.push(frutas[index]);
      setFruta(nuevoEstado);
    });
  };

  const randomObjeto = (e) => {
    const obj = {};

    personas.forEach((element, index) => {
      obj[element] = fruta[index];
    });

    return obj;
  };

  return {
    randomFrutas,
    randomObjeto,
  };
};
