

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = []
let sum = 0

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
let isAlive = false

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


let player = window.document.getElementById('player-el')
let play = {
    nome: 'Per',
    chips: 145
}
player.textContent = play.nome + ': $' + play.chips



/* A FUNÇÃO A BAIXO É SÓ PARA MUDAR O NOME STARTGAME PARA 
RENDERGAME, PARA FAZER MAIS SENTIDO AO CONTEXTO DO PROGRAMA
NO DECORRER DO DESENVOLVIMENTO, PARA NÃO PRECISAR MUDAR O 
NOME NO ONCLICK, MAS SE QUISSESE SÓ TROCAR NO ONCLICK
PODERIA SER FEITO TBM */

/* PARA REVER O CONCEITO DO MOTIVO DA ESTRUTURA A 
BAIXO SER FEITA ACHO QUE COMEÇA EM 3:00 NO VIDEO OU 3:30 */
function StartGame() {

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard + secondCard]
    sum = firstCard + secondCard
    renderGame()

}

function getRandomCard() {
    let num = Math.floor(Math.random() * 13) + 1
    if (num > 10) {
        return 10
    } else if (num === 1) {
        return 11
    } else {
        return num
    }
}


function renderGame() {
    carosel.textContent = 'Cards:'
    for (let i = 0; i < cards.length; i++) {
        carosel.textContent += cards[i] + ' '
    }


    sumEl.textContent = 'Sum:' + sum
    if (sum < 21) {
        messagem = 'Do you want to a new card? 🤔'
        isAlive = true
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

function newc() {
    if  (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum = sum + card
        cards.push(card)
        renderGame()
    }

}

