
// Ejercicio 3 – Resolución de Ecuaciones

function resolverSuma(a, b) {
  let x = b - a;
  console.log(`x + ${a} = ${b} → x = ${x}`);
}

function resolverResta(a, b) {
  let x = b + a;
  console.log(`x - ${a} = ${b} → x = ${x}`);
}

function resolverMultiplicacion(a, b) {
  let x = b / a;
  console.log(`${a}x = ${b} → x = ${x}`);
}

function resolverDivision(a, b) {
  let x = a * b;
  console.log(`x / ${a} = ${b} → x = ${x}`);
}

// Ejemplos
resolverSuma(3, 7);            // x + 3 = 7
resolverResta(2, 6);           // x - 2 = 6
resolverMultiplicacion(5, 20); // 5x = 20
resolverDivision(4, 3);        // x / 4 = 3
