function calculadora(num1, num2, operador) {
    switch (operador) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : 'Error: División por cero';
        default: return 'Operador no válido';
    }
}
console.log(calculadora(10, 5, '+'));