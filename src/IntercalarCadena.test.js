import { intercalarString } from './funcionIntercalar'

test('Probando funcion para intercalar una cadena', () => {
    const cadena = 'Murcielago'
    const cadenaIntercalada = intercalarString(cadena)
    expect(cadenaIntercalada).toBe('MuRcIeLaGo')
 })