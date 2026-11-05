function calcularMedia(event) {
event.preventDefault();
let nome = document.getElementById("nome").value;
let nota1 = Number(document.getElementById("nota1").value);
let nota2 = Number(document.getElementById("nota2").value);
let nota3 = Number(document.getElementById("nota3").value);
let media = (nota1 + nota2 + nota3) / 3;
let resultado = document.getElementById("resultado");

if(media >= 7) {
    resultado.innerHTML = "Olá, " + nome + ", você passou! Média: " + media.toFixed(2);
    resultado.style.color = "green";
}
 else{
    resultado.innerHTML = "Olá, " + nome + ", você reprovou! Média: " + media.toFixed(2);
    resultado.style.color = "red" }}