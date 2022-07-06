import useNombrePersona from '../../hooks/useNombrePersona.js';

describe('Test componente NombrePersona', ()=>{
    test('Prueba UppeCase nombre',()=>{
        let prueba = 'Matheo';
        const {nombre,caracteres,mayusNombre} = useNombrePersona(prueba).mayusNombre();
        expect(nombre).toBe('MATHEO');
    })

    test('Prueba # caracteres',()=>{
        let prueba = 'matheo';
        const {nombre,caracteres,mayusNombre} = useNombrePersona(prueba).mayusNombre();
        expect(caracteres).toBe(6);
    })
})