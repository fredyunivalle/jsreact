import {useShuffle} from '../hooks/useSuffle'

const ListShuffle = (props) =>{
    namesuseShuffle = useShuffle( props.fruits , props.name)
    keys = namesuseShuffle.keys()
    values = namesuseShuffle.values()

    items = []

    for (let index = 0; index < namesuseShuffle.length; index++) {
        items.push( <li>`{keys[index]} -- {values[index]}`</li> )
    }

    return(
        <ul>
            items
        </ul>
        
    )
}