function mostrarDatos() {
    let nombre = "Edgar Francisco";
    let edad = 22;
    let ciudad = "Ciudad de México";

    let contenido = `
        <b>Nombre:</b> ${nombre} <br>
        <b>Edad:</b> ${edad} años <br>
        <b>Ciudad de Residencia:</b> ${ciudad} <br>
        <hr>
    `;

    document.getElementById("datos").innerHTML = contenido;
}
