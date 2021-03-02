import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import ComponenteContador from './ComponenteContador'



const divRoot = document.querySelector('#root')


ReactDOM.render(<ComponenteContador valorInicial={1} />, divRoot)

