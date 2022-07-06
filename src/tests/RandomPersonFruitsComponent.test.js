import React from 'react';
import RandomPersonFruitsComponent  from '../componentes/RandomPersonFruitsComponent';
//import '@testing-library/jest-dom/extend-expect'
import { shallow } from 'enzyme'

describe('Pruebas sobre el componente Random persons_fruits', () =>{

   test('Probando que genere frutas random para la exacta cantidad de personas', ()=>{

    const persons = ["Laura","Mateo", "Luis"];
    const fruits = ["Banano", "Papaya","Cereza"];
    const wrapper = shallow(<RandomPersonFruitsComponent proPersons={persons} propFruits={fruits}/>)
    wrapper.find('button').at(2).simulate('click');
    expect(wrapper.find('tbody').at(0).html).not.toBeNull()
    });
})