
const numEntrada = 98
const vetorEntrada = [2, 4, 5, 6, 99, 100]


const retorno = encontrarNumero(numEntrada, vetorEntrada)

console.log(retorno + "estou aqui")


function encontrarNumero(num, vetor) {


    const ultimoValorVetor = vetorEntrada[vetorEntrada.length - 1]

    for (let index = 0; index <= ultimoValorVetor; index++) {
        if (vetor[index] == num) {
            const resultado = (vetorEntrada[index] + " esta na posição " + index + " do vetor.")
            return resultado
        }
    }


    const naoEncontrado = "O valor " + num + " não faz parte do vetor."
    return naoEncontrado

}