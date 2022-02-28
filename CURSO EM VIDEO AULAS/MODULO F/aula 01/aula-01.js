let num = [5, 8, 2, 9, 3]


num.sort()
/* O SORT ELE VAI POSICIONAR EM ORDEM */

num.push(1) 
/* é possível colocar números nela. letras tbm, só que ta 
aparecendo as aspas. SE EU QUISER COLOCAR O NÚMERO 1 NA FRENTE
EU PRECISO COLOCAR ELE ACIMA DO SORT PARA QUE ELE FIQUE EM
ORDEM*/


console.log(num)
/* É PARA CHAMAR A VARIÁVEL NUM QUE É A NUMERAÇÃO */

console.log(`O vetor tem ${num.length} posições`)
/*  NUM.LENGTH CONTOU QUANTOS VETORES TEM */


console.log(`O primeiro valor do vetor é ${num[0]}`)
/* ELE VAI PEGAR O PRIMEIRO VETOR E DIZER QUAL É. NESSE CASO 
FOI O 2 PQ ELE ESTÁ EM ORDEM POR CAUSA SORT */