default template provided

const gameState = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }

Things to do
  game must be turned on and off
  cell should react when clicked
  same cell cannot be clicked twice
  status display 
  reset button
  read more about querySelector
  players must alternate turn
  conditions for win & draw / 8 possibilities
  alert, or foreach = try to use it


  
  Instructions for later
  
  THE STATE
A successful implementation will be able to keep track of the current player and the board. One very small implementation of state could look like this:

const gameState = {
  players: ['x', 'o'],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}
You could always say that the current player is whomever is in the 0 position of gameState.players and swap them after each play.

SOME HARD PARTS
Every time a player plays, you'll have to check to see if their play was a winning one. There are two diagonals, three horizontal, and three vertical collections of three to check against. This logic can be the hardest to implement, and benefits from being broken into several smaller pieces.

For example, given one array with three things, are all three identical? How do I ensure that I'm checking all 8 possibilities? Do I have to check them each and every time.

You'll also have to create controls to start over, and have to be able to disable user clicking when the game is over or a tie. You should disable clicking on already used spots, etc.

STRETCH GOALS
There are two fairly difficult, but really great stretch goals with Tic-Tac-Toe:

"Smart" computer player
Brainy (Instead of randomly picking an empty spot): the "easy version" of this is to look at all empty spaces, and ask if any of them get you a win, if so, choose it, otherwise choose randomly
SUPER BRAINY: for each look ahead, see if there's a win for the human player, if so, eliminate those from the possible choices
Board Size Change (n-by-n)
Here you could switch to either checking for 3-of-a-kind still, or for n-of-a-kind (row, horizonal, diagonal)