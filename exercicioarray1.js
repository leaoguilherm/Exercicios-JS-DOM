const vetorEntrada = [0, 1, 2, 3, 4, 5]
const retorno = inverterVetor(vetorEntrada)

console.log(retorno)

function inverterVetor(vetor) {
    let vetorInvertido = []
    let subirVetor = 0
    let descerVetor = (vetor.length - 1)

    while (descerVetor >= 0) {
        vetorInvertido.push(vetor[descerVetor])
        descerVetor--
    }

    return vetorInvertido
}