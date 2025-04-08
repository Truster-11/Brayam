
// Ejercicio 2 – Operaciones con Fracciones

function sumarFracciones(a, b, c, d) {
  let mcm = lcm(b, d);
  let resultado = (a * (mcm / b)) + (c * (mcm / d));
  return `${resultado}/${mcm}`;
}

function restarFracciones(a, b, c, d) {
  let mcm = lcm(b, d);
  let resultado = (a * (mcm / b)) - (c * (mcm / d));
  return `${resultado}/${mcm}`;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

console.log("1. 2/3 + 1/6 = ", sumarFracciones(2, 3, 1, 6));
console.log("2. 5/8 - 1/4 = ", restarFracciones(5, 8, 1, 4));
console.log("3. 3/4 × 2/5 = ", `${(3 * 2)}/${(4 * 5)}`);
