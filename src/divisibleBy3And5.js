const divisbleBy3And5 = (number) =>{
    let divisible = {
        "3":0,
        "5":0
    }
    for(let i = 1; i<=number; i++){
        if(i%3 === 0){
            ++divisible["3"]
        }
        if(i%5===0){
            ++divisible["5"]
        }
    }
    return divisible;
}

module.exports = divisbleBy3And5