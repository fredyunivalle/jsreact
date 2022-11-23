export var intercalarString = (cadena) => {
    var numeroCaracteres = cadena.length
    var cadenaFinal = '';
    for (let i = 0; i < numeroCaracteres; i++) {
        if (i == 0) {
           cadenaFinal += (cadena.charAt(i)).toUpperCase();
        }
        else if (i%2 == 0) {
            cadenaFinal += (cadena.charAt(i)).toUpperCase();
        }
        else {
            cadenaFinal += (cadena.charAt(i)).toLowerCase();
        }
    }
    return cadenaFinal
}