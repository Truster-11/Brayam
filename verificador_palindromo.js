function esPalindromo(texto) {
    let limpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    return limpio === limpio.split('').reverse().join('');
}
console.log(esPalindromo("Anita lava la tina"));