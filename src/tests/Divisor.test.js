import {findDivisor} from "./divisor-function";

describe('First test, divisors <= 10', () => {

    test("This is the first test", () => {
        let execute = findDivisor(10);
        let arrayexpect = [1,5,7];
        expect(execute).toEqual(arrayexpect);
    })

});