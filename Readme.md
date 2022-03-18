TIC-TAC-TOE
As users playing a two player game we want to:

enter our names and have them displayed
have our order chosen for us by the game
take turns placing our marks in empty spaces
not be able to place our marks in an occupied space
be told when a move causes a player to win, or to draw
start the game over without having to reset the browser
As a user playing a one player game I want to:

see the name 'Computer' displayed as my opponent
have the Computer player make moves as if it were a human player with the correct mark in an empty space
As a user playing a single player game I would be delighted to:

have the Computer make 'better-than-guessing' choices when placing a mark on the board
set the board size myself ("wider" or "taller" than 3x3)


Common Requirements (30%)
As an instructor I want to see you demonstrate mastery (when appropriate) of:

variable declaration (correct use of let and const)
loop usage (for or while loops)
control structures (if, else, else if)
function declaration
function invocation
usage of basic data types
usage of complex data types, like arrays and objects
DOM Manipulation including:
templating & rendering
element queries
events
the (update state -> render -> interact with ui) loop
CSS Practices including:
proper use of Flex or Grid
proper use of cascading and specificity
Developing a good user experience through a clean interface
As an engineering manager I want to see code (HTML, CSS, and JS) that:

is cleanly written
has no unused functions or variables
has expressive variable, function, and class names
is organized into a coherent flow










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