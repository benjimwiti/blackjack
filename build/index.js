//FETCHING ELEMENTS
let c1 = document.getElementById("c1-el");
let c2 = document.getElementById("c2-el");
let c3 = document.getElementById("c3-el");
let c4 = document.getElementById("c4-el");
let sumEl = document.getElementById("sum-el");
let tableDude = document.getElementById("message");
let cardDisplayEl = document.getElementById("card-el");
let valueElone = document.getElementById("value1")
let valueEltwo = document.getElementById("value2")
let valueElthree = document.getElementById("value3")
let valueElfour = document.getElementById("value4")

//AUXILLIARY FUCTIONS
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

function valueUp () {
    cardValue=[...cards]
    for(let i=0; i<cards.length;i++) {
        if (cards[i]===1) {
            cardValue[i]=11
        } else if (cards[i]>10) {
            cardValue[i] = 10
        } else {
            cardValue[i]= cards[i]
        }
    }
    valueElone.innerHTML = `Card value = ${cardValue[0]}`
    valueEltwo.innerHTML = `Card value = ${cardValue[1]}` 
    valueElthree.innerHTML = `Card value = ${cardValue[2]}` || `not yet`
    valueElfour.innerHTML = `Card value = ${cardValue[3]}`
}

function addCard() {
    if (state===true) {
        cards.push(rn())
        stateNcroupier()
    } else {
        tableDude.textContent = `cannot add card, Perhaps new round`
    }
}

function newGame() {
    cards=[]
    cardValue=[]
    sum = 0
    startGame()
}

function stateNcroupier () {
    valueUp()
    sum = sumUp(cardValue)
    if (sum === 21) {
        heSays = `🎆You've got blackJack🎆`
        state = false
    } else if (sum < 21) {
        heSays = "One more card could do the trick!"
        state = true
    } else if (sum > 21 ) {
        state = false
        heSays = `card value past 21, Another round?`
    } else {
        heSays = "Executing the else block"
        state = false
    }
    renderFace()
    tableDude.innerHTML = heSays
    sumEl.textContent = `Total Card Value: ${sum}`
    console.log(cards)
    console.log(cardValue)
}

    //FUNCTION VARIABLES
    let cards=[]
    let cardValue=[...cards]
    let sum = 0
    let state = true
    let [cardone,cardtwo,cardthree,cardfour,cardfive] = cards
    console.log(cards)
    console.log(cardone)


    function startGame () { 
  if (sum == 0) {
    cards.push(rn())
    cards.push(rn())
    stateNcroupier()
  } else {
        tableDude.textContent = `Try another option (yaani ..buttons)`
  }
}





//CARDS DISPLAY
const face = [`<img src="./img/backface.png" alt="" height="60%" width="60%">`,
    `<img src="./img/ace.png" alt="" height="60%" width="60%">`,
    `<img src="./img/2.png" alt="" height="60%" width="60%">`,
    `<img src="./img/3.png" alt="" height="60%" width="60%">`,
    `<img src="./img/4.png" alt="" height="60%" width="60%">`,
    `<img src="./img/5.png" alt="" height="60%" width="60%">`,
    `<img src="./img/6.png" alt="" height="60%" width="60%">`,
    `<img src="./img/7.png" alt="" height="60%" width="60%">`,
    `<img src="./img/8.png" alt="" height="60%" width="60%">`,
    `<img src="./img/9.png" alt="" height="60%" width="60%">`,
    `<img src="./img/10.png" alt="" height="60%" width="60%">`,
    `<img src="./img/jersey.png" alt="" height="60%" width="60%">`,
    `<img src="./img/queen.png" alt="" height="60%" width="60%">`,
    `<img src="./img/king.png" alt="" height="60%" width="60%">`,
    ]



function renderFace () {
    c1.innerHTML = face[makeIndex(cards, 0)]
    c2.innerHTML = face[makeIndex(cards, 1)]
    c3.innerHTML = face[makeIndex(cards, 2)]
    c4.innerHTML = face[makeIndex(cards, 3)]  
    if (cards[2] == undefined ) {
        c3.innerHTML = face[0]
        valueElthree.textContent = `\\\\`
    } else{}
    if (cards[3] === undefined) {
        c4.innerHTML = face[0]
        valueElfour.textContent = `\\\\`
    }
} 

function makeIndex (arr, index) {
    return arr[index]
}

console.log("hey")