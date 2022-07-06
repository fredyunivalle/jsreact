import React from 'react';
import ReactDOM from 'react-dom';
import { MuchosCustomHooks } from './componentes/MuchosCustomHooks';
import {  ListShuffle } from "./componentes/ListShuffle";


const divRoot = document.querySelector('#root');

ReactDOM.render( <ListShuffle names={["hanier" , "hider", "mateo" , "juan" , "camilo"]} fruits = {["fresa" , "mango" , "mora"]}/>, divRoot);

/**
ReactDOM.render( <MuchosCustomHooks/>, divRoot); */
