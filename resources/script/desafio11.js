function calcular() {
let peso = Number(document.getElementById("peso").value);
let altura = Number(document.getElementById("altura").value);
let imc = peso / (altura * altura);
document.getElementById("resultado").innerHTML =
    "Seu IMC é: " + imc.toFixed(1);
};