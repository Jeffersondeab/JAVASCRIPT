let valores = [8, 1, 7, 4, 2, 9]

/* há varias formas de mostrar a numeração acima.
A primeira é a console.log(valores) onde ele mostrou 
a numeração na tela. A segunda e mais exemplificada é a que 
tem o FOR, QUE ATRAVÉS DELE DEIXOU MAIS COMPLETO E ORGANIZADO*/
console.log(valores)



for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

/* OUTRA FORMA E MAIS SIMPLIFICADA É A FORMA ABAIXO.
ELA PODE SER DESCRITA DA SEGUINTE FORMA, PARA CADA POSIÇÃO
EM 'IN' NUM VAI SER MOSTRADO O NUM[POS]
ELA SÓ SERVE PARA ARRAY E OBJETOS. NÃO SEI OQ SIGFICA OS 2 
PROVAVELMENTE NÃO SERVE PARA COISAS SIMPLES */

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
