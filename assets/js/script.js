// Declaring variables to be used in the functions comming up
let userTally = 0;
let computerTally = 0;
let scoreDiv = document.querySelector("score");
let rockButton = document.getElementById("Rock");
let paperButton = document.getElementById("Paper");
let scissorsButton = document.getElementById("Scissors");
let userScoreShown = document.getElementById("user-score");
let computerScoreShown = document.getElementById("comp-score");
let resultScript = document.querySelector(".result > p");
let gameZone = document.querySelector("game")
// Event listeners for the buttons on the game to trigger the game functions 
function click() {
    // Event listener for when the rock button is pressed 
    rockButton.addEventListener("click", function () {
        runGame("Rock")
    });
    // Event listener for when the paper button is pressed
    paperButton.addEventListener("click", function () {
        runGame("Paper")
    });
    // Event listener for when the scissors button is pressed
    scissorsButton.addEventListener("click", function () {
        runGame("Scissors")
    })

}
// A function for generating random choices for the computer
function theComputerPick() {
    picks = ["Rock", "Paper", "Scissors"]
    // Generates random numbers between 1 and 3
    random = Math.floor(Math.random() * 3);
    return picks[random]
}
// A function to determine the winner of the game and whether it's a draw 
function runGame(userPick) {
    let computerChoice = theComputerPick();
    // A switch statement that goes through each scenario of choices and the function to run   
    switch (userPick + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userPick, computerChoice)
            break
        case "RockPaper":
        case "PaperRock":
        case "ScissorsPaper":
            lose(userPick, computerChoice)
            break
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userPick, computerChoice)
            break
    }
    theWinner();
}
// A function that determines what happens when the user loses the game
function win(userPick, computerPick) {
    // Adds to the user tally when user wins the game  
    userTally++;
    userScoreShown.innerHTML = " " + userTally;
    computerScoreShown.innerHTML = " " + computerTally;
    // Adds comment to page to show how the game played out     
    resultScript.innerHTML = `${userPick} wins over ${computerPick}. You're the winner! :D`
}
// A function that determines what happens when the user wins the game
function lose(userPick, computerPick) {
    // Adds to the computer tally when computer wins the game    
    computerTally++;
    computerScoreShown.innerHTML = " " + computerTally;
    userScoreShown.innerHTML = " " + userTally;
    // Adds comment to page to show how the game played out     
    resultScript.innerHTML = `${userPick} loses to ${computerPick}. You've lost :(`
}
/* A function that determines what happens when the user draws the game */
function draw(userPick, computerPick) {
    // Adds comment to page to show how the game played out 
    resultScript.innerHTML = `${userPick} draws against ${computerPick}`
}

function theWinner() {
    if (userTally === 3) {
        return gameZone.innerHTML = `<h1>You're the Winner!</h1>`;
    } else if (computerTally === 3) {
        return gameZone.innerHTML = `<h1>Computer wins!</h1>`;
    } else {
        null
    }
}
click();
theWinner();