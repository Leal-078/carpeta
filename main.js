let palabra = "ACETAMINOFEN";
let letras = [];
let intentos = 5;

function mostrar() {
    let texto = "";

    for (let l of palabra) {
        texto += letras.includes(l) ? l + " " : "_ ";
    }

    document.getElementById("palabra").textContent = texto;
    document.getElementById("intentos").textContent = "Intentos: " + intentos;

    if (!texto.includes("_")) {
        document.getElementById("mensaje").textContent = "Ganaste una moto :).";
    }
}
 
mostrar();

document.addEventListener("keydown", function (event) {
    let letra = event.key.toUpperCase();

    if (letras.includes(letra) || intentos <= 0) return;

    letras.push(letra);

    if (!palabra.includes(letra)) {
        intentos--;
        if (intentos === 0) {
            alert("Perdiste Darwin :( la palabra es " + palabra);
        }
    }

    mostrar();
}); 