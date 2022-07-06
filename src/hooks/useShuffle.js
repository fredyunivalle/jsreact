import {useState} from 'react' 



const useShuffle = (fruits , names) => {
    let max = fruits.length;
    let myFruitsObject = {};
    const [fruitNames, setFruitNames] = useState({});
    let theFruits = names.map( ()=> { return fruits[Math.floor(Math.random()*max)] })

    for (let index = 0; index < names.length; index++) {
       myFruitsObject = { ...myFruitsObject ,  [names[index]]: theFruits[index]}
       
   }

   /**setFruitNames(myFruitsObject) */
   
   console.log(myFruitsObject[0])
   return myFruitsObject
}

/**useShuffle(["papas" , "pollo", "carne" , "cebollas" , "camino"] , ["comida" , "almuerzo" , "desayunno"]) */

export {useShuffle}

