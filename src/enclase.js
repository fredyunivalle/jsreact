//Ajustar texto
//juan camilo gonzalez
console.log('hola 1')

const name = 'Fredy';
const lastname = 'Ballesteros';

let inputdata = 8;
inputdata = 4;

console.log(name, lastname, inputdata)

if (true){
    let inputdata = 78
    console.log(inputdata)
}
console.log(inputdata)

const fullname = `${name} ${lastname}`
console.log(fullname)
// Fredy Ballesteros
//Desarrollo SW2

let i = 0
i++
//cesar solano


const person ={
    name: 'Fredy',
    lastname: 'Ballesteros',
    age:43
}

console.table(person);
const person1 ={
    name: 'Fredy',
     lastname: 'Ballesteros',
     age:43,
     address: {
        city: 'Cali',
        zip: 6544,
        lat: 14.24,
        ing: 34.52
     }
}

console.log(person1)
const person3 = { ...person1}
console.log(person3)