const brd = document.querySelector('.board')
let state
let cardDetails
let firstCard
let secondCard

startGame()

function startGame() {
  state = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
  cardDetails = {}

  for (let i = 0; i < 9; i++) {
    cardDetails[i] = {
      name: `card${i}`,
      link: `/images/card_${i}.png`
    }
  }
  firstCard = '-1'
  secondCard = '-1'

  createBoard()
  shuffleCards()
  console.log(state)
}

function createBoard() {
  brd.innerHTML = ''
  //creating a table and its children
  for (var i = 0; i < 4; i++) {
    ///create the row element
    const rowEl = document.createElement('div')
    rowEl.classList.add('row')
    for (let u = 0; u < 4; u++) {
      var card = document.createElement('img')
      card.setAttribute('src', cardDetails['0'].link)
      card.classList.add('card')
      ///card.addEventListener('click', flippedCard)
      rowEl.appendChild(card)
    }

    brd.appendChild(rowEl)
  }
}

function shuffleCards() {
  let col = Math.floor(4 * Math.random()) //2
  let row = Math.floor(4 * Math.random()) //2
  for (let i = 1; i < 9; i++) {
    while (state[row][col] !== 0) {
      col = Math.floor(4 * Math.random())
      row = Math.floor(4 * Math.random())
    }
    state[row][col] = i

    while (state[row][col] !== 0) {
      col = Math.floor(4 * Math.random())
      row = Math.floor(4 * Math.random())
    }
    state[row][col] = i
  }
}

/*
let row = document.createElement('rw')
for (let i = 0; i < 4; i++) {
  const row = document.createElement('rw')

  let column = document.createElement('clm')
  for (let j = 0; j < 4; i++);

}
board.appendChild(row);
board.appendChild(column);

document.getElementById("board").setAttribute("href, ")
const photoArr = {
    let cardDetails = [
        {
        -1: "flipped card"
        image:  "url"
        };
        }
        0: "first image"
        image:link
    }; 
}
        1: "second image"
        image: "link" 
};
{
2: {
sabaton: link
}

3: {
    jackwhite: "link"
}
4: {
    rammstein:
}

5: {
    halestorm : "link"

}

6: {
    decapitated: "link"
}

7: {
    motionlessInWhite: "link"

}

var firstSelectedCard = ["0,1,2,3,4,5,6,7"];
function storeValue( {
    console.log(firstSelectedCard)
})

var secondSelectedCard = ["0,1,2,3,4,5,6,7"]
function storeValue( {
    console.log(secondSelectedCard);
})



let matchedCards = document.getElementsByClassName('match')
let flippedCards = []
card.addEventListener('click', displayCard)
card.addEventListener('click,' checkCard);


function checkCard ( {
    openCards.push(this);

})


const cardDetails = document.createElement("cardDetails");
const logFunction = () => {
console.log ('card has been flipped')
  
}
cardDetails.addEventListner("click," logFunction);
.addEventListner('click,' function(flip) 
for (let i = 0; i< 16; i++) {


}
)
Var random = math.floor(Math.random () * (card.length-1));


*/
