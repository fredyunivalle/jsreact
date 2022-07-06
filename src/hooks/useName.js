import {useState} from 'react'
function useName(nameArg) {
    const [name, setName] = useState(nameArg);
  
  
    return [name.toUpperCase, name.length];
  }