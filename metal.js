const resetButton = document.getElementById('reset-button')
const brd = document.querySelector('.board')
let state
let cardDetails
let firstCard
let secondCard
let cardPicked = []
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
  addEventsListeners()
  shuffleCards()
  console.log(state)
}

function createBoard() {
  brd.innerHTML = ''
  for (var i = 0; i < 4; i++) {
    ///create the row element
    const rowEl = document.createElement('div')
    rowEl.classList.add('row')
    for (let u = 0; u < 4; u++) {
      var card = document.createElement('img')
      card.setAttribute('src', cardDetails['0'].link)
      card.classList.add('card')
      card.classList.add(`card_${u}${i}`)
      ///card.addEventListener('click', flippedCard)
      rowEl.appendChild(card)
      // card.addEventListener(click, flipcard);
    }

    brd.appendChild(rowEl)
  }
}
const checkForWin = () => {
  console.log('checkForWin')
}

function flipcard() {
  var cardDetails = this.setAttribute('cardDetails')
  cardPicked.push(cardArray[cardDetails.name])
  cards.forEach((card) => card.addEventListener('click', flipCard))
  if (firstCard) {
    secondCard = true
    this.classList.add('flip')
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
  hideCards()
}

function showCards() {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      showCard(row, col)
    }
  }
}
function hideCards() {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      hideCard(row, col)
    }
  }
}
function viewCards() {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (state[row][col] !== -1) {
        hideCard(row, col)
      } else {
        showCard(row, col)
      }
    }
  }
}
function showCard(row, col) {
  let item = state[row][col]
  if (item == -1) {
    return
  }

  const cardEl = document.querySelector(`.card_${row}${col}`)

  cardEl.setAttribute('src', cardDetails[item].link)
}
function hideCard(row, col) {
  const cardEl = document.querySelector(`.card_${row}${col}`)
  cardEl.setAttribute('src', cardDetails[0].link)
}
function addEventsListeners() {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const cardEl = document.querySelector(`.card_${row}${col}`)
      cardEl.addEventListener('click', () => {
        handleClick(row, col)
      })
    }
  }
}
function handleClick(row, col) {
  if (state[row][col] == -1) {
    return
  }
  if (firstCard != -1 && firstCard[0] == row && firstCard[1] == col) {
    return
  }

  showCard(row, col)
  if (firstCard == -1) {
    firstCard = [row, col]
  } else if (secondCard == -1) {
    secondCard = [row, col]
    setTimeout(() => {
      checkMatch()
      firstCard = -1
      secondCard = -1
      viewCards()
    }, 2000)
  }
}
function checkMatch() {
  ///every card has row and col
  const [row1, col1] = firstCard

  let row2 = secondCard[0]
  let col2 = secondCard[1]
  let value1 = state[row1][col1]
  let value2 = state[row2][col2]

  if (value1 == value2) {
    state[row1][col1] = -1
    state[row2][col2] = -1
  }
}

let timeLeft = 40
let elem = document.getElementById('timer')
let timerId = setInterval(countdown, 1000)

function countdown() {
  if (timeLeft <= -1) {
    clearTimeout(timer)
    window.clearInterval(timerId)
    showCards()
    alert('You Lost!')
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining'
    timeLeft--
  }
}
resetButton.addEventListener('click', () => {
  console.log('restart the game')
  timeLeft = 60
  window.clearInterval(timerId)
  timerId = setInterval(countdown, 1000)
  hideCards()
})
