let jogo = ['Pedra', 'Papel', 'Tesoura']

function gerarAleatório(){
    let sortia = Math.floor(Math.random()* 3)
    /* RETURN SORTIA IRIA APARECER SOMENTE OS NÚMEROS
    COM O RETURN JOGO[SORTIA] VAI APARECER AS PALAVRAS EM JOGO */
    return jogo[sortia]
}

console.log(gerarAleatório())