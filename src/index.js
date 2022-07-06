import React from 'react';
import ReactDOM from 'react-dom';
import RandomPersonFruitsComponent  from './componentes/RandomPersonFruitsComponent';



const divRoot = document.querySelector('#root');


ReactDOM.render( <RandomPersonFruitsComponent proPersons={[]} propFruits={[]}/>, divRoot);
