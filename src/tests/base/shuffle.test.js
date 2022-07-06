import { useShuffle } from "../../hooks/useShuffle";

describe('pruebas a useshuffle ', () =>{


    test('Prueba saludo con nombre', () =>{

        let names = [ 'Fredy' , 'hider' , 'hanier']
    
        let fruits = [ `mango` , `fresa` ]
        
    
        expect( useShuffle(fruits , names)).not.toBe({})
    })
    

})
