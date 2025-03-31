function ordenarArray(arr, orden = 'asc') {
    return arr.sort((a, b) => orden === 'asc' ? a - b : b - a);
}
console.log(ordenarArray([5, 3, 8, 1, 2], 'asc'));