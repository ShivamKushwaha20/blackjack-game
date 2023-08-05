var cardArray = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector(".wannaPlay");
let sumMessage = document.querySelector("#sumOfCard");
let cardMessage = document.getElementById("cardsOfGame");
let playerName = document.querySelector(".player_el");

playerEl = {
    name:"player1",
    chips: 120 
}
playerName.textContent = playerEl.name + ": $" + playerEl.chips;
function randomCard(){
    let randomNumber = Math.floor(Math.random()*14);
    if(randomNumber > 10){
        return 10;
    }
    else if( randomNumber == 1){
        return 11;
    }
    else {
        return randomNumber;
    }
}

// Instead of calling startGame() again and again
function startGame(){
        isAlive = true;
    // Generating the first two cards in the function;
        var firstCard = Math.floor(Math.random()*11);
        var secondCard =Math.floor(Math.random()*11); 
        cardArray = [firstCard, secondCard]; 
        sum = cardArray[0] + cardArray[1];
        renderGame();
}
//Starting game function Here;
function renderGame(){
    // cardMessage.textContent = "Card: ";
    // for(let i = 0; i<cardArray.length; i+=1){
    //     cardMessage.textContent += " "+ cardArray[i] ;
    // }
    
    cardMessage.textContent = "Cards: "+ cardArray.join(" ");
    console.log(cardMessage.textContent);
    sumMessage.textContent = "Sum: "+sum; 
    if(sum<= 20){
        messageEl.textContent = "Do you want to draw a new card?";

    }
    else if(sum===21){
        messageEl.textContent = "You have got the BlackJack!!";
        isAlive = true;
        console.log(messageEl.textContent);

    }
    else {
        messageEl.textContent = "You are out of the game!!";
        isAlive = false;
        console.log(messageEl.textContent);
    }
    
}
function newCard(){
    if(isAlive === true && hasBlackJack === false){

        // Letting new card of random number from 2 to 11
        let newCard = randomCard();
        
        
        // Now adding newCard in the sum
        sum += newCard;
        //Pushing the new card in the card array
        cardArray.push(newCard);
        //At last we start the game again 
        renderGame();
    }
}