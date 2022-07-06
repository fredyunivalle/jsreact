import React from 'react';
import {useShuffle} from '../hooks/useShuffle'

const ListShuffle = (props) =>{
    let namesuseShuffle = useShuffle( props.fruits , props.names)
    let keys =Object.keys( namesuseShuffle )
    let values = Object.values(namesuseShuffle)

    let items = keys.map(( akey , index )=> { return <li key={index}>{keys[index]} -- {values[index]}</li> })
    
    console.log(items)


    return(
        <div>
            <h1>listas combinadas</h1>
            <ul>{items} </ul>
           
        </div>
        
    )
}

export {ListShuffle}