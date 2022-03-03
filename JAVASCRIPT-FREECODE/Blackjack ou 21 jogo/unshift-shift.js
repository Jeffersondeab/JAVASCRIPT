let países = ['Brasil', 'Alemanha', 'Canadá', 'EUA']
 


/* PELO QUE PERCEBI O POP VAI APAGAR O QUE FOI ADICIONADO
POR ÚLTIMO */
países.pop()
/* O PUSH VAI RETIRAR O ÚLTIMO COLOCADO, OS EUA, E ADICIONAR 
MÉXICO  */
países.push('México')
/*O SHIFT VAI RETIRAR O PRIMEIRO COLOCADO, NESSE CASO O BRASIL  */
países.shift()
/* O UNSHIFT VAI ADICINAR A CHINA NA PRIMEIRO LUGAR */
países.unshift('China')
console.log(países)
 
/* países.push('Reino Unido')
países.shift()
países.unshift('China') */