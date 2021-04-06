import React, {useEffect, useState} from 'react'
import './Estilo.css'

export const FormularioUseefect = () => {

    const [ formState, setFormState ] = useState({name:'', email:''})
  
    const {name, email} = formState
     
    useEffect(() => {
        console.log('me ejecuto')
    },[])


    const HandleInputChange = ({target}) =>{
        //console.log(e.target)
        setFormState({
            ...formState,
            [target.name] : target.value
        })
     }
    


    return (
        <div>
            <h1>HOLA SOY FORMULARIO</h1>
            <hr/>
            <div className="form-group">
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete= "off"
                value={name}
                onChange={HandleInputChange}
                />
             </div>

             <div className="form-group">
               <input
                type="text"
                name="email"
                className="form-control"
                placeholder="emai@email.com"
                autoComplete= "off"
                value={email}
                onChange={HandleInputChange}
                />
             </div>   
            
            

        </div>
    )
}
