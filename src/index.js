import React from 'react';
import ReactDOM from 'react-dom';
//import { MuchosCustomHooks } from './componentes/MuchosCustomHooks';
import { NombrePersona } from './componentes/NombrePersona.js';

const divRoot = document.querySelector('#root');


//ReactDOM.render( <MuchosCustomHooks/>, divRoot);
ReactDOM.render( <NombrePersona name='matheo'/>, divRoot);