function sortear() {
let numero = Number(document.getElementById("numero").value);
let sorteado = Math.floor(Math.random() * 100) + 1;
if (numero === sorteado) {

    document.getElementById("resultado").innerHTML =
    "Número Sorteado: " + sorteado +
    ". Parabéns, você acertou!";
} else{

    document.getElementById("resultado").innerHTML =
    "Número Sorteado: " + sorteado +
    ". Infelizmente, você errou. Tente novamente!";
}};