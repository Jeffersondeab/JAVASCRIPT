
/* ISSO SÓ É UMA AMOSTRA DOS ESTUDOS EM
OBJETOS. É PRECISO ESTUDAR MAIS */

let amigo = {nome: 'josé', sexo: 'M', peso: 85.4, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
