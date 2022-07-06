import React from "react";
import { useListas } from "../hooks/useListas";
import "./Estilo.css";

export const ListasComponentes = () => {
  const arraypersonas = ["Diana", "Alejandra", "Felipe"];
  const arrayFrutas = ["Manzana", "Mango", "Banano"];

  const { randomObjeto, randomFrutas } = useListas(arrayFrutas, arraypersonas);

  console.log(randomObjeto);
  return (
    <div>
      <h1>Persona - Fruta</h1>
      <hr />
      <div className="alert alert-success" role="alert">
        {JSON.stringify(randomObjeto())}
      </div>

      <button onClick={randomFrutas} type="button" className="btn btn-primary">
        randomFrutas
      </button>
    </div>
  );
};
