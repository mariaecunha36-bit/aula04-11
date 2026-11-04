let botao = document.querySelector("#botao");
botao.addEventListener("click", () => {
    let formulario = Number(document.querySelector("#numero1").value);
    let formulario2 = Number(document.querySelector("#numero2").value);
    let resultado = document.querySelector("#resultado");

    if (formulario > formulario2) {
        resultado.innerHTML = "O maior número é: " + formulario;
    } 
    else if (formulario2 > formulario) {
        resultado.innerHTML = "O maior número é: " + formulario2;
    } 
    else {
        resultado.innerHTML = "Os dois números são iguais!";
    }
});