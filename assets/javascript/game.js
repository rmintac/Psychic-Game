var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var letterGuess = "";
var wins = 0;
var loss = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var winLetter = "";



var h1 = document.getElementById('computerChoice')
document.onkeyup = function (event) {

    console.log('Player Guess ', event.key);

    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log(computerGuess);
}

function updateScreen() {
  var winsPlayer = document.getElementById("wins");
  var lossesPlayer = document.getElementById("loss");
  var guessesLeftPlayer = document.getElementById("guessesLeft");
  var guessesRemaining = document.getElementById("guessesLeft");

  winsPlayer.textContent = "Wins:" + wins;
  lossesPlayer.textContent = "Losses:" + loss;
  guessesLeftPlayer.textContent = "guessesLeft:" + guessesLeft;
  guessesRemaining.textContent = "guessesSoFar:" + guessesSoFar;

  if (letterGuess == winLetter){
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

updatesScreen();
console.log("win" + wins);
console.log("Loss" + loss);
console.log("Guesses Left:" + guessesLeft);
console.log("So Far:" +letterGuess);
};
