let result = ''
let hasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let firstcard = generateRandomCard(13)
let secondCard = generateRandomCard(13) 
let cards = [firstcard, secondCard] 
let sum = firstcard + secondCard 
let totalCards = ''

let player = {
    Name : 'Moji',
    Chips : 145

}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ': $' + player.Chips
cardsEl.textContent = 'cards : ' 

function generateRandomCard(max) {
    if(( Math.floor(Math.random() * max) + 1 ) == 1){
        return 11;
    } else if((Math.floor(Math.random() * max) + 1 ) > 10) {
        return 1;
    }
    else{
        return(Math.floor(Math.random() * max + 1 ));
    }
}

function startGame(){
    isAlive = true
    renderGame()
    cardsEl.textContent += cards[0] + ',' + cards[1]
}

function renderGame(){
    sumEl.textContent = 'Sum : ' + sum
    console.log(sum)
    
    if (sum <= 20) {
        message = 'do you want more?'

    } else if(sum === 21){
        message = 'you have got a blackjack'
        hasBlackJack = true
    }else{
        message = 'you Lost! please refresh . '
        isAlive = false

    }

messageEl.innerText = message
}
function newCard(){

    if (isAlive ===true && message !== 'you have got a blackjack'){
        
        if (message =='you Lost! please refresh . '){
            messageEl.innerText = "Sorry you've already Lost"
            return
        }
        else{
            console.log('drawing a new card from the deck')
            let card = generateRandomCard(10)
            cards.push(card)
            sum += card
            console.log(cards)
            totalCards = 'cards :' 
        }
        
        for (let counter = 0; counter < cards.length; counter++) {
            totalCards += cards[counter] + ','
        }
        cardsEl.textContent = totalCards
        renderGame()
    } else{
        messageEl.innerText = 'sorry you cant continue!'
    }
}
