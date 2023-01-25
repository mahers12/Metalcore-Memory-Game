Rules:

1- The board consists of 8 pairs of pictures.
2- four rows- four cols
3- Each turn, the player will flip over two pictures, one at a time.
4- If the two pictures match, then they are removed from the game. Otherwise, they are flipped again.
5- The game ends when all the pictures are matched.

## Data Structures :

1-2D Array (4rows \* 4 cols) [state]: storing the current state of the ground
turn to -1 when fliping the card
Example:
[[-1,2,5,-1],
[3,1,3,6],
[6,2,5,1],
[-1,0,0,-1]]

2- Object [cardDetails] :the keys are the cards number and values are object storing the
card details
Example:
let cardDetails={
-1:{ /_flipped card_/
image:"";
},
0:{
image:link
},
1:{
image:link
}
}
3-variable selected card1 :variable holding the value of the first selected Card
4-variable selected card2 :variable holding the value of the second selected Card

## Functions;

1- startGame: reset the state array to all 0 , reset the cards ,state timer
2- shuffle: will be shuffled the 2d array by assigning every card to two random empty spots

3- checkMatch: if the selected card1 equal to selected card 2
then return true, else return false

3- setMatched: assign the value -1 to the selected spots in the state array and
hide the cards elements on the UI

4- flipCard: flip the card image on the UI

6- checkEnd:if all cells in the state array are -1

7- endGame:end the game,called by a timer

8- createBoard: will create the board element at the beginning of the game

## EventLiseners:

1-every card on the UI will event listener for the click

## Resouces :

9 images :
1 image for the flipped card
8 differentt images

## Game flow:

1-we call startGame
startGame will call shuffle
startGame will call creatBoard

2-when triggering the event listener of the card:

first click:
set the selected card to the value of the spot in the state array

second click:
call checkMatch,setMatched ,flipCard,checkEnd

3-when the timer end,call endGame

## HTML

Maybe set up a timer
Set-up dark mode
