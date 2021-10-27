let randNum = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const infoTxt = document.getElementById("infoTxt");
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const guessTally = document.getElementById("guessTally");
const highScore = document.getElementById("highScore");
const reset = document.getElementById("resetGame");
const pastGuess = document.getElementById("pastGuesses");
const secretNum = document.getElementById("secretNum");


let score = 0
var guessCount = 10;
var guessArray = [];
let resetButton;

secretNum.value = '?';
console.log(randNum)
guessTally.value = guessCount;
infoTxt.innerHTML = "Input a number 1-100 to guess!  Good luck!<br>";
highScore.value = "0";

function checkGuess() {
    let userGuess = Number(guessField.value);
    reset.disabled = true;
        if (isNaN(userGuess) || userGuess > 100 || userGuess < 1) {
            alert(`Please enter a NUMBER 1-100`);
        }
        else if (guessArray.includes(userGuess)) {
            infoTxt.innerHTML = "Input a new number<br>";
        }
        else if (userGuess === randNum) {
            console.log("YOU WIN");
            infoTxt.innerHTML = "You Win!<br>";
            guessTally.value = guessCount;
            secretNum.value = randNum;
            document.body.style.backgroundColor = "lightpink";
            if (score < guessCount) {
                score = guessCount
                highScore.value = score;
            }
            guessField.disabled = true;
            guessSubmit.disabled = true;
            reset.disabled = false;
            reset.value = "New Game";
        }
        else if (userGuess > randNum) {
            console.log("Sorry, too high");
            infoTxt.innerHTML = "Too high! <br>";
            guessCount -= 1;
            guessTally.value = guessCount;
            guessArray += userGuess +  ', ';
            pastGuess.innerHTML= `Your previous guesses: ${guessArray}`;
            checkCount();
        }
        else if (userGuess < randNum) {
            console.log("Sorry, too low");
            infoTxt.innerHTML = "Your guess is too low! <br>";
            guessCount -= 1;
            guessTally.value = guessCount;
            guessArray += userGuess + ', ';
            pastGuess.innerHTML= `Your previous guesses: ${guessArray}`;
            console.log(guessArray);
            checkCount();
        }
    }

function decrease(guessCount, userGuess, guessArray){
    guessCount -= 1;
    guessTally.value = guessCount;
    guessArray += userGuess + ' ';
    pastGuess.innerHTML= guessArray;
}
function checkCount() {
    if (guessCount === 0) {
        console.log("sorry game over")
        infoTxt.innerHTML = "Game Over!";
        guessTally.value = guessCount;
        guessField.disabled = true;
        guessSubmit.disabled = true;
        reset.disabled = false;
    }
}
function resetGame() {
    guessCount = 10;
    guessTally.value = guessCount;
    let randNum = Math.floor(Math.random() * 100) + 1;
    guessArray = [];
    pastGuess.innerHTML = '';
    guessField.value = '';
    reset.value = "Reset";
    guessField.disabled = false;
    guessSubmit.disabled = false;
    secretNum.value = '?';
    infoTxt.innerHTML = "Input a number 1-100 to guess!  Good luck!";
    document.body.style.backgroundColor = "lightblue";
}
function gameOver() {
    let randNum = Math.floor(Math.random() * 100) + 1;
}

reset.addEventListener('click', resetGame);
guessSubmit.addEventListener('click', checkGuess);