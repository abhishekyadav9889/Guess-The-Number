let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textoutput");
let userNumberUpdate = document.getElementById("inputBox");
let maxGuess;
let audio = new Audio('./audio/abc.wav');

const init = () => {
    computerGuess = Math.floor(Math.random() * 100) + 1;
    console.log(`Computer Guess: ${computerGuess}`); 
    document.getElementById("newGameButton").style.display="none";
    document.getElementById("gameArea").style.display="none";
};

const startGame = () => {
    document.getElementById("welcomeScreen").style.display="none";
    document.getElementById("gameArea").style.display="block";
};
// Function to reset and start a new game
const startNewGame = () => {
    document.getElementById("newGameButton").style.display = "block";
    userNumberUpdate.setAttribute("disabled", true);
};

//reladod the page
const newGameBegin=()=>{
    audio.play();
    window.location.reload();

};

// Main logic of our app
const compareGuess = () => {
    audio.play();

    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guess").innerHTML = userGuess;

// Check if guess is too low, too high, or correct
if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
        userGuessUpdate.innerHTML = "Your guess is High!";
        userNumberUpdate.value = "";

    } else if (userNumber < computerGuess) {
        userGuessUpdate.innerHTML = "Your guess is Low!";
        userNumberUpdate.value = "";

    } else {
        userGuessUpdate.innerHTML = "It's correct!";
        userNumberUpdate.value = "";
        startNewGame(); 
    }
    document.getElementById("attempts").innerHTML = userGuess.length;
} else {
    if (userNumber !== computerGuess) {
        userGuessUpdate.innerHTML = `You Lose! The correct number was ${computerGuess}.`;
        userNumberUpdate.value = "";
        startNewGame();
    } else {
        userGuessUpdate.innerHTML = "It's correct!";
        userNumberUpdate.value = "";
        startNewGame();
    }
    document.getElementById("attempts").innerHTML = userGuess.length;
    startNewGame(); // Call to start a new game after losing
} 
};

const easyMode = () => {
    audio.play();

    maxGuess = 10;
    startGame();
};

const hardMode = () => {
    audio.play();

    maxGuess = 5;
    startGame();
};

