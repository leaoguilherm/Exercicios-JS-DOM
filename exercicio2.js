function valorDigitado() {
    const primeiroValor = Number(document.getElementById("primeiro-numero").value);
    const segundoValor = Number(document.getElementById("segundo-numero").value);
    const terceiroValor = Number(document.getElementById("terceiro-numero").value);

    const  soma = primeiroValor + segundoValor + terceiroValor;

    document.getElementById("resultado").innerHTML = "A soma é " + soma;
}
