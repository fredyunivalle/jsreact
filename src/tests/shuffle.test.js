import { useShuffle } from "../hooks/useShuffle";
import {  ListShuffle } from "../componentes/ListShuffle";
import { shallow , mount } from 'enzyme'
import React  from "react";


describe('pruebas a useshuffle ', () =>{


    test('Prueba a shuffle usando dos arrays no vacios', () =>{

        let names = [ 'Fredy' , 'hider' , 'hanier'];
    
        let fruits = [ `mango` , `fresa` ];
                
        let result = shallow( 
        <ListShuffle
            names={["papas" , "pollo", "carne" , "cebollas" , "camino"]} 
fruits = {["comida" , "almuerzo" , "desayunno"]}
        ></ListShuffle>)
    
        expect(result.find( "#key" )).toEqual(expect.anything())
    })
    

})
