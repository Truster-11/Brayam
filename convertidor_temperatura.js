function convertirTemperatura(valor, tipo) {
    return tipo === 'C' ? (valor * 9/5) + 32 : (valor - 32) * 5/9;
}
console.log(convertirTemperatura(100, 'C'));