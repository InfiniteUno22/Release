// deck creation vars
let players = ['.p1', '.p2'];
let playerSkips = [1, 1];
let pIndex = 0;
let turnPlayer = players[pIndex];






// updates the display of the deck's card count
function updateDeckCount() {
    deckElement.innerText = deck.pile.length
}

// goofy ah math to shuffle the deck


 // appends a card to itsZone
function drawCard(itsZone) {
    if (deck.pile.length > 0) {
        document.querySelector(itsZone).appendChild(deck.pile[0].element)
        deck.pile.shift()
        updateDeckCount()
    }
    if (deck.pile.length == 0){
        topDeck.remove()
    } 
}

passButton.addEventListener('click', () => {
    if (playerSkips[pIndex] > 0) {
        playerSkips[pIndex]--;
        console.log("Player " + (pIndex + 1) + " has skipped.");
        pIndex++;
        if (pIndex > 1) {
            pIndex = 0;
        }
        console.log('passed');
        currPlayer.innerText = players[pIndex];
        passCount.innerText = playerSkips[pIndex];
    }
    else {
        console.log("you lose.");
    }
    

})


