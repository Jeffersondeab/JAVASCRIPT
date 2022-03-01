

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

/* ele colocou essa variável hasblackjack junto
com o hasblackjack = true, a principio não mudou
nada */
let hasBlackJack = false

/* O que eu entedi foi, hasblackjack é falso pq ele não obteve 
o objetivo ainda, sendo ele falso,colocando ele como verdairo la no
else if que é quando se obteve o objetivo.
isAlive é true pq ele ainda está no jogo, ele não perdeu, 
sendo a narrativa verdadeira até o momento, se ele passar dessa
narrativa sum < 21 ele é falso. */
let isAlive = true

/* é possível tbm criar uma variável vazia para substituir a string
console.log. Se eu substituir a string messagem por console.log vai
ser a mesma coisa, mas acho que uma variável vazia é mais útil, serve
para a criação mesmo no devs front. Lembrando que é preciso tirar
as aspas, colocar da seguinte forma messagem = 'texte' quando for 
para funcionar corretamente  */
let messagem = ''


let messageEl = window.document.getElementById('messagem-el')
let sumEl = window.document.getElementById('sum-el')
let carosel = window.document.getElementById('carosel-el')
  
 /* A FUNÇÃO A BAIXO É SÓ PARA MUDAR O NOME STARTGAME PARA 
 RENDERGAME, PARA FAZER MAIS SENTIDO AO CONTEXTO DO PROGRAMA
 NO DECORRER DO DESENVOLVIMENTO, PARA NÃO PRECISAR MUDAR O 
 NOME NO ONCLICK, MAS SE QUISSESE SÓ TROCAR NO ONCLICK
 PODERIA SER FEITO TBM */
function StartGame(){
    renderGame()
}

function getRandomCard(){
    let num = Math.floor(Math.random()*13) + 1
    return num
}


function renderGame() {
    carosel.textContent = 'Cards:'
    for(let i = 0; i < cards.length; i++){
        carosel.textContent += cards[i] + ' '
    }
     
    sumEl.textContent = 'Sum:' + sum
    if (sum < 21) {
        messagem = 'Do you want to a new card? 🤔'
        isAlive = false
    } else if (sum === 21) {
        messagem = "wohoo! You've got blackjack 😃"
        hasBlackJack = true
    } else {
        messagem = "You're out of the game! 😭"
    }
    messageEl.textContent = `${messagem}` 
}

/* Na função newc só foi adicionado a opção para 
adicionar mais números  */

function newc(){
    let card = getRandomCard()
    sum = sum + card 
    cards.push(card)
    renderGame()
}

