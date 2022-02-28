let num = [5, 8, 2, 9, 3]
num.push(1) 
num.sort() 
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

/* indexOf é vai mostra em que posição está algum valor.
 exemplo, se eu tirar o sort ele vai dizer que o 8 está 
 na posição 1, LEMBRANDO QUE A CONTAGEM EM JAVASCRIPT E EM OUTRAS
 LINGUAGEM COMEÇAM EM 0. 
 */


/* Suponha que o número posto no indexOf não existe na lista
acima, quando executado irá aparecer o -1, que quer dizer
número não encontrado. Para deixar o aspeto melhor foi 
feito a estrutura a baixo, que diz que caso o número 
não seja entrado, vai aparecer a primeira msg, caso exista
vai aparecer a segunda mensagem */

let pos = num.indexOf(6)
if (pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
