import React from 'react';
import ReactDOM from 'react-dom';
import { MuchosCustomHooks } from './componentes/MuchosCustomHooks';
import { frutasAndPeoples } from './componentes/componetFrutsPeoples';



const divRoot = document.querySelector('#root');


ReactDOM.render( <frutasAndPeoples/>, divRoot);
