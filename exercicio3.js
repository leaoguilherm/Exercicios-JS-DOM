
// EXERCICIO IMPRIMIR PARES 
function imprimePares() {
    let valoresPares = "";

    for (let index = 1; index < 101; index++) {
        if (index % 2 == 0) {

            valoresPares += index + ", ";
        }
    }
    document.getElementById("resultadoPares").innerText = valoresPares
}


// EXERCICIO MÉDIA
function calculaMedia() {
    const primeiroInput = Number(document.getElementById("inputUm").value);
    const segundoInput = Number(document.getElementById("inputDois").value);
    const terceiroInput = Number(document.getElementById("inputTres").value);

    let vetor = [primeiroInput, segundoInput, terceiroInput]

    const media = (vetor[0] + vetor[1] + vetor[2]) / vetor.length;

    const divMedia = document.getElementById("resultadoMedia");

    divMedia.innerHTML = "A média é " + media;
}


// EXERCICIO MENOR / MAIOR NÚMERO

function retornarMenorNumero() {
const retornoInput01 = Number(document.getElementById("primeiroInputMenorNumero").value);
const retornoInput02 = Number(document.getElementById("segundoInputMenorNumero").value);
const resultadoMenorNum = document.getElementById("retornoMenorMaiorNumero");
if (retornoInput01 < retornoInput02) {
    resultadoMenorNum.innerHTML = retornoInput01 + " é o menor número.";
}   
else  if (retornoInput01 > retornoInput02) {
    resultadoMenorNum.innerHTML = retornoInput02 + " é o menor número.";
}
else if (retornoInput01 == retornoInput02) {
    resultadoMenorNum.innerHTML = "Os números são iguais.";
}
}

function retornarMaiorNumero() {
    const retornoInput01 = Number(document.getElementById("primeiroInputMenorNumero").value);
    const retornoInput02 = Number(document.getElementById("segundoInputMenorNumero").value);
    const resultadoMaiorNum = document.getElementById("retornoMenorMaiorNumero");
    if (retornoInput01 < retornoInput02) {
        resultadoMaiorNum.innerHTML = retornoInput02 + " é o maior número.";
    }   
    else  if (retornoInput01 > retornoInput02) {
        resultadoMaiorNum.innerHTML = retornoInput01 + " é o maior número.";
    }
    else if (retornoInput01 == retornoInput02) {
        resultadoMaiorNum.innerHTML = "Os números são iguais.";
    }
}
