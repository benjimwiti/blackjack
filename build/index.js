console.log("hey");
let startGameEl = document.getElementById("startGame");
let cOne = document.getElementById("c1");
let sumEl = document.getElementById("sum-el");
let tableDude = document.getElementById("message");
let cardDisplayEl = document.getElementById("card-el");


function rn(){
    return Math.floor(Math.random()*13)+1;
}

function sumUp(arr) {
    let summed=0
    for (let i=0; i<arr.length; i++) {
         summed += arr[i]
    }
    return summed
}
//RENDERING THE GAME
function renderGame () {
    let cardOne = rn()
    let cardTwo = rn()
    let state= true
    
    //PUSH TO ARRAY
    let cards=[]
    cards.push(cardOne)
    cards.push(cardTwo)
    let sum = sumUp(cards)
    

    //SETTING ACE AND PLUS 10 VALUE CARDS
    function value() {
        for(let i=0; i<cards.length; i++) {
            if(i===1) {
                cards[i] = 11
            } else if(i>10) {
                cards[i]=10
            } 
        }
    }

    //RUNNING VALUE
    value()

    //SETTING REPLIES BY TABLE GUY
    if (sum<21) {
        state = true
        heSays = `Would you like to draw another card?`
    } else if (sum==21) {
        state = false
        heSays = `You've got blackjack.`
    } else {
        state = false
        heSays = `Another round?`
    }

    //RENDER GAME OUTPUT
    tableDude.textContent = heSays
    sumEl.textContent = sum
}

function addCard() {
    
    //ADDING CARDS
    if (state===false) {
        heSays = `Cannot draw card, Another round?`
    } else {
        cards[cards.length+1]=rn()
        renderGame()
        
    }
}

//CARDS DISPLAY
let cardsDisplay = {
    "1" : cOne.textContent= `<img src="./img/queen.png" alt="" height="200px" width="200px"></img>`,
    "2" : "2",
    "3" : "3",
    "4" : "4",
    "5" : "5",
    "6" : "6",
    "7" : "7",
    "8" : "8",
    "9" : "9",
    "10" : "10",
    "11" : "11",
    "12" : "12",
    "13" : "13",
}

function cardDisplay () {
    for (let i=0; i<cards.length;i++) {
        cardsDisplay["i"] 

        }
    }

    let cd2= [
        `<img src="./img/queen.png" alt="" height="200px" width="200px"></img>`,
    ]

    function cdTwo (arr) {
        for (let i=0; i<cd2.length;i++) {
            if(cOne) {
            cOne.textContent = cd2[i]
            }
        }
    }

console.log("hey")