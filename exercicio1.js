function somarValores() {
    const primeiroNumero = document.getElementById("primeiro-numero").value;
    const segundoNumero = document.getElementById("segundo-numero").value;
    const terceiroNumero = document.getElementById("terceiro-numero").value;

    const soma = Number(primeiroNumero) + Number(segundoNumero) + Number(terceiroNumero);

    const resultadoDiv = document.querySelector(".resultado");
    resultadoDiv.innerHTML = "O resultado é " + soma
}