var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var letterGuess = "";
var wins = 0;
var loss = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var winLetter = "";

var computerGuess = computerChoice[Math.floor(Math.random() + computerChoice.length)];

document.onkeyup = function (event) {

    console.log('Player Guess ', event.key);

    
    console.log(computerGuess);

    var current = event.key
}

function updateScreen() {
   winsPlayer = document.getElementById("wins");
   lossesPlayer = document.getElementById("loss");
   guessesLeftPlayer = document.getElementById("guessesLeft");
   guessesRemaining = document.getElementById("guessesLeft");

  //notes on notebook

  
  
  
  
  //goes inside on key up
  if (computerGuess === current){
    wins = wins + 1;
    winLetter = computerChoice[Math.floor(Math.random() * 26)];
    guessesLeft = 9;
    letterGuess = "";
    alert (" You won by pressing the mystery letter!")
  }
  else if (guessesSoFar != winLetter && guessesLeft > 1 ) {
    guessesLeft = guessesleft - 1;
    letterGuess = letterGuess + guessesSoFar + 
}

else if (guessesSoFar != winLetter && guessesLeft == 1) {
  loss = loss + 1;
  winLetter = computerChoice[Math.floor(Math.random() * 26];

  guessesLeft = 9;
  lettersPicked = "";
  alert ( "You lost")};



//needs to be called outside on key
  updatesScreen();
console.log("win" + wins);
console.log("Loss" + loss);
console.log("Guesses Left:" + guessesLeft);
console.log("So Far:" +letterGuess);
};
