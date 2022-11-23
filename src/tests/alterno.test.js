import {alterna} from '../alterno'

describe('prueba palabra' , () => {
    test('Prueba palabra' , () =>{
        let test = alterna("revelo")
        expect((test).toBe("ReVeLo"))
    });
})