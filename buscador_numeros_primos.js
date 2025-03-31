function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function numerosPrimos(rango) {
    let primos = [];
    for (let i = 2; i <= rango; i++) {
        if (esPrimo(i)) primos.push(i);
    }
    return primos;
}
console.log(numerosPrimos(50));