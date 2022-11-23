const divisibleBy3And5 = require('./divisibleBy3And5')


describe('Divisible By 3 and 5 function tests', () => {

    test('20', () => {
        expect(divisibleBy3And5(20)).toEqual({ "3": 6, "5": 4 })
    })
    test('5', () => {
        expect(divisibleBy3And5(5)).toEqual({ "3": 1, "5": 1 })
    })
})