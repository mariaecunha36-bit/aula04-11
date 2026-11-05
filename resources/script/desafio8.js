function calcular() {
let numero = Number(document.getElementById("numero").value);
let antecessor = numero - 1;let sucessor = numero + 1;
document.getElementById("resultado").innerHTML =
    "Antecessor: " + antecessor + "<br>" +
    "Sucessor: " + sucessor;
};