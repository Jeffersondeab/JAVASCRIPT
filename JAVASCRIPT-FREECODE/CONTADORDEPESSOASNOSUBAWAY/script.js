/* SISTEMA DE CONTAGEM AO CLICAR NO BOTÃO */
let salvar = window.document.getElementById('pessoas')
let cont = window.document.getElementById('cont-el')
let numeração = 0

 function incremento(){
    numeração = numeração + 1
    cont.innerHTML = numeração
 }



 function save(){
    let botãosave  = numeração + '⚐ '
    salvar.innerHTML += botãosave
    console.log(cont)
    /* NOS CÓDIGOS ABAIXO, CONT.INNERHTML É PARA VOLTAR AO ZERO. NUMERAÇÃO É PARA QUE
    O CÓDIGO ZERE TBM E NÃO VOLTE A CONTAR NO NUMERO ONDE ESTAVA.
    EXEMPLO: SEM O NUMERAÇÃO SE EU SALVASSE ELE VOLTARIA AO ZERO MAIS 
    APÓS CLICAR DE NOVO CONTINUARIA A CONTAR DE ONDE PAROU. EX: PAROU NO 4 CLIQUEI SALVAR VOLTOU NO ZERO
    SEM O NUMEÇAO = 0 CLIQUEI DE NOVO ELE VOLTA A CONTAR A PARTI DO 5*/
    cont.innerHTML = 0
    numeração = 0
 }

 
