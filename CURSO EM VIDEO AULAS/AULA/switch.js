var agora = new Date ()
var diaSem = agora.getDay()

/* 
    0 = Domingo
    1 = Segunda
    2 = Terça 
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/


/* SE TIRAR O CONSOLE.LOG(DIASEM) O NÚMERO QUE APARECE EM CIMA SOME */

 console.log(diaSem) 

/* SE COLOCAR  diaSem = 3 e tirar  console.log(diaSem)  ELE VAI APARECER 
O dia da semana de acordo com número coloca nele.
  */


switch (diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] dia invalido')
        /* O BREAK NO DEFAULT É OPCIONAL, MAS É SEMPRE BOM COLOCAR */
        break
}
    