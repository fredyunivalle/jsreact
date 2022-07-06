import React from "react";
import ReactDOM from "react-dom";
//import Saludo from "./componentes/saludo";
import Contador from "./contador";
//import { MuchosCustomHooks } from "./componentes/MuchosCustomHooks";
import { ContadorCustomHook } from "./componentes/ContadorCustomHook";
import { MuchosCustomHooks } from "./componentes/MuchosCustomHooks";
import useCounter from "./hooks/useCounter";
import { ListasComponentes } from "./componentes/ListasComponentes";

const divRoot = document.querySelector("#app");

ReactDOM.render(<ListasComponentes />, divRoot);
