import {useState} from 'react'

export const  useAlterno = (inicialPalabra) =>{

    const [alterna, setState] = useState(inicialPalabra)


    const convertidor = () =>{
        let r ="";
        for(let i = 0; i < alterna.length; ++i){
            if(i%2==0){
                r += alterna[i].toUpperCase();
            }else{
                r += alterna[i].toLowerCase();
            }
        }
        setState(r);
    }

    return {
        convertidor
    }

}

console.log(alterna("revelo"));