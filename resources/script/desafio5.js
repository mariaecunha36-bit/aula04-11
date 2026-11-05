function mudarCor() {

let cor = document.getElementById("cores").value;
let texto = document.getElementById("texto");

if (cor == "red") {
    texto.style.color = "red";

} else if (cor == "blue") {
    texto.style.color = "blue";

} else if (cor == "green") {
    texto.style.color = "green";
}};