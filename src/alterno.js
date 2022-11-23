export const alterna =(palabra) =>{
    let r ="";
    for(let i = 0; i < palabra.length; ++i){
        if(i%2==0){
            r += palabra[i].toUpperCase();
        }else{
            r += palabra[i].toLowerCase();
        }
    }
    return r;
}

console.log(alterna("revelo"));