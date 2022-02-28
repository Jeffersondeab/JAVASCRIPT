/* var idade = 67
console.log(`você tem ${idade} anos`)
if (idade < 16){
    console.log(`não precisa votar`)
}else if (idade < 18 || idade > 65){
    console.log(`seu voto é opcional`)
}else
    console.log(`Seu voto é obrogatório`)
 */



var idade = 14
console.log(`você tem ${idade} anos`)
if (idade < 16){
    console.log('você ainda não pode votar')
}else if (idade < 18 || idade >= 65){
    console.log(`Seu voto é opcional`)
}else if (idade >= 18 ){
    console.log(`seu voto é obrigatório`)
}else if (idade >= 65){
    console.log(`Seu voto é opcional`)
}
