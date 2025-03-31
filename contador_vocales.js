function contarVocales(texto) {
    let coincidencias = texto.match(/[aeiou]/gi);
    return coincidencias ? coincidencias.length : 0;
}
console.log(contarVocales("Hola Mundo"));