let frutas = ['🍓', '🍇', '🍇', '🍇', '🍓']
let uva = document.getElementById('uva-el')
let morango = document.getElementById('morango-el')

function tipos(){
    for(let i = 0; i < frutas.length; i++){
        if(frutas[i] === '🍓'){
            morango.textContent += '🍓'
        }else if(frutas[i] === '🍇'){
            uva.textContent += '🍇'
        }
    }
}

tipos()
