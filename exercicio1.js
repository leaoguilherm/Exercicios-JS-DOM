function somarValores() {
    const primeiroNumero = Number(document.getElementById("primeiro-numero").value);
    const segundoNumero = Number(document.getElementById("segundo-numero").value);
    const terceiroNumero = Number(document.getElementById("terceiro-numero").value);

    const soma = primeiroNumero + segundoNumero + terceiroNumero;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "O resultado é " + soma
}